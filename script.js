
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    // Basic validation
    if (name === "" || email === "" || message === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "⚠ Please fill in all fields.";
      return;
    }
  

    // If all good
    formMessage.style.color = "limegreen";
    formMessage.textContent = "✅ Message sent successfully!";
    
    // Clear fields (optional)
    document.getElementById("contactForm").reset();

    
  });

