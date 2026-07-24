# Asset licenses

This document lists the third-party font and image assets bundled locally
in this project and confirms their license terms and provenance.

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

## Hero photograph

- **Purpose:** Hero image (`index.html`, `hero__media`) — illustrative
  photograph only, selected and approved during the stage 2B.1 candidate
  review.
- **Pexels photo ID:** `4506166`
- **Title/description on Pexels:** "A physical therapist assists a
  patient in arm exercises using a resistance band" — a person performs
  a resistance-band exercise while a second person guides the movement
  of their arm; faces are not identifiable in the frame.
- **Photographer, as displayed on the Pexels page:** Karola G
  (kaboompics.com). The embedded EXIF/XMP metadata in the original file
  additionally records the photographer's full name as **Karolina
  Grabowska (Kaboompics.com)**.
- **Source page (exact URL):**
  <https://www.pexels.com/photo/crop-anonymous-woman-stretching-elastic-band-near-professional-chiropractor-4506166/>
- **Direct file source used for production processing:**
  `https://images.pexels.com/photos/4506166/pexels-photo-4506166.jpeg?cs=srgb&fm=jpg`
  (original, unscaled — not a preview/CDN-resized copy)
- **License:** Pexels License — <https://www.pexels.com/license/> ("Free
  to use", no purchase required, modification and cropping permitted,
  attribution not required by the license terms; credited here for
  transparency)
- **Date obtained:** 2026-07-24
- **Original file, as downloaded:**
  - Dimensions: 6160 × 4107 px
  - File size: 1,386,570 bytes (~1.32 MB)
  - MIME type: image/jpeg
  - Not retained in the repository (see production files below) — kept
    only in a local, out-of-repo working copy for reference.
- **Modifications performed:**
  - Two independent crops from the original (not one crop reused for
    both): a desktop crop (4:5) and a separate mobile crop (4:3), each
    framed by hand to keep the hand, the resistance band, and the
    guiding arm fully in frame.
  - Resize to four target dimensions: 768×960, 1152×1440 (desktop);
    640×480, 960×720 (mobile).
  - Format conversion to AVIF, WebP, and JPEG at each size (12 files
    total).
  - No color grading, retouching, or generative editing was applied.
- **Production files:** `assets/images/hero/hero-therapy-{desktop,mobile}-{width}.{avif,webp,jpg}`
  (12 files; exact sizes listed in the stage 2B.2 report).
- **Attribution requirement:** Not required by the Pexels License. Not
  displayed on the page (per project brief — no caption naming the
  photographer or subjects is shown on the site).
- **Endorsement disclaimer:** The people shown are stock-photo models.
  Their use on this page does not imply that they are real physiotherapy
  professionals or clients, do not represent Studio Movimento, its
  (fictional) practitioner, or any client of Sergii Gorodeikin, and do
  not endorse this project in any way.
- **Illustrative-use confirmation:** This photograph is used strictly as
  an illustrative stock image for a demonstration portfolio concept. It
  does not depict any real Studio Movimento premises, staff, or client,
  consistent with the project's overall demonstrative disclaimers.
