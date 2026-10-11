# RII Premium School Solutions — React Website

Premium institutional website for Robotics Institute of India (RII), designed around school decision-makers and real implementation proof.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Key behavior

- Hero automatically changes every 3 seconds.
- Hero pauses on desktop hover and when the browser tab is hidden through the browser lifecycle behavior.
- Mobile navigation opens over a black translucent backdrop with an animated slide-in panel.
- Sticky lower-right WhatsApp icon uses the provided WhatsApp asset; adjacent call button opens the configured phone number.
- Request a proposal opens a short qualification form and formats the submitted details into a WhatsApp message.
- D.M. Public School has a dedicated client implementation section using the supplied school logo, seven inauguration-day images and video.
- Scroll reveal uses a subtle ghosting/fade/blur transition instead of loud animation.
- All typography is intentionally standard Arial/Helvetica for an institutional, executive feel.

## Brand assets

Provided by client and stored locally:
- `public/assets/brand/rii-logo.jpeg`
- `public/assets/icons/whatsapp.webp`
- `public/assets/dmps/dmps-logo.jpeg`
- `public/assets/dmps/inauguration-video.mp4`
- `public/assets/dmps/01-lab-wide.jpeg` through `07-3d-printing-demo.jpeg`

## Internet editorial imagery

The non-client editorial imagery uses Unsplash image URLs. The selected image pages are marked as free to use under the Unsplash License. Replace the URLs with your own licensed/commercial photography later if desired.

Sources:
- https://unsplash.com/photos/a-group-of-children-sitting-at-desks-in-a-classroom-OcDJhBm8Jnc
- https://unsplash.com/photos/professor-teaching-a-young-student-science-in-a-lab-2tudsaEBXgw
- https://unsplash.com/photos/teacher-guiding-students-on-computer-in-classroom-ereEoYDIl20
- https://unsplash.com/photos/students-and-teacher-in-a-computer-classroom-lKxSeXSrKlM
- https://unsplash.com/photos/a-man-walking-down-a-hallway-between-two-benches-MWZnWTv05fw

## Production checks before launch

1. Verify the current RII sales/WhatsApp number. The public homepage and brochure previously showed different numbers.
2. Replace the client media with the highest-resolution approved versions when available.
3. Confirm permission to publish D.M. Public School logo, photos and inauguration video.
4. Replace any editorial internet image with institution-approved photography if the client prefers a fully owned visual system.
5. Add analytics only after agreeing on how form data is handled.
