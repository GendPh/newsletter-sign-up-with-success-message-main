function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
let errorMessage = "Valid email required";
const btnSubmitEmail = document.querySelector("form button");

btnSubmitEmail.addEventListener("click", (e) => {
  e.preventDefault();

  if (isValidEmail(emailInput.value)) {
    emailInput.classList.replace("border-red-500", "border-Grey");
    emailInput.classList.replace("text-red-500", "text-Dark-Slate-Grey");
    emailError.textContent = "";
  } else {
    emailInput.classList.replace("border-Grey", "border-red-500");
    emailInput.classList.replace("text-Dark-Slate-Grey", "text-red-500");
    emailError.textContent = errorMessage;
  }
})