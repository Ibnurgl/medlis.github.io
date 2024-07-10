document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");

  function showItem(index) {
      items.forEach((item, idx) => {
          item.classList.remove('active');
          if (idx === index) {
              item.classList.add('active');
          }
      });
  }

  function moveCarousel(step) {
      currentIndex += step;
      if (currentIndex < 0) {
          currentIndex = 0;
      } else if (currentIndex >= items.length) {
          currentIndex = items.length - 1;
      }
      showItem(currentIndex);
  }

  document.querySelector(".prev").addEventListener("click", () => moveCarousel(-1));
  document.querySelector(".next").addEventListener("click", () => moveCarousel(1));
  showItem(currentIndex);

  document.addEventListener("click", (event) => {
      const sidebar = document.getElementById("sidebar");
      const menuToggle = document.querySelector(".menu-toggle");
      if (sidebar.classList.contains("active") && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
          closeMenu();
      }
  });
});
