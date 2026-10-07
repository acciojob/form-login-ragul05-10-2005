function getFormvalue() {
  // Retrieve values
  let firstName = document.getElementById("fname").value.trim();
  let lastName = document.getElementById("lname").value.trim();

  // Edge case handling
  if (!firstName && !lastName) {
    alert("Please enter your name!");
    return false; // prevent form submission
  }

  // Concatenate full name
  let fullName = firstName + " " + lastName;

  // Display result
  alert(fullName);

  return false; // prevent actual form submission/refresh
}
