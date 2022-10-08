const POPUP_OPENED_CLASS = "popup_opened";

const profileEditBtn = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupContent = popup.querySelector(".popup__container");
const popupCloseBtn = popup.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
const inputName = document.querySelector(".popup__input_name");
const inputDescription = document.querySelector(".popup__input_description");
const form = document.querySelector(".popup__form");

function popupOpen() {
    popup.classList.add(POPUP_OPENED_CLASS);
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
}

profileEditBtn.addEventListener("click", popupOpen);

function popupClose(event) {
    if (!popupContent.contains(event.target) || event.target === popupCloseBtn) {
        popup.classList.remove(POPUP_OPENED_CLASS);
    }
}

popup.addEventListener("click", popupClose);

function savePopupChanges(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    console.log("ghbdtn")
}

form.addEventListener("submit", savePopupChanges);
