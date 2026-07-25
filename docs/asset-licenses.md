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

## Approach photograph

- **Purpose:** Approach section (`index.html`, `approach__media`) —
  illustrative photograph only. Replaces an earlier candidate (Pexels
  `20860593`) that was rejected during the stage 5B correction review
  because a real "Nike F.C." sportswear logo on the seated model's
  jacket sat anatomically between the two people's key gestures, at the
  same height as one of them — no rectangular crop could include both
  full gestures without also including the logo, so a different source
  photo was selected instead of forcing a compromised crop.
- **Pexels photo ID:** `5793792`
- **Title/description on Pexels:** "A therapist assists a woman with
  arm stretching during a physical therapy session in a bright, indoor
  setting." — a seated person sits on a treatment table with one arm
  resting on it; a second person stands behind, holding the seated
  person's raised wrist and shoulder to guide an arm stretch. Neither
  person looks at the camera.
- **Photographer, as displayed on the Pexels page:** Yan Krukau
  (username: @yankrukov).
- **Source page (exact URL):**
  <https://www.pexels.com/photo/a-therapist-assists-a-woman-with-arm-stretching-during-a-physical-therapy-session-in-a-bright-indoor-setting-5793792/>
- **Direct file source used for production processing:**
  `https://images.pexels.com/photos/5793792/pexels-photo-5793792.jpeg`
  (original, unscaled — not a preview/CDN-resized copy)
- **License:** Pexels License — <https://www.pexels.com/license/> ("Free
  to use", no purchase required, modification and cropping permitted,
  attribution not required by the license terms; credited here for
  transparency)
- **Date obtained:** 2026-07-25
- **Original file, as downloaded:**
  - Dimensions: 6000 × 4000 px
  - File size: 1,556,506 bytes (~1.52 MB)
  - MIME type: image/jpeg
  - Not retained in the repository (see production files below) — kept
    only in a local, out-of-repo working copy for reference.
- **Modifications performed:**
  - Single crop (3:2, matching the original's own ratio) trimming a
    modest amount of excess window/wall space evenly from the frame,
    keeping both people, the raised arm, the guiding hand at wrist and
    shoulder, the foreground person's face, and the hand resting on the
    treatment table all fully in frame — none of these are cropped.
  - Resize to three target widths: 640, 960, 1280px, height following
    the crop's own ratio.
  - Format conversion to AVIF, WebP, and JPEG at each width (9 files
    total). All EXIF/XMP metadata stripped from the production files.
  - No color grading, retouching, filters, or generative editing was
    applied; no upscaling (all target widths are smaller than the
    6000px-wide original).
- **Production files:**
  `assets/images/approach/approach-guided-exercise-{640,960,1280}.{avif,webp,jpg}`
  (9 files; exact sizes listed in the stage 5B report).
- **Branding check:** no logos, text, or brand names are visible
  anywhere in the frame — verified by direct visual inspection of the
  original and of the production crop at full resolution.
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

## Specialist photograph

- **Purpose:** Specialist section (`index.html`, `specialist__media`) —
  illustrative photograph only, selected and approved during the stage
  5A candidate review. Provides both a desktop (vertical) and a mobile
  (wide) art-directed crop of the same source photo.
- **Pexels photo ID:** `20860581`
- **Title/description on Pexels:** "A physiotherapist assessing a
  patient's posture indoors, showing support and expertise." — a
  standing person rests a hand on a seated person's upper back while
  looking down at them attentively; the desktop crop shows the standing
  person's face and the guiding hand together, so the observation is
  legible rather than abstract, while the mobile crop shows the guiding
  hand together with both people's general pose.
- **Photographer/account, as displayed on the Pexels page:** Funkcinės
  Terapijos Centras. The embedded EXIF metadata in the original file
  additionally records an `Artist` tag of **moona.lt**.
- **Source page (exact URL):**
  <https://www.pexels.com/photo/physiotherapist-standing-over-patient-20860581/>
- **Direct file source used for production processing:**
  `https://images.pexels.com/photos/20860581/pexels-photo-20860581.jpeg`
  (original, unscaled — not a preview/CDN-resized copy)
- **License:** Pexels License — <https://www.pexels.com/license/> ("Free
  to use", no purchase required, modification and cropping permitted,
  attribution not required by the license terms; credited here for
  transparency)
