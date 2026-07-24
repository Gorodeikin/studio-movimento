# Asset licenses

This document lists the third-party font assets bundled locally in this
project and confirms their license terms and provenance.

## Manrope

- **Name:** Manrope (variable font, weight axis)
- **Designer / project:** Mikhail Sharanda, maintained as part of the
  Manrope Project (font metadata: "The Manrope Project Authors")
- **Source:** [google/fonts](https://github.com/google/fonts) repository,
  `ofl/manrope/Manrope[wght].ttf`
  (<https://github.com/google/fonts/tree/main/ofl/manrope>) — the official
  Google Fonts repository, as permitted by the project brief
- **License:** SIL Open Font License, Version 1.1 (OFL-1.1)
- **Copyright notice:** Copyright 2018 The Manrope Project Authors
  (<https://github.com/sharanda/manrope>)
- **Local file names:**
  - `assets/fonts/manrope-variable.woff2`
  - `assets/fonts/LICENSE-Manrope.txt` (full OFL-1.1 text, copied verbatim
    from the source repository)
- **Format note:** the upstream file is distributed as a variable TTF
  (`wght` axis, 200–800). It was converted to WOFF2 locally with
  `fontTools` for smaller file size; no glyphs, hinting instructions, or
  license/copyright metadata were altered.
- **Date obtained:** 2026-07-24
- **Local usage confirmation:** the font file is served exclusively from
  `assets/fonts/` on this site's own origin. No request is made to
  `fonts.googleapis.com`, `fonts.gstatic.com`, or any other external font
  CDN.

## Source Sans 3

- **Name:** Source Sans 3 (variable font, weight axis)
- **Designer / project:** Paul D. Hunt, Adobe
- **Source:** [google/fonts](https://github.com/google/fonts) repository,
  `ofl/sourcesans3/SourceSans3[wght].ttf`
  (<https://github.com/google/fonts/tree/main/ofl/sourcesans3>) — the
  official Google Fonts repository, as permitted by the project brief.
  Upstream design source: <https://github.com/adobe-fonts/source-sans>
- **License:** SIL Open Font License, Version 1.1 (OFL-1.1)
- **Copyright notice:** Copyright 2010–2020 Adobe (http://www.adobe.com/),
  with Reserved Font Name 'Source'. All Rights Reserved.
- **Local file names:**
  - `assets/fonts/source-sans-3-variable.woff2`
  - `assets/fonts/LICENSE-Source-Sans-3.txt` (full OFL-1.1 text, copied
    verbatim from the source repository)
- **Format note:** the upstream file is distributed as a variable TTF
  (`wght` axis, 200–900), Roman/upright style only — the italic variable
  file was not used, since this project does not use italic text. It was
  converted to WOFF2 locally with `fontTools` for smaller file size; no
  glyphs, hinting instructions, or license/copyright metadata were
  altered.
- **Date obtained:** 2026-07-24
- **Local usage confirmation:** the font file is served exclusively from
  `assets/fonts/` on this site's own origin. No request is made to
  `fonts.googleapis.com`, `fonts.gstatic.com`, or any other external font
  CDN.
