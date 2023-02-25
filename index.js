#!/usr/bin/env node

import fs from "fs";
import path from "path";
import parser from "@babel/parser";

const cmdArgs = process.argv.slice(2);
const [entryFilePath] = cmdArgs;

const entryFileAbsolutePath = path.join(process.cwd(), entryFilePath);
if (fs.existsSync(entryFileAbsolutePath) === false) {
  throw new Error("The file does not exits.");
}

fs.readFile(entryFileAbsolutePath, "utf-8", (err, data) => {
  const parseResult = parser.parse(data, { sourceType: "module" });
  console.log(JSON.stringify(parseResult, undefined, 4));
});
