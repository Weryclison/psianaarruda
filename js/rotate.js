export default function rotate() {
  let isScrolling = false;

  window.addEventListener("scroll", function () {
    isScrolling = true;
    const flowers = document.querySelectorAll(".rotate");

    flowers.forEach((flower) => {
      const scrollPosition = window.scrollY;

      flower.style.transform = `rotate(${scrollPosition / 10}deg)`;
    });
  });
}
