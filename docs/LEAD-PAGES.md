# Lead forma sahifalari (link orqali)

Har bir sahifa faqat forma ko'rsatadi va Bitrix24 da tegishli `SOURCE_ID` bilan lid yaratadi.

Asosiy sayt formasi: `/{locale}#enroll` → `SOURCE_ID: WEB`, `LANDING_CODE: 805`

## Linklar (production domeniga moslang)

| Manba | URL (uz) |
|-------|----------|
| Telegram Academy | `/uz/lead/telegram-academy` |
| Telegram chat | `/uz/lead/telegram-chat` |
| GiGu Design Telegram | `/uz/lead/telegram-design` |
| Instagram bio | `/uz/lead/instagram-bio` |
| GIGU Design Instagram | `/uz/lead/instagram-design` |
| Instagram Direct | `/uz/lead/instagram-direct` |
| YouTube | `/uz/lead/youtube` |
| 7–11 jajji qizlar | `/uz/lead/jajji` |
| Illustratsiya kursi | `/uz/lead/illustratsiya` |
| CRM forma (webform) | `/uz/lead/webform` |
| Facebook (OTHER) | `/uz/lead/facebook` |

RU: `/ru/lead/...` · EN: `/en/lead/...`

## Sozlash

1. `.env.example` dan `.env.local` yarating
2. `BITRIX24_WEBHOOK_URL` ni backendchidan olingan webhook bilan to'ldiring
3. `npm run dev` — forma `/api/lead` orqali `crm.lead.add` ga yuboriladi

## Forma maydonlari

- Ism, telefon, yosh (7–99), filial (4 ta), kurs (2 ta)

## Kurs mapping

| Sayt | Bitrix24 ID |
|------|-------------|
| Men — yosh dizaynerman | 189 |
| Professional ta'lim dasturi | 185 |
