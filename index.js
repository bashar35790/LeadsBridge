document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, // Trigger when 30% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  // Target the container in the Why Choose section
  const whyChooseSection = document.getElementById("why-choose-section");
  if (whyChooseSection) {
    observer.observe(whyChooseSection);
  }
});
