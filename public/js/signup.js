async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#signup-username").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { "Content-Type": "application/json" }
    });

    // check the response status
    if (response.ok) {
      window.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);

