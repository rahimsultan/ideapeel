/*
// Validation utility functions
const isEmailValid = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const isInputValid = (input) => {
  if (!input) return false;

  // Handle select elements
  if (input.tagName.toLowerCase() === "select") {
    return input.value !== "" && input.selectedIndex !== 0;
  }

  // Handle regular text inputs
  return input.value.trim() !== "";
};

const urlRegexMap = {
  figmaToWebflow: /^https:\/\/www\.figma\.com\/.+$/,
  wordpressToWebflow: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  squarespaceToWebflow: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  wixToWebflow: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  weeblyToWebflow: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  droipToWebflow: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

// DOM manipulation helper functions
const toggleInputValidation = (input, isValid) => {
  if (!input) return;

  if (isValid) {
    input.classList.add("input-valid");
    input.classList.remove("input-error");
  } else {
    input.classList.add("input-error");
    input.classList.remove("input-valid");
  }
};

// FormHandler Class
class FormHandler {
  constructor(formType) {
    this.formType = formType;
    this.urlRegex = urlRegexMap[formType];
    this.initializeForm();
  }

  initializeForm() {
    const form = document.querySelector(`[data-form-type="${this.formType}"]`);
    if (!form) return;

    this.form = form;
    this.urlInput = form.querySelector(".url-input");
    this.pageNumberInput = form.querySelector(".page-number-input");
    this.messageInput = form.querySelector(".message-input");
    this.platformInput = form.querySelector(".platform-input");
    this.nameInput = form.querySelector(".name-input");
    this.emailInput = form.querySelector(".email-input");
    this.submitBtn = form.querySelector(".service-f-btn");
    this.nameEmailParent = form.querySelector(".service-f-input-row");

    this.setupEventListeners();
  }

  setupEventListeners() {
    const inputs = [
      this.urlInput,
      this.pageNumberInput,
      this.messageInput,
      this.platformInput,
      this.nameInput,
      this.emailInput,
    ];

    inputs.forEach((input) => {
      if (!input) return;

      // For select elements, use change event
      if (input.tagName.toLowerCase() === "select") {
        input.addEventListener("change", () => this.updateValidation());
      } else {
        // For text inputs, use input event for real-time validation
        input.addEventListener("input", () => this.updateValidation());
      }
    });
  }

  updateValidation() {
    const isUrlValid = this.urlRegex.test(this.urlInput.value.trim());
    const isPageNumberValid = isInputValid(this.pageNumberInput);
    const isMessageValid = isInputValid(this.messageInput);
    const isPlatformValid = isInputValid(this.platformInput);
    const isNameValid = isInputValid(this.nameInput);
    const isEmailValidInput = isEmailValid(this.emailInput.value.trim());

    // Update validation states in real-time
    toggleInputValidation(this.urlInput, isUrlValid);
    toggleInputValidation(this.pageNumberInput, isPageNumberValid);
    toggleInputValidation(this.messageInput, isMessageValid);
    toggleInputValidation(this.platformInput, isPlatformValid);
    toggleInputValidation(this.nameInput, isNameValid);
    toggleInputValidation(this.emailInput, isEmailValidInput);

    // Show/hide fields progressively
    this.pageNumberInput.parentElement.style.display = isUrlValid
      ? "flex"
      : "none";
    this.messageInput.parentElement.style.display = isPageNumberValid
      ? "flex"
      : "none";
    this.platformInput.parentElement.style.display = isMessageValid
      ? "flex"
      : "none";
    this.nameEmailParent.style.display = isPlatformValid ? "grid" : "none";

    // Update submit button state
    const isFormValid =
      isUrlValid &&
      isPageNumberValid &&
      isMessageValid &&
      isPlatformValid &&
      isNameValid &&
      isEmailValidInput;

    this.submitBtn.disabled = !isFormValid;
  }
}

// Initialize form handlers for all form types
document.addEventListener("DOMContentLoaded", () => {
  const formTypes = [
    "figmaToWebflow",
    "wordpressToWebflow",
    "squarespaceToWebflow",
    "wixToWebflow",
    "weeblyToWebflow",
    "droipToWebflow",
  ];

  formTypes.forEach((formType) => new FormHandler(formType));
});

*/
// reading time handler
document.addEventListener("DOMContentLoaded", function () {
  const blogCards = document.querySelectorAll(".blog-card");
  blogCards.forEach((card) => {
    const content = card.querySelector(".blog-all-text").innerText;
    const words = content.split(/\s+/).length;
    const readingTime = Math.ceil(words / 200); // Assuming 200 WPM
    const readingTimeElement = card.querySelector(".card-reading-time");
    if (readingTimeElement) {
      readingTimeElement.textContent = `${readingTime} min read`;
    }
  });
});
