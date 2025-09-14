// Part 1: Event Handling

// Click event
document.getElementById("showMsgBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "You clicked the button 🎉!";
});

// Input event (keyboard typing)
document.getElementById("liveInput").addEventListener("input", (event) => {
  document.getElementById("liveOutput").textContent = "You typed: " + event.target.value;
});


// Part 2: Interactive Elements

// Dark/Light mode
const body = document.body;
document.getElementById("toggleMode").addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counterValue").textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  document.getElementById("counterValue").textContent = count;
});


// Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let feedback = document.getElementById("formFeedback");

  // Validation logic
  if (name.length < 3) {
    feedback.textContent = " Name must be at least 3 characters.";
    feedback.style.color = "red";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = " Enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = " Password must be at least 6 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = " Registration successful!";
  feedback.style.color = "green";
  this.reset();
});
