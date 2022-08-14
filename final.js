const menuToggle = document.querySelector(".menu-toggle");
// phải chọn đến dấu x là menu-toggle
const menu = document.querySelector(".menu");

// tạo ra 1 sự kiện khi click
menuToggle.addEventListener("click", function () {
  // add thêm class is-show
  menu.classList.toggle("is-show");
  // toogle là nếu có thì remove đi, nếu chưa có thì add thêm vào
  menuToggle.classList.toggle("fa-bars");
  menuToggle.classList.toggle("fa-times");
});

// tạo ra event khi ấn vào màn hình ngoài, body trên trang cũng ẩn menu đi đc
document.addEventListener("click", function (event) {
  // kiểm tra nếu ko chứa menu và ko match vs menu-toggle thì sẽ remove đi và thêm icon bar trở lại
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  }
});
