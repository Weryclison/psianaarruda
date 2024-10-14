export default function rotate() {
  let isScrolling = false;

  window.addEventListener("scroll", function () {
    isScrolling = true;
    const flowers = document.querySelectorAll(".rotate");

    // A cada scroll, rotaciona as flores
    flowers.forEach((flower) => {
      const scrollPosition = window.scrollY;
      // Reduz a velocidade da rotação dividindo por um valor, por exemplo, 10
      flower.style.transform = `rotate(${scrollPosition / 25}deg)`;
    });

    // Remove a rotação após o scroll parar
    // clearTimeout(isScrolling);
    // isScrolling = setTimeout(() => {
    //   flowers.forEach((flower) => {
    //     // Retorna à posição inicial após 100ms sem scroll
    //     flower.style.transform = `rotate(0deg)`;
    //   });
    // }, 100);
  });
}
