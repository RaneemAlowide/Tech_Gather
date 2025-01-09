document.getElementById("signup").addEventListener("submit", function (event) {
  event.preventDefault();

  // Retrieve values
  let fullname = document.getElementById("fullname").value;
  let username = document.getElementById("username").value;
  let Email = document.getElementById("Email").value;
  let password = document.getElementById("password").value;
  let gender = document.getElementById("gender").value;
  let field = document.getElementById("field").value;

  // Validation flags
  let isValid = true;
  let errorMessage = '';
  
  // Define validation constants
  const MIN_NAME_LENGTH = 1;
  const MAX_NAME_LENGTH = 50;
  const MIN_PASSWORD_LENGTH = 5; // Example minimum password length
  
  // Full name validation
  if (!fullname || fullname.length < MIN_NAME_LENGTH || fullname.length > MAX_NAME_LENGTH) {
    isValid = false;
    errorMessage += `Full name must be between ${MIN_NAME_LENGTH} and ${MAX_NAME_LENGTH} characters long.\n`;
  } else if (!/^[A-Za-z\s]+$/.test(fullname)) {
    isValid = false;
    errorMessage += "Full name must contain only letters and spaces.\n";
  }

  // Username validation
  if (!username || username.length < MIN_NAME_LENGTH || username.length > MAX_NAME_LENGTH) {
    isValid = false;
    errorMessage += `Username must be between ${MIN_NAME_LENGTH} and ${MAX_NAME_LENGTH} characters long.\n`;
  }
  
  // Email validation using a simple regex pattern
  if (!Email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
    isValid = false;
    errorMessage += 'Please enter a valid email address.\n';
  }
  
  // Password validation
  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    isValid = false;
    errorMessage += `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.\n`;
  }
  
  // Gender validation
  if (!gender) {
    isValid = false;
    errorMessage += 'Please select a gender.\n';
  }
  
  // Field validation
  if (!field) {
    isValid = false;
    errorMessage += 'Please select a field.\n';
  }

  if (isValid) {
    // If all validations pass, proceed with fetch
    fetch("/insertAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, username, Email, password, gender, field }),
    })
    .then(function (response) {
      if (response.ok) {
        alert("You signed up successfully!");
        window.location.href = "../index_file/Home.html";
      } else {
        alert("Failed to sign up!");
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    });
  } else {
    // If data is invalid, alert the user with the error message(s)
    alert(errorMessage);
  }
});





document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("EmailLogin").value;
  let password = document.getElementById("passwordLogin").value;

  // Basic validation checks
  if (email.trim() === '' || password.trim() === '') {
    alert('Email and password are required.');
    return; // Stop the function if validation fails
  }

  // Check if the email is valid
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return; // Stop the function if the email is not valid
  }

  // If validation passes, proceed with the fetch request
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Email: email, password: password }),
  })
  .then(function (response) {
    if (response.ok) {
      alert("You logged in successfully!");
      window.location.href = "../index_file/Home.html";
    } else {
      response.text().then(text => {
        alert(text); // Assuming the server sends back a plain text response
      });
    }
  })
  .catch(function (error) {
    console.error("Error:", error);
    alert("An error occurred!");
  });
});