- **Date obtained:** 2026-07-25
- **Original file, as downloaded:**
  - Dimensions: 4000 × 2667 px
  - File size: 512,499 bytes (~501 KB)
  - MIME type: image/jpeg
  - Not retained in the repository (see production files below) — kept
    only in a local, out-of-repo working copy for reference.
- **Real clinic branding — identified and removed by cropping:** the
  original photo shows the standing model wearing scrubs embroidered
  with a real business name, "Funkcinės Terapijos Centras" (a Lithuanian
  therapy clinic — the same name as the Pexels uploader account), on the
  chest, plus a small separate logo on the sleeve cuff. Both were
  precisely measured on the original (chest logo at approximately
  x:1275–1650, y:1263–1388px; cuff logo at x:788–863, y:1475–1538px, in
  the 4000×2667 original) and both production crops keep their left
  edge to the right of both marks (x ≥ 1650px) — verified by direct
  visual inspection of both final crops at production resolution, with
  no trace of either logo in either crop.
- **Desktop crop revision (stage 5B correction):** an earlier desktop
  crop excluded both logos but was too tightly framed on the hand
  alone, reading as an abstract fragment rather than a legible
  accompaniment gesture. The current desktop crop is taller, starting
  above the standing person's face and continuing down through the
  guiding hand — this keeps the same safe left edge (x ≥ 1650px, still
  logo-free) while showing the standing person's attentive downward
  gaze together with the hand, so the crop reads as one person
  observing and guiding another's movement. The mobile crop is
  unchanged from the original stage 5B integration (hand and both
  people's general pose, no faces, same safe left edge).
- **Modifications performed:**
  - Two independent crops from the same original: a vertical desktop
    crop (4:5) showing the standing person's face and guiding hand, and
    a separate wide mobile crop (~3:2) showing the guiding hand and
    both people's pose, both keeping clear of the branding described
    above.
  - Resize to three target widths for the desktop crop (480, 720,
    960px) and two for the mobile crop (640, 960px), height following
    each crop's own ratio.
  - Format conversion to AVIF, WebP, and JPEG at each width (15 files
    total). All EXIF/XMP metadata stripped from the production files.
  - No color grading, retouching, or generative editing was applied —
    the branding exclusion was achieved entirely through
    cropping, not retouching.
- **Production files:**
  `assets/images/specialist/specialist-movement-detail-desktop-{480,720,960}.{avif,webp,jpg}`
  and
  `assets/images/specialist/specialist-movement-detail-mobile-{640,960}.{avif,webp,jpg}`
  (15 files; exact sizes listed in the stage 5B report).
- **Attribution requirement:** Not required by the Pexels License. Not
  displayed on the page (per project brief — no caption naming the
  photographer, clinic, or subjects is shown on the site).
- **Endorsement disclaimer:** The people shown are stock-photo models.
  Their use on this page does not imply that they are real physiotherapy
  professionals or clients, do not represent Studio Movimento, its
  (fictional) practitioner, or any client of Sergii Gorodeikin, and do
  not endorse this project in any way. Studio Movimento has no
  affiliation with Funkcinės Terapijos Centras or any other real
  clinic; the visible clinic branding in the source photo was cropped
  out specifically to avoid any such implication.
- **Illustrative-use confirmation:** This photograph is used strictly as
  an illustrative stock image for a demonstration portfolio concept. It
  does not depict any real Studio Movimento premises, staff, or client,
  consistent with the project's overall demonstrative disclaimers.
