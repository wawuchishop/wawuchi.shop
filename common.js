// 控制選單開關
function toggleMenu(isOpen) {
  const menu = document.getElementById('side-menu');
  const overlay = document.getElementById('menu-overlay');
  if (!menu || !overlay) return;

  if (isOpen) {
    menu.classList.add('open');
    overlay.style.display = 'block';
  } else {
    menu.classList.remove('open');
    overlay.style.display = 'none';
  }
}

// 產生共用選單
function initCommonMenu() {
  const menuHtml = `
    <div id="menu-overlay" onclick="toggleMenu(false)"></div>
    <div id="side-menu">
      <a href="index.html" class="menu-header">
        <img src="https://i.postimg.cc/TPBCSXmJ/she-jiaoicon-W.png" class="header-icon"> 瓦屋吉小舖
      </a>
      <a href="product1.html" class="menu-item">
        <img src="https://i.postimg.cc/MHGy2vVz/12-2025xia-ri-1.png"> 吉伊卡哇
      </a>
      <a href="product2.html" class="menu-item">
        <img src="https://i.postimg.cc/50PqVSdK/ckwp-icon.png"> 吉伊卡哇樂園
      </a>
      <a href="product3.html" class="menu-item">
        <img src="https://i.postimg.cc/NMFzbfFJ/07-2025xiong-sheng-ri-6.webp"> Nagano白熊
      </a>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', menuHtml);
}

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', initCommonMenu);
