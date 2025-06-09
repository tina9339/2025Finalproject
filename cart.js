document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('addToCart');
  if (btn && typeof product !== 'undefined') {
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
