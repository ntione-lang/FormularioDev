const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// Evitar o envio do formulário e permitir a validação personalizada
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //obter os valores dos campos e remover espaços em branco
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();

  // Validar o campo de nome de usuário
  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  //Validar o campo email
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  // Validar campo senha
  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha deve conter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  // Validar o campo de confirmação de senha
  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não coincidem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }
  const togglePassword = document.getElementById("togglePassword");
  const togglePasswordConfirmation = document.getElementById(
    "togglePasswordConfirmation",
  );

  // Mostrar/esconder senha
  togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      togglePassword.innerText = "🙈";
    } else {
      password.type = "password";
      togglePassword.innerText = "👁️";
    }
  });

  // Mostrar/esconder confirmação
  togglePasswordConfirmation.addEventListener("click", () => {
    if (passwordConfirmation.type === "password") {
      passwordConfirmation.type = "text";
      togglePasswordConfirmation.innerText = "🙈";
    } else {
      passwordConfirmation.type = "password";
      togglePasswordConfirmation.innerText = "👁️";
    }
  });

  // Verificar se todos os campos estão válidos
  const formControls = form.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("Formulário enviado com sucesso!");
  }
}

// Função para exibir mensagem de erro e adicionar a classe de 'error'
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");
  // Adicionar a mensagem de 'error'
  small.innerText = message;
  // Adicionar a classe 'error' e remover a classse 'success'
  formControl.className = "form-control error";
}

// Função para adicionar classe 'success' e remover a classe 'error'
function setSuccessFor(input) {
  const formControl = input.parentElement;
  // Adicionar a classe 'success' e remover a classse 'error'
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}
togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.innerText = "🙈";
  } else {
    password.type = "password";
    togglePassword.innerText = "👁️";
  }
});

togglePasswordConfirmation.addEventListener("click", () => {
  if (passwordConfirmation.type === "password") {
    passwordConfirmation.type = "text";
    togglePasswordConfirmation.innerText = "🙈";
  } else {
    passwordConfirmation.type = "password";
    togglePasswordConfirmation.innerText = "👁️";
  }
});
