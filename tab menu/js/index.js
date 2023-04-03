const tabButtons = document.querySelectorAll(".tab-btn");
const tabContentPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;
    tabButtons.forEach((button) => button.classList.remove("active"));
    tabContentPanes.forEach((tabContent) => {
      if (tabContent.dataset.tab === tab) {
        tabContent.classList.add("active");
      } else {
        tabContent.classList.remove("active");
      }
    });
    button.classList.add("active");
  });
});
