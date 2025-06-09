// 模擬商品資料（實際上應該從頁面讀取）
const product = {
  id: 'product1',
  name: '典獄長',
  price: 10,
  image: 'assets/images/product1.jpg',
  quantity: 1
};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('addToCart');
  if (btn) {
    btn.addEventListener('click', () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push(product);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('已加入購物車！');
    });
  }
});
