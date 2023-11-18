const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const btnSubmitEmail = document.querySelector("form button");
const successBtn = document.querySelector("#Success-Message button");
let errorMessage = "Valid email required";
let userEmailEl = document.getElementById("userEmail");

btnSubmitEmail.addEventListener("click", () => {
  if (isValidEmail(emailInput.value)) {
    changeInputSituation("not-conform", "conform");
    emailError.textContent = "";
    userEmailEl.textContent = emailInput.value;
    changeContainer();
  } else {
    changeInputSituation("conform", "not-conform");
    emailError.textContent = errorMessage;
  }
})

successBtn.addEventListener("click", () => {
  changeContainer();
  emailInput.value = "";
  userEmailEl.textContent = "";
})


function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function changeContainer() {
  const newsletterForm = document.getElementById("Newsletter-Form");
  const successMessage = document.getElementById("Success-Message");
  if (!newsletterForm.classList.contains("hidden")) {
    newsletterForm.classList.replace("md:grid", "hidden");
    successMessage.classList.replace("hidden", "flex");
  } else {
    newsletterForm.classList.replace("hidden", "md:grid");
    successMessage.classList.replace("flex", "hidden");
  }
}

function changeInputSituation(class1, class2) {
  emailInput.classList.contains(class1) && emailInput.classList.replace(class1, class2);
}