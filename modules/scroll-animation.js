export default function initScrollAnimation() {
  const containers = document.querySelectorAll("[data-anime='scroll']");
  if (containers.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      containers.forEach((container) => {
        const containerTop = container.getBoundingClientRect().top;
        const isContainerVisible = containerTop - windowMetade < 0;
        if (isContainerVisible) {
          container.classList.add("ativo");
        } else if (container.classList.contains("ativo")) {
          container.classList.remove("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
