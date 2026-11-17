#!/usr/bin/env node
/*
 * build-artifact.js
 * Transforms the standalone index.html into a body-only file that can be
 * published as a claude.ai Artifact (which supplies its own <!doctype>, <head>,
 * charset and viewport). Keeps <title> + <style> + body markup + scripts.
 *
 * Usage:  node build-artifact.js   ->  writes dist/artifact.html
 */
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

const title = (src.match(/<title>([\s\S]*?)<\/title>/i) || [, "Groundwork"])[1];
const style = (src.match(/<style>[\s\S]*?<\/style>/i) || [""])[0];
const body = (src.match(/<body[^>]*>([\s\S]*?)<\/body>/i) || [, ""])[1];

const out =
  `<title>${title}</title>\n` +
  `<meta name="claude:viewport-fit-sides" content="cover">\n` +
  `${style}\n` +
  body.trim() + "\n";

const distDir = path.join(__dirname, "dist");
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "artifact.html"), out);
console.log("Wrote dist/artifact.html (" + out.length + " bytes)");
