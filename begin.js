document.getElementById("submit").addEventListener("click", function(evt) {
  evt.preventDefault(); // stop the form from refreshing the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    document.getElementById("error-message").style.display = "block";
    return;
  }

  // Call your backend on Render
  fetch("https://your-app-name.onrender.com/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    alert("Signup successful!");
    // Optionally redirect to login page
    window.location.href = "login.html";
  })
  .catch(err => {
    console.error(err);
    alert("Signup failed!");
  });
});
