# 📄 繁體 AI 數位商品 Landing Page

> 一鍵部署的 Next.js Landing Page 模板，專為數位商品銷售設計。內建 SEO 優化、Cloudflare Pages 部署、Analytics 整合。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()
[![Last Updated](https://img.shields.io/badge/Last_Updated-2026--07-green.svg)]()
[![Next.js](https://img.shields.io/badge/Powered_by-Next.js_15-black?logo=next.js)](https://nextjs.org)

## 📋 目錄

- [快速開始](#快速開始)
- [功能特色](#功能特色)
- [專案結構](#專案結構)
- [部署](#部署)
- [使用案例](#使用案例)
- [相關專案](#相關專案)
- [授權條款](#授權條款)

## 🚀 快速開始

```bash
# 1. 安裝依賴
pnpm install

# 2. 啟動開發伺服器
pnpm dev

# 3. 瀏覽器開啟 http://localhost:3000
```

**部署到 Cloudflare Pages：**

```bash
# 設定 Cloudflare API token
bash scripts/setup-cloudflare-env.sh

# 一鍵部署
bash scripts/cloudflare-deploy.sh
```

## ✨ 功能特色

- 🎨 **現代化設計**：基於 Next.js 15 + Tailwind CSS 的精美介面
- 🔍 **SEO 優化**：內建 Open Graph、meta tags、JSON-LD 結構化資料
- 📊 **Analytics 整合**：支援 Plausible / Google Analytics 事件追蹤
- 🛒 **產品展示**：Gumroad / LemonSqueezy 產品卡片與 CTA 按鈕
- 📧 **電子報訂閱**：內建郵件訂閱表單
- 🌙 **Dark Mode**：自動黑暗模式支援
- 📱 **RWD 響應式**：完美支援桌機、平板、手機
- ⚡ **靜態輸出**：Next.js Static Export，部署到任何靜態主機
- 🔗 **跨產品連結**：自動連結所有 ckw19810413 的數位產品

## 📁 專案結構

```
digital-product-landing/
├── src/app/              # Next.js App Router
│   ├── layout.tsx        # 全域 layout：SEO meta, analytics
│   ├── page.tsx          # 主頁：Hero, 產品展示, 電子報
│   └── globals.css       # Tailwind 全域樣式
├── .github/              # GitHub 設定
│   ├── workflows/        # Cloudflare Pages CI/CD
│   └── CLOUDFLARE_SECRETS.md
├── scripts/              # 部署腳本
│   ├── cloudflare-deploy.sh
│   └── setup-cloudflare-env.sh
├── public/               # 靜態資源
├── SEO_STRATEGY.md       # SEO 關鍵字策略
├── next.config.ts        # Next.js 設定
├── package.json
└── README.md
```

## 🚀 部署

### Cloudflare Pages（推薦）

1. 將倉庫連結到 Cloudflare Pages
2. 設定環境變數：
   - `CLOUDFLARE_API_TOKEN` — Cloudflare API Token
   - `GUMROAD_ACCESS_TOKEN` — （選填）Gumroad API
3. 自動部署：每次 push 自動部署

### Vercel

```bash
vercel deploy --prod
```

### 靜態輸出

```bash
pnpm build
# 輸出在 .next/static/export/
```

## 🎯 使用案例

- 數位商品創作者的個人產品頁面
- Gumroad / LemonSqueezy 產品的行銷 Landing Page
- AI 工具或课程的展示頁面
- 電子報訂閱引導頁
- 產品發佈頁面（Coming Soon / Launch）

## 🔗 相關專案

- [📦 Gumroad Products](https://github.com/ckw19810413/gumroad-products) — 上架產品包
- [🎓 AI 實戰課程](https://github.com/ckw19810413/ai-practical-course-tw) — 繁體中文 AI 課程
- [💬 AI Prompt 庫](https://github.com/ckw19810413/traditional-ai-prompt-library) — 100 個高品質 prompt
- [📈 Product Tracking](https://github.com/ckw19810413/product-tracking) — 銷售追蹤工具
- [🔍 Digital Product Research](https://github.com/ckw19810413/digital-product-research) — 銷售調研

## 🤝 貢獻

歡迎 Fork & PR！請先開啟 Issue 討論。

## 📜 授權

MIT License — 自由使用、修改、分享。

---

Made with ❤️ by [KWC](https://github.com/ckw19810413)