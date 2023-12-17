function inViewport(entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animate", entry.isIntersecting);
  });
}

function observeElements() {
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {};

  document.querySelectorAll(".markedtext").forEach((el) => {
    Obs.observe(el, obsOptions);
  });
}
