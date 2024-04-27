document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("new-email").value;
  var password = document.getElementById("new-password").value;
  
  // Basic email validation
  if (!isValidEmail(email)) {
    alert("Invalid email address");
    return;
  }
  
  // Basic password validation
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }
  
  // If validations pass, you can proceed with form submission or other actions
  alert("Sign up successful!");
});

function isValidEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
