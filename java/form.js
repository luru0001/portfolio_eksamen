const form = document.getElementById("contact");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  /* ---------- navn ---------- */
  if (name.value.trim() === "") {
    showError(name);
    valid = false;
  } else {
    hideError(name);
  }

  /* ---------- email ---------- */
  if (email.value.trim() === "" || !email.value.includes("@")) {
    showError(email);
    valid = false;
  } else {
    hideError(email);
  }

  /* ---------- nummer ---------- */
  const phonePattern = /^[0-9]{8}$/;

  if (!phonePattern.test(phone.value.trim())) {
    showError(phone);
    valid = false;
  } else {
    hideError(phone);
  }

  /* ---------- send besked ---------- */
  if (message.value.trim() === "") {
    showError(message);
    valid = false;
  } else {
    hideError(message);
  }

  /* ---------- hvis det virker ---------- */
  if (valid) {
    alert("Tak for din besked - jeg vender tilbage hurtigst muligt!");
    form.reset();
  }
});

/* ---------- fejl ---------- */

function showError(input) {
  input.classList.add("error-border");
  input.nextElementSibling.style.display = "block";
}

function hideError(input) {
  input.classList.remove("error-border");
  input.nextElementSibling.style.display = "none";
}
