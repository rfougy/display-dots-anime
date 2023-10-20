<img alt="Display Dots Anime Logo" src="https://github.com/rfougy/display-dots-anime/assets/77861258/8d78c0cd-b591-4bda-bbb6-b0e129d33af1">

<h4 align="center">Display Dots Anime: A React Animation Library for the Display Dots Typeface</h4>

<table align="center">
  <tbody>
    <tr>
      <td>
        <a href="https://display-dots-anime.vercel.app/">Website</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/display-dots-anime">NPM</a>
      </td>
      <td>
        <a href="https://github.com/rfougy/display-dots-anime">GitHub Repo</a>
      </td>
    </tr>
  </tbody>
</table>

## Attention

This library is currently in beta and is **NOT** ready for a production setting. Please refer to the [release notes](https://github.com/rfougy/display-dots-anime/releases) for updates.

## Getting started

### Installation

Via npm:

```bash
$ npm install display-dots-anime
```

### Example Usage (via Next.JS v13 with ES6 Modules)

```javascript
"use client";

import { DisplayDotsProvider, DisplayDotsAnime } from "display-dots-anime";

export default function Home() {
  return (
    <DisplayDotsProvider>
      <DisplayDotsAnime text="Welcome to My Website" />
    </DisplayDotsProvider>
  );
}

```

## Demos and Examples

* [RIV.SYSTEMS](https://riv.systems/)

##

Created by [Riviere Fougy](https://riv.systems/)
