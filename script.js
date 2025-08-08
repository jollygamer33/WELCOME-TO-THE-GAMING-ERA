document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Basic validation
  if (username === "" || email === "" || password === "") {
    document.getElementById("message").textContent = "All fields are required!";
    return;
  }

  // Simulate saving data (you can add backend logic here)
  console.log("User registered:", { username, email });

  // https://jollygamer33.github.io/WELCOME-TO-THE-GAMING-ERA/
  window.location.href = "Readme.md";  // Change to your actual home page
});
