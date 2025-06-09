const ads = [
  '🌿 新角登場｜全館 95 折',
  '📦 消費滿10小時送2小時',
  '👕 精選角色｜ 限時 85 折',
];
let adIndex = 0;

function rotateAd() {
  const banner = document.getElementById('ad-banner');
  adIndex = (adIndex + 1) % ads.length;
  banner.textContent = ads[adIndex];
}

setInterval(rotateAd, 3000); // 每 3 秒切換廣告
