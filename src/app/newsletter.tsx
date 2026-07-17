"use client";

import { useState } from "react";

interface NewsletterResult {
  success: boolean;
  message: string;
}

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<NewsletterResult | null>(null);

  // Gumroad 產品連結（上架後替換為實際 Gumroad 連結）
  const gumroadLinks = {
    prompt: "#", // https://cdkw19810413.gumroad.com/l/ai-prompt-library
    course: "#", // https://cdkw19810413.gumroad.com/l/ai-course
    feishu: "#", // https://cdkw19810413.gumroad.com/l/feishu-templates
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      // TODO: 替換為實際的 email service API
      // 目前使用 localStorage 模擬，實際部署時改用 Mailchimp / ConvertKit / Resend
      const subscribers = JSON.parse(
        localStorage.getItem("digital_product_subscribers") || "[]"
      );

      if (subscribers.includes(email)) {
        setResult({
          success: false,
          message: "這個信箱已經訂閱過囉！",
        });
      } else {
        subscribers.push({
          email,
          date: new Date().toISOString(),
          source: "landing-page",
        });
        localStorage.setItem(
          "digital_product_subscribers",
          JSON.stringify(subscribers)
        );

        setResult({
          success: true,
          message: "🎉 訂閱成功！每週一寄送最新 AI 工具與優惠資訊。",
        });
        setEmail("");
      }
    } catch (err) {
      setResult({
        success: false,
        message: "發生錯誤，請再試一次。",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="relative overflow-hidden px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card-bg/80 px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary" />
          每週免費 AI 工具推薦
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          每週免費拿到最強的
          <br />
          <span className="animated-gradient inline-block bg-clip-text text-transparent">
            AI 工具與優惠
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          加入 500+ 位訂閱者的名單。每週一早上，我們會寄送：
          <br />
          最新 AI 工具推薦 × 產品優惠折扣 × 獨家 prompt 範例。
        </p>

        {/* Benefits */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            每週 5 分鐘就能讀完
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            絕不提供用不到的垃圾信
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            隨時可取消訂閱
          </div>
        </div>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="請輸入你的電子郵件"
            required
            className="w-full sm:w-80 rounded-xl border border-card-border bg-card-bg/50 px-5 py-3 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-primary to-primary-hover px-8 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-50"
          >
            {loading ? "⏳ 訂閱中..." : "免費訂閱"}
          </button>
        </form>

        {/* Result Message */}
        {result && (
          <div
            className={`mt-6 inline-block rounded-xl px-6 py-3 text-sm ${
              result.success
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {result.message}
          </div>
        )}

        {/* Privacy Note */}
        <p className="mt-4 text-xs text-muted/60">
          你的信箱安全無虞。我們絕不會將資料分享給第三方。
        </p>

        {/* Social Proof */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {["👨‍💻", "👩‍💼", "👨‍🎓", "👩‍🔬"].map((emoji, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-card-bg text-sm"
              >
                {emoji}
              </div>
            ))}
          </div>
          <span className="text-sm text-muted">
            已加入 <span className="font-bold text-foreground">500+</span> 位訂閱者
          </span>
        </div>
      </div>
    </section>
  );
}