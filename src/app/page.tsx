import Link from "next/link";
import NewsletterSignup from "./newsletter";

// Gumroad 產品連結（上架後替換為實際 Gumroad 連結）
// 請替換 # 為實際 Gumroad URL，例如：https://cdkw19810413.gumroad.com/l/ai-prompt-library
const products = [
  {
    id: "traditional-ai-prompt-library",
    title: "繁體 AI Prompt 庫",
    slug: "ai-prompt-ku",
    description:
      "高品質、經過驗證的繁體中文 AI Prompt 集合。100 個高質量 prompt，不是 500 個通用 prompt 的廉價合集。",
    price: "$49",
    priceNote: "一次性",
    gumroadUrl: "https://slashmaster6.gumroad.com/l/saxrwt",
    github: "https://github.com/ckw19810413/traditional-ai-prompt-library",
    tags: ["AI", "Prompt", "繁體中文"],
    gradient: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: "ai-practical-course-tw",
    title: "繁體中文 AI 實戰課程",
    slug: "ai-shi-zhan-ke-cheng",
    description:
      "從零到進階的 AI 應用教學。4 單元 17 堂完整課程，繁體中文教學，學完就能用。",
    price: "$297",
    priceNote: "早鳥價，原價 $497",
    gumroadUrl: "https://slashmaster6.gumroad.com/l/mgtpcn",
    github: "https://github.com/ckw19810413/ai-practical-course-tw",
    tags: ["AI", "課程", "繁體中文"],
    gradient: "from-violet-500 to-violet-600",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0-.545 2.22m0 0a59.66 59.66 0 0-.545 2.22m.545-2.22 1.682-7.537m0 0 .707-3.167m0 0L6.5 2.25l2.356 4.043m5.144 0-2.356-4.043m0 0L11.5 2.25l-.707 3.167m0 0 .707 3.167m-5.144-3.167h5.144m0 0 5.144 0m-5.144 0-1.682 7.537m-.707 3.167 1.682 7.537m0 0L12 21.75l.707-3.167m0 0 1.682-7.537h5.144m-5.144 0 1.683 7.537m-8.41 0h6.727" />
      </svg>
    ),
  },
  {
    id: "feishu-template-marketplace",
    title: "飛書模板市集",
    slug: "feishu-mo-ban-shi-ji",
    description:
      "中文世界第一套專業的飛書/釘釘工作模板。包含銷售儀表板、CRM、專案管理等 13+ 套模板。",
    price: "$29-$69",
    priceNote: "／套（全部套組 $197）",
    gumroadUrl: "https://slashmaster6.gumroad.com/l/obpgqo",
    github: "https://github.com/ckw19810413/feishu-template-marketplace",
    tags: ["飛書", "模板", "生產力"],
    gradient: "from-cyan-500 to-teal-500",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.41-.23.86-.378 1.342-.378h9.316c.48 0 .931.147 1.342.378M6 6.878v2.249m12-2.249v2.25M4.5 9.75h15m-12 0v9.75m0-9.75h12v9.75m-12 0H6.75a.75.75 0 0 0-.75.75V21h15v-4.5a.75.75 0 0 0-.75-.75h-3m-9.75 0H9m3 0h3m0 0v-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V18" />
      </svg>
    ),
  },
  {
    id: "taiwan-etf-dashboard",
    title: "台股 ETF 智能分析儀表板",
    slug: "taiwan-etf-dashboard",
    description:
      "專業級台股 ETF 財務分析儀表板，即時數據爬取與深度財務指標分析。Premium 會員專屬。",
    price: "$19",
    priceNote: "／月",
    gumroadUrl: "https://slashmaster6.gumroad.com/l/kbxuuc",
    github: "https://github.com/ckw19810413/twse-etf-fa-hermes",
    tags: ["ETF", "台股", "金融分析", "儀表板"],
    gradient: "from-emerald-500 to-emerald-600",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    id: "feishu-template-bundle",
    title: "飛書模板套組",
    slug: "feishu-template-bundle",
    description:
      "中文世界第一套專業的飛書/釘釘工作模板套組。一次獲得所有 13+ 套模板，工作效率翻倍。",
    price: "$197",
    priceNote: "全選套組價",
    gumroadUrl: "https://slashmaster6.gumroad.com/l/xohjh",
    github: "https://github.com/ckw19810413/feishu-template-marketplace",
    tags: ["飛書", "套組", "商務", "工作模板"],
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
  {
    id: "ai-course-comprehensive",
    title: "繁體中文 AI 實戰課程",
    slug: "ai-course-comprehensive",
    description:
      "4 單元 17 堂完整課程，從零到進階的 AI 應用教學。繁體中文教學，學完就能用，包含實作專案。",
    price: "$297",
    priceNote: "完整課程",
    gumroadUrl: "https://slashmaster6.gumroad.com/l/vzalgb",
    github: "https://github.com/ckw19810413/ai-practical-course-tw",
    tags: ["AI", "課程", "完整教學", "繁體中文"],
    gradient: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
] as const;

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const utmParams = new URLSearchParams({
    utm_source: "landing-page",
    utm_medium: "referral",
    utm_campaign: product.slug,
  });
  const gumroadLink = `${product.gumroadUrl}?${utmParams.toString()}`;
  const githubLink = `${product.github}?utm_source=landing-page&utm_medium=referral&utm_campaign=${product.slug}`;

  return (
    <div
      className="group relative flex flex-col rounded-2xl border border-card-border bg-card-bg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/20 sm:p-8"
    >
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      {/* Icon */}
      <div className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${product.iconBg} ${product.iconColor}`}>
        {product.icon}
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-bold text-foreground">
        {product.title}
      </h3>

      {/* Tags */}
      <div className="relative mt-3 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
        {product.description}
      </p>

      {/* Price */}
      <div className="relative mt-6 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-foreground">{product.price}</span>
        <span className="text-sm text-muted">{product.priceNote}</span>
      </div>

      {/* Actions */}
      <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={gumroadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-hover px-5 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L13.5 10.5m0 0L18 18m0 0h-7.5m7.5-7.5L18 18" />
          </svg>
          立即購買
        </a>
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-card-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          查看 GitHub
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-16 pb-24 text-center"
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Hero badge */}
        <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card-bg/50 px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
          繁體中文數位商品 — 立即入手
        </div>

        {/* Hero title */}
        <h1 className="relative max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          繁體中文
          <br />
          <span className="animated-gradient inline-block bg-clip-text text-transparent">
            AI 數位商品市集
          </span>
        </h1>

        {/* Hero subtitle */}
        <p className="relative mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          從高品質 AI Prompt 到實戰課程，再到企業工作模板 —
          <br className="hidden sm:inline" />
          一站購足你需要的繁體中文數位生產力工具。
        </p>

        {/* CTA Buttons */}
        <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-[0_0_30px_-5px] hover:shadow-primary/50"
          >
            探索產品
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a
            href="https://github.com/ckw19810413"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-8 py-3.5 text-base font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-card-bg"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub 頁面
          </a>
        </div>

        {/* Stats */}
        <div className="relative mt-16 flex flex-wrap justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">6</div>
            <div className="text-xs text-muted">精選產品</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">100+</div>
            <div className="text-xs text-muted">高品質 Prompt</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">17</div>
            <div className="text-xs text-muted">實戰課程堂數</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">13+</div>
            <div className="text-xs text-muted">飛書模板套數</div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              我們的產品
            </h2>
            <p className="mt-4 text-muted">
              精心挑選的繁體中文數位商品，為你的工作與創作加速
            </p>
          </div>

          {/* Product cards grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Social Proof / Testimonials Section */}
      <section className="bg-card-bg/30 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              用戶回饋
            </h2>
            <p className="mt-4 text-muted">
              來看看已購買的用戶怎麼說
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-2xl border border-card-border bg-card-bg/50 p-6">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.297a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.297c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.297a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.297z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-foreground">
                "用了第 12 號 prompt 寫客戶郵件，回覆率真的提升了很多！"
              </p>
              <p className="mt-3 text-xs text-muted">
                — 林先生，行銷經理
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl border border-card-border bg-card-bg/50 p-6">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.297a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.297c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.297a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.297z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-foreground">
                "AI 實戰課程講解很清楚，即使是 AI 小白也能輕鬆上手。"
              </p>
              <p className="mt-3 text-xs text-muted">
                — 張小姐，自由工作者
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl border border-card-border bg-card-bg/50 p-6">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.297a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.297c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.297a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.297z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-foreground">
                "飛書模板幫團隊節省了大量時間，CRM 模板特別好用！"
              </p>
              <p className="mt-3 text-xs text-muted">
                — 王先生，專案經理
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://twitter.com/AIWorkshopTW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-card-border px-8 py-3.5 text-base font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-card-bg"
            >
              更多用戶回饋 → 追蹤我們的 Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}