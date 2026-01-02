

(() => {
    const form = document.getElementById('registrationForm');
     const fullNameInput = document.getElementById("fullName");
    const photoInput = document.getElementById('photos');

    const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

   togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.innerHTML = isPassword
      ? '<i class="bi bi-eye-fill"></i>'
      : '<i class="bi bi-eye-slash-fill"></i>';
  });

    fullNameInput.addEventListener("input", () => {
    fullNameInput.value = fullNameInput.value.replace(/[^A-Za-z\s]/g, "");
  });

    photoInput.addEventListener('change', () => {
      if (photoInput.files.length > 5) {
        alert("You can upload maximum 5 photos only.");
        photoInput.value = "";
      }
    });

    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  })();












