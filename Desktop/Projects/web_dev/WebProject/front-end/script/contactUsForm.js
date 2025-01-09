document.getElementById("form-For-user").addEventListener("submit", function (event) {
  event.preventDefault();

  // Retrieve values
  let FirstName = document.getElementById("FirstName").value;
  let lastname = document.getElementById("lastname").value;
  let mobileNumber = document.getElementById("mobileNumber").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let message = document.getElementById("message").value;
  let language = document.getElementById("language").value;
  let Gender = document.getElementById("Gender").value;

  // Validation flags
  let isValid = true;
  let errorMessage = '';
  const MIN_NAME_LENGTH = 1;
  const MAX_NAME_LENGTH = 50;
  const MOBILE_NUMBER_LENGTH = 10;
  const MIN_AGE = 18;
  const MAX_AGE = 100;  
  
  if (FirstName === undefined || FirstName === null || FirstName.trim() === '') {
    isValid = false;
    errorMessage += 'First name is required.\n';
  } else if (typeof FirstName !== 'string') {
    isValid = false;
    errorMessage += 'First name must be a letters.\n';
  } else if (!FirstName.match(/^[A-Za-z]+$/)) {
    isValid = false;
    errorMessage += 'First name must contain letters only.\n';
  } else if (FirstName.length < MIN_NAME_LENGTH || FirstName.length > MAX_NAME_LENGTH) {
    isValid = false;
    errorMessage += `First name must be between ${MIN_NAME_LENGTH} and ${MAX_NAME_LENGTH} characters long.\n`;
  }

//last name
  if (lastname === undefined || lastname === null || lastname.trim() === '') {
    isValid = false;
    errorMessage += 'Last name is required.\n';
  } else if (typeof lastname !== 'string') {
    isValid = false;
    errorMessage += 'Last name must be a string.\n';
  } else if (!lastname.match(/^[A-Za-z]+$/)) {
    isValid = false;
    errorMessage += 'Last name must contain letters only.\n';
  } else if (lastname.length < MIN_NAME_LENGTH || lastname.length > MAX_NAME_LENGTH) {
    isValid = false;
    errorMessage += `Last name must be between ${MIN_NAME_LENGTH} and ${MAX_NAME_LENGTH} characters long.\n`;
  }
  
  // Mobile number validation
  if (mobileNumber === undefined || mobileNumber === null || mobileNumber.trim() === '') {
    isValid = false;
    errorMessage += 'Mobile number is required.\n';
  } else if (typeof mobileNumber !== 'string') {
    isValid = false;
    errorMessage += 'Mobile number must be a string.\n';
  } else if (!mobileNumber.match(/^\d{10}$/)) {
    isValid = false;
    errorMessage += 'Please enter a valid 10-digit mobile number.\n';
  } else if (mobileNumber.length !== MOBILE_NUMBER_LENGTH) {
    isValid = false;
    errorMessage += `Mobile number must be exactly ${MOBILE_NUMBER_LENGTH} digits long.\n`;
  }

  // Message validation (length check)
  if (message.length > 200) {
    isValid = false;
    errorMessage += 'Your message must be under 200 characters.\n';
  }

  // Language validation
  if (language === "") {
    isValid = false;
    errorMessage += 'Please select a language of communication.\n';
  }

//dob
if (dob === undefined || dob === null || dob.trim() === '') {
  isValid = false;
  errorMessage += 'Date of birth is required.\n';
} else {
  const dobDate = new Date(dob);
  const today = new Date();
  const minDate = new Date(today.getFullYear() - MIN_AGE, today.getMonth(), today.getDate());
  const maxDate = new Date(today.getFullYear() - MAX_AGE, today.getMonth(), today.getDate());

  if (isNaN(dobDate.getTime())) { // This checks if the date is invalid
    isValid = false;
    errorMessage += 'Date of birth is not a valid date.\n';
  } else if (dobDate > minDate) {
    isValid = false;
    errorMessage += `You must be at least ${MIN_AGE} years old.\n`;
  } else if (dobDate < maxDate) {
    isValid = false;
    errorMessage += `Date of birth indicates an age greater than ${MAX_AGE} years old.\n`;
  }
}
  // Gender validation
  if (Gender === "") {
    isValid = false;
    errorMessage += 'Please select a gender.\n';
  }

  if (isValid) {
    // If all data is valid, proceed with the fetch request
    fetch("/insertContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ FirstName, lastname, email, mobileNumber, dob, message, language, Gender }),
    })
    .then(function (response) {
      if (response.ok) {
        alert("Data inserted successfully!");
        // Reset form or redirect user
      } else {
        alert("Failed to insert data!");
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("Error occurred!");
    });
  } else {
    // If data is invalid, alert the user
    alert(errorMessage);
  }
});