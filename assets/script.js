const myModal = document.querySelector("#my-modal");
const modalButton = document.querySelector("#modal-btn");
const closed = document.querySelector(".close");

modalButton.addEventListener ("click", openModal);

function openModal() {
    myModal.style.display = "block";
}

closed.addEventListener ("click", closeModal);

function closeModal() {
    myModal.style.display = "none";
}