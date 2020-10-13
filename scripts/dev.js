const { spawn } = require("child_process");
const readline = require("readline");

const cmd = /^win/.test(process.platform) ? "npm.cmd" : "npm";

[
  spawn(cmd, ["run", "build:ui:watch"]),
  spawn(cmd, ["run", "start:playground"]),
].forEach((child) => {
  readline
    .createInterface({
      input: child.stdout,
    })
    .on("line",console.log);

  readline
    .createInterface({
      input: child.stderr,
    })
    .on("line", console.log);
});
