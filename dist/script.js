function switchPage(pageId) {
  // 1. 抓到畫面上所有加上 class="page" 的區塊（也就是所有房間）
  const pages = document.querySelectorAll('.page');
  
  // 2. 把所有房間的 active 撕掉（全部藏起來）
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // 3. 根據傳進來的名字（例如 'job-law'），把對應房間加上 active（秀出來）
  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    // 如果點了其他還沒做細節的分頁，就先統一跳到預留的 fallback 區
    const fallbackPage = document.getElementById('page-fallback');
    if (fallbackPage) {
      fallbackPage.classList.add('active');
    }
  }
  
  // 4. 切換頁面後，自動把畫面平滑地捲回最上方
  window.scrollTo({ top: 0, behavior: 'smooth' });
}