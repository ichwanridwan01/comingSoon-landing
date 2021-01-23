const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e = e.preventDefault();

  inputCheck();
});

function inputCheck() {
  const emailValue = email.value;

  if (emailValue === "") {
    setErrorFor(email, "Please Enter Emaill address");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, massage) {
  const formControll = input.parentElement;
  const small = formControll.querySelector("small");
  small.innerHTML = massage;
  formControll.className = "form erorr";
}

function setSuccessFor(input, massage) {
  const formControll = input.parentElement;
  const small = formControll.querySelector("small");

  small.innerHTML = massage;
  formControll.className = "form success";
}
