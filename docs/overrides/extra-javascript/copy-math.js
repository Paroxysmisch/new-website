document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".typst-math").forEach((el) => {
    el.addEventListener("click", () => {
      const typst = el.getAttribute("data-typst");
      if (typst) {
        console.log(typst);
        navigator.clipboard.writeText(typst).then(() => {
          // Feedback
          el.classList.add("copied");
          setTimeout(() => 250);
          setTimeout(() => el.classList.remove("copied"), 250);

          // Remove and force reflow to retrigger animation
          el.classList.remove("border-green-500");
          void el.offsetWidth;
          el.classList.add("border-green-500");

          // Remove the green border after fade-out delay
          setTimeout(() => {
            el.classList.remove("border-green-500");
          }, 800); // Match the transition duration + a bit of delay
        });
      }
    });
  });
});

document.getElementsByClassName("external_links")[0].classList.add('flex-wrap', 'flex-gap');
document.querySelector('img[alt="image"]').classList.add("rounded-xl");
