async function loginFormHander(event) {
  event.preventDefault();

  const email = document.querySelector("#signin-email").value.trim();
  const password = document.querySelector("#signin-password").value.trim();

  if(email && password) {
    const response = await fetch("api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password
      }),
      headers: { "Content-Type": "application/json" }
    });

    // check the response status
    if (response.ok) {
      window.location.replace("/pets");
    } else {
      alert(response.statusText);
    }
  }
}
document.querySelector(".login-form").addEventListener("submit", loginFormHander);


