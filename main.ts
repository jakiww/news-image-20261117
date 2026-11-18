// "The World in One Day" — news-image-20261117 entry (Node 22, stdlib only).
//
// The entry is the front page in entry.png: five verified stories of
// Tuesday 17 November 2026 (Crimea Bridge struck again, tankers hit near
// Hormuz, Xi-Trump-Putin summit set for Shenzhen, U.S. banking outage,
// Voyager 1 nears one light-day away), composed as a newspaper front page
// with a photo montage and crisp typeset headlines. The program copies
// that image, byte for byte, to /output/entry.png. It runs with no network.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// The gate allows at most 1 MiB and 1024 by 1024 pixels; refuse to hand in
// anything bigger rather than silently shipping a broken entry.
const { size } = statSync(source);
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate limit`);
}

// The PNG header (IHDR) carries the pixel size at bytes 16-23, big-endian.
const header = readFileSync(source).subarray(0, 24);
const width = header.readUInt32BE(16);
const height = header.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate limit`);
}

copyFileSync(source, target);
console.log(`copied entry.png (${size} bytes) to ${target}`);
