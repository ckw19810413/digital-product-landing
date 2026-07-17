import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO: OG 圖 / Twitter Card 等 meta 標籤（請替換 YOUR_DOMAIN 為實際網域）
const SITE_URL = "https://digital-product-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "繁體 AI 數位商品市集 | AI Prompt 庫 | AI 課程 | 飛書模板",
    template: "%s | 繁體中文數位商品市集",
  },
  description:
    "繁體中文第一套數位商品市集。高品質 AI Prompt 庫（100 個 verified prompt）、AI 實戰課程（4 單元 17 堂）、飛書/釘釘工作模板（13+ 套）。提升你的生產力與創造力。",
  keywords: [
    "繁體 AI",
    "Prompt 庫",
    "ChatGPT 繁體中文",
    "AI 實戰課程",
    "飛書模板",
    "數位商品",
    "繁體中文",
    "AI 提示詞",
    "線上課程",
    "CRM 模板",
    "專案管理模板",
    "Gumroad 繁體中文",
  ],
  authors: [{ name: "ckw19810413" }],
  creator: "ckw19810413",
  publisher: "數位市集",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: SITE_URL,
    title: "繁體 AI 數位商品市集",
    description:
      "繁體中文第一套數位商品市集。AI Prompt 庫、AI 實戰課程、飛書模板，一站式提升你的生產力。",
    siteName: "數位市集",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "繁體 AI 數位商品市集",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AIWorkshopTW",
    creator: "@AIWorkshopTW",
    title: "繁體 AI 數位商品市集",
    description:
      "繁體中文第一套數位商品市集。AI Prompt 庫、AI 實戰課程、飛書模板。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD Structured Data (產品 Schema)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "數位市集",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  sameAs: [
    "https://github.com/ckw19810413",
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: 29,
    highPrice: 297,
    offerCount: 3,
    offers: [
      {
        "@type": "Offer",
        name: "繁體 AI Prompt 庫",
        description:
          "100 個高品質繁體中文 AI 提示詞，涵蓋商務、內容創作、效率工具、進階應用四大領域。",
        price: "49",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "繁體中文 AI 實戰課程",
        description: "從零到進階的 AI 應用教學。4 單元 17 堂完整課程，繁體中文教學。",
        price: "297",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "飛書模板市集",
        description: "中文世界第一套專業的飛書/釘釘工作模板，13+ 套模板。",
        price: "29",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect 加速外部資源 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//plausible.io" />

        {/* Plausible Analytics（請替換 DATA_DOMAIN 與 SCRIPT_URL） */}
        <Script
          defer
          data-domain="digital-product-landing"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 預設 OG 圖片 fallback */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-bold tracking-tight text-foreground">
              <span className="text-primary">✦</span> 數位市集
            </a>
            <nav className="hidden sm:flex items-center gap-8 text-sm text-muted">
              <a href="#hero" className="hover:text-foreground transition-colors">
                首頁
              </a>
              <a href="#products" className="hover:text-foreground transition-colors">
                產品
              </a>
              <a
                href="#newsletter"
                className="hover:text-foreground transition-colors"
              >
                免費範例
              </a>
              <a
                href="https://github.com/ckw19810413"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub ⟶
              </a>
            </nav>
            <a
              href="#products"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-all hover:bg-primary-hover"
            >
              探索產品
            </a>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 pt-16">{children}</main>

        {/* Footer */}
        <footer className="border-t border-card-border bg-card-bg/50">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <div className="text-center sm:text-left">
                <span className="text-lg font-bold text-foreground">
                  <span className="text-primary">✦</span> 數位市集
                </span>
                <p className="mt-1 text-sm text-muted">
                  繁體中文數位商品 — 提升你的生產力與創造力
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-sm text-muted sm:items-end">
                <a
                  href="https://github.com/ckw19810413/traditional-ai-prompt-library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  AI Prompt 庫
                </a>
                <a
                  href="https://github.com/ckw19810413/ai-practical-course-tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  AI 實戰課程
                </a>
                <a
                  href="https://github.com/ckw19810413/feishu-template-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  飛書模板市集
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-card-border pt-6 text-center text-xs text-muted">
              <p>
                © {new Date().getFullYear()} 數位市集. All rights reserved.
              </p>
              <p className="mt-2">
                追蹤我們：
                <a
                  href="https://twitter.com/AIWorkshopTW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-primary hover:underline"
                >
                  Twitter/X
                </a>
                {" · "}
                <a
                  href="https://github.com/ckw19810413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}