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
  if (parseResult.type !== "File") {
    throw new Error("The parse was not on a file.");
  }

  const { body } = parseResult.program;
  const importDeclarations = body.filter((babelBlock) => babelBlock.type === 'ImportDeclaration')
  const importedFiles = importDeclarations.map((importDeclaration) => importDeclaration.source)

  console.log(JSON.stringify(importedFiles, undefined, 4));
});
