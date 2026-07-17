#!/usr/bin/env bash
# Cloudflare Pages 部署腳本
# 使用方式: bash scripts/cloudflare-deploy.sh

set -e

echo "🚀 Cloudflare Pages 部署"
echo "=========================="
echo ""

# 檢查憑證
if [ -z "$CLOUDFLARE_API_TOKEN" ] || [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    echo "❌ 缺少憑證！"
    echo ""
    echo "請先執行："
    echo "  source scripts/setup-cloudflare-env.sh"
    echo ""
    echo "然後輸入你的憑證，再執行此腳本。"
    exit 1
fi

# 切換到專案根目錄
cd "$(dirname "$0")/.."

echo "📦 安裝依賴..."
pnpm install

echo "🔨 建置..."
pnpm build

echo "☁️  部署到 Cloudflare Pages..."
wrangler pages deploy .next \
    --project-name="digital-product-landing" \
    --branch=main \
    --api-token="$CLOUDFLARE_API_TOKEN" \
    --account-id="$CLOUDFLARE_ACCOUNT_ID"

echo ""
echo "✅ 部署成功！"
echo "🔗 https://digital-product-landing.pages.dev"