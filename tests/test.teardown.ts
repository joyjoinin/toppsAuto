import { expect, test as teardown } from "@playwright/test";
import path from "path";
import fs from "fs";
import axios from "axios";

teardown("End rest lives", async () => {
  const testResultsPath = "test-results";
  const FormData = require("form-data");
  const channel = "ops-changelogs";

  let traces: string[] = [];

  const listTraceFiles = (dir: string) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        listTraceFiles(fullPath);
      } else if (stats.isFile() && fullPath.endsWith(".zip")) {
        traces.push(fullPath);
      }
    }
  };
  const getToken = async () => {
    const refreshToken =
      "xoxe-1-My0xLTM0MTE1ODIzODc1OS03MDM0Mjg4MTM4MjI3LTg2NDYyOTk4Mjc5MjAtNzMwNTk0NGVhYjg3Y2I3ZThjMzdjZDRmODYxZjFkNjViNWY1N2JjNGNlZmRlOGVjYzJjYTE5OTk2ZjRjZWUwNw";
    try {
      const response = await axios.get(
        "https://slack.com/api/tooling.tokens.rotate",
        {
          params: {
            refresh_token: refreshToken,
          },
        }
      );
      console.log("Token obtained: ", response.data);
      return response.data.token;
    } catch (error) {
      console.error("Error getting token: ", error);
      throw error;
    }
  };

  listTraceFiles(testResultsPath);

  const token = await getToken();
  console.log(token);

  for (const trace of traces) {
    if (trace.includes("retry1")) {
      const form = new FormData();
      const filename = trace
        .replace(/^.*\/([^/]+)\/trace\.zip$/, "$1")
        .replace(/[-]|chromium|retry1/g, "");
      form.append("file", fs.createReadStream(trace), filename);
      form.append("channels", channel);
      form.append("filetype", "zip");
      const headers = {
        ...form.getHeaders(),
        Authorization: `Bearer ${token}`,
      };

      // Make the POST request to the Slack files.upload endpoint
      await axios
        .post("https://slack.com/api/files.upload", form, { headers })
        .then((response) => {
          // Handle success
          console.log("File uploaded: ", response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error uploading file: ", error.message);
        });
    } else {
      try {
        const payload = {
          channel: channel,
          text: "Hello world :tada:",
        };
        const response = await fetch("https://slack.com/api/chat.postMessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (data.ok) {
          console.log("消息发送成功");
        } else {
          console.error("发送失败:", data.error);
        }
      } catch (error) {
        console.error("请求出错:", error);
      }
    }
  }
});
