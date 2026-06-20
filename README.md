# GIGU Moda Akademiyasi

Ayol-qizlar uchun tikuvchilik va moda dizaynerlik akademiyasi landing page.

## Texnologiyalar

- Next.js 15 (App Router)
- Tailwind CSS 4
- Framer Motion
- TypeScript
- 3 til: O'zbek, Rus, Ingliz

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda [http://localhost:3000](http://localhost:3000) oching.

## Assetlar (o'zingiz joylashtirasiz)

| Fayl | Manzil | Tavsif |
|------|--------|--------|
| Hero video | `public/videos/hero-bg.mp4` | Showcase fullscreen fon videosi (MP4, ~10–30s loop) |
| Hero poster | `public/images/hero-poster.jpg` | Video yuklanmaguncha fallback rasm (1920×1080) |
| Logo | `public/logo.svg` | Navbar logotipi (hozir placeholder) |

Video qo'shgach, `HeroSection.tsx` ichidagi poster yo'lini `.jpg` ga o'zgartiring.

## Breakpointlar

480px · 640px · 768px · 900px · 1024px · 1280px

## Build

```bash
npm run build
npm start
```
