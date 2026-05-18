# Backend Portfolio — CV cá nhân

Website portfolio/CV cá nhân cho Backend Developer, xây dựng với **Next.js 15**, **TypeScript**, **Tailwind CSS 4** và **Framer Motion**.

## Cấu trúc thư mục

```
src/
├── app/                 # App Router (layout, page, styles)
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Capabilities, Projects, ...
│   └── ui/              # Button, Badge, GridBackground, ...
├── data/                # Dữ liệu tĩnh — chỉnh sửa nội dung tại đây
├── hooks/               # Custom hooks (typing effect)
├── lib/                 # Utilities (cn)
└── types/               # TypeScript interfaces
```

## Bắt đầu

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Tùy chỉnh nội dung

| File | Nội dung |
|------|----------|
| `src/data/profile.ts` | Tên, chức danh, email, social links |
| `src/data/capabilities.ts` | Kỹ năng backend |
| `src/data/projects.ts` | Dự án |
| `src/data/experience.ts` | Kinh nghiệm & học vấn |
| `src/data/approach.ts` | Quy trình làm việc |

## Deploy lên Vercel

1. Push code lên GitHub
2. Import project tại [vercel.com](https://vercel.com)
3. Framework preset: **Next.js** — deploy tự động

## Scripts

- `npm run dev` — chạy development
- `npm run build` — build production
- `npm run start` — chạy production build
- `npm run lint` — kiểm tra ESLint
