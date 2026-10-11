# RII Website — Version 2 Design Changes

This version is intentionally not a visual copy of the existing RII website.

## Design direction

- Premium institutional / executive aesthetic rather than a generic robotics-tech theme.
- White, warm-neutral and deep navy surfaces with restrained RII blue and muted gold accents.
- Standard Arial / Helvetica typography across the entire site.
- Large editorial spacing, asymmetric layouts, sharp image crops and thin rules to create a more expensive visual hierarchy.
- No neon gradients, glassmorphism-heavy cards, cartoon robots or excessive glow effects.

## Conversion architecture

- The primary commercial action is `Request a proposal`.
- The form asks for the visitor's name, school/organization, role, location, WhatsApp/phone, requirement and optional context.
- Submission opens WhatsApp with a structured enquiry message.
- Sticky WhatsApp uses the supplied WhatsApp image asset.
- Sticky call action uses the configured RII number.

## Hero

- Five-image editorial carousel.
- Auto-advances every 3 seconds.
- User can click the slide indicators.
- Pauses automatically only when the browser tab is not visible; it does not pause just because the mouse is over the hero.
- Core message remains in the DOM and is not dependent on a particular slide being visible.

## Client implementation section

D.M. Public School is treated as a first-class case-study/proof section, not as a decorative logo strip.

It uses:
- Supplied D.M. Public School logo.
- Seven supplied inauguration/lab photographs.
- Supplied inauguration video.
- Case-study language that avoids fabricated testimonials or unsupported numerical claims.

## Ghosting scroll

Sections softly enter with opacity, slight upward movement and a small blur that clears during scrolling. This is deliberately subtle and disabled/reduced when `prefers-reduced-motion` is active.

## Internet imagery

Editorial sections use remote Unsplash images from pages identified as free to use under the Unsplash License. The client/development team can later replace these URLs with owned or approved commercial photography without changing component structure.
