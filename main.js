let btn = document.querySelector("#btn");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});
