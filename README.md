# The World in One Day — 17 November 2026

One image that sums up the world's news of Tuesday, 17 November 2026.
Entry for the make.fun bounty
[news-image-20261117](https://make.fun/bounty/news-image-20261117).

## The image

A newspaper front page — masthead, the date in a red band, a five-panel
photo montage, and a headline for each story:

1. **Europe** — Ukraine strikes the Crimea Bridge again; Kyiv's bridges bombed.
2. **Middle East** — Tankers hit by mines near the Strait of Hormuz;
   Iran–U.S. tensions flare.
3. **Asia** — Xi, Trump and Putin to meet: first three-way summit set for
   Shenzhen.
4. **U.S.A.** — Banks go down: Chase and Zelle hit by an outage.
5. **Space** — Voyager 1 nears one light-day from Earth.

Plus an "Also" line: Japan scrambles jets as Russian planes enter its
airspace, the U.K. sanctions builders of West Bank settlements, and the
Pentagon fails its audit for a 9th year. Every story is as reported on
17 November 2026.

## How it was made

The montage was rendered as an illustration (no text in it), then composed
with a script that draws the masthead, date and headlines in real fonts,
so every word is crisp and legible. `entry.png` is 1024×1024, under 1 MiB.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` and refuses to run if the file is over the 1 MiB
gate limit.

## License

MIT — see [LICENSE](LICENSE).
