#!/usr/bin/env bash
# Cloudflare 環境變數設定
# 使用方式: source scripts/setup-cloudflare-env.sh

echo "🔑 Cloudflare Pages 憑證設定"
echo "============================"
echo ""
echo "請前往 https://dash.cloudflare.com/profile/api-tokens 建立 API Token"
echo "需要以下權限："
echo "  - Cloudflare Pages: Edit"
echo "  - Account: Read"
echo ""
echo "Account ID 可在以下位置找到："
echo "  1. https://dash.cloudflare.com（首頁）"
echo "  2. 或前往 Settings → API Tokens → Account ID"
echo ""

read -p "請輸入 Cloudflare Account ID: " ACCOUNT_ID
read -p "請輸入 Cloudflare API Token: " API_TOKEN

export CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID"
export CLOUDFLARE_API_TOKEN="$API_TOKEN"

# 儲存到 .env.cloudflare（不 commit 到 git）
cat > .env.cloudflare << EOF
CLOUDFLARE_API_TOKEN=$API_TOKEN
CLOUDFLARE_ACCOUNT_ID=$ACCOUNT_ID
EOF

chmod 600 .env.cloudflare

echo ""
echo "✅ 設定完成！"
echo "   現在可以執行: bash scripts/cloudflare-deploy.sh"
echo "   或: source .env.cloudflare && wrangler deploy"