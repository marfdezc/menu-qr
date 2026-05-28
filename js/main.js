console.log("Carta QR cargada 🍽️");

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

const clickableItems = document.querySelectorAll(".clickable");

clickableItems.forEach(item => {

  item.addEventListener("click", () => {

    const image = item.querySelector(".dish-image");

    modalImage.src = image.src;

    modal.classList.add("active");

  });

});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {

  if (e.target === modal) {
    modal.classList.remove("active");
  }

});