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

// Jquery
// $(document).ready(function() {
//   $('.tab-btn').click(function() {
//     const tab_id = $(this).attr('data-tab');

//     $('.tab-btn').removeClass('active');
//     $('.tab-pane').removeClass('active');

//     $(this).addClass('active');
//     $('#' + tab_id).addClass('active');
//   });
// });

