function showDateTime() {
    const now = new Date();
    document.getElementById('datetime').textContent = now.toLocaleString(); 
 }
 
 setInterval(showDateTime, 1000);
 
 document.getElementById('firstname').addEventListener('input', function (event) {
     const regex = /^[A-Za-z'-]*$/;
     const value = event.target.value;
 
     if (!regex.test(value)) {
         event.target.setCustomValidity('Only letters, apostrophes, and dashes are allowed');
     } else {
         event.target.setCustomValidity('');
     }
 });
 
  document.getElementById('lastname').addEventListener('input', function (event) {
    const regex = /^[A-Za-z'-]*([2-5])?[A-Za-z'-]*$/;
    const value = event.target.value;
 
    if (!regex.test(value)) {
    event.target.setCustomValidity('Only letters, apostrophes, numbers (2-5), and dashes allowed.');
    } else {
    event.target.setCustomValidity('');
    }
 });
 
  const today = new Date();
     today.setHours(0, 0, 0, 0); 
 
     const minDate = new Date();
     minDate.setFullYear(today.getFullYear() - 120);
 
     const todayString = today.toISOString().split('T')[0];
     const minDateString = minDate.toISOString().split('T')[0];
 
     document.getElementById('DOB').setAttribute('max', todayString);
     document.getElementById('DOB').setAttribute('min', minDateString);
 
 function validateZip() {
    const zipInput = document.getElementById('zip');
    let zipValue = zipInput.value.replace(/[^0-9-]/g, ''); 
         
    if (zipValue.includes('-')) {
        zipValue = zipValue.split('-')[0]; 
    }
         
    zipInput.value = zipValue; 
 }
 
 function updatePainValue() {
    const painLevel = document.getElementById('painLevel');
    const painValue = document.getElementById('painValue');
    const pain = painLevel.value;
 
    let painDescription = "No Pain";
    if (pain >= 1 && pain <= 3) {
       painDescription = "Mild Pain";
    } else if (pain >= 4 && pain <= 6) {
       painDescription = "Moderate Pain";
    } else if (pain >= 7 && pain <= 9) {
       painDescription = "Severe Pain";
    } else if (pain == 10) {
       painDescription = "Worst Pain";
    }
 
    painValue.textContent = pain + " (" + painDescription + ")";
 }
 
 function validateUserID() {
     const userIDInput = document.getElementById('UserID');
     let userIDValue = userIDInput.value;
 
     userIDValue = userIDValue.replace(/[^a-zA-Z0-9_-]/g, '');
 
     if (!/^[a-zA-Z]/.test(userIDValue)) {
         userIDInput.setCustomValidity("User ID must start with a letter.");
     } else {
         userIDInput.setCustomValidity(""); 
     }
 
     userIDInput.value = userIDValue.toLowerCase();
 }
 function validatePasswords() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const userID = document.getElementById('UserID').value.toLowerCase();
 
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-_=+\\/><.,`~])[A-Za-z\d!@#%^&*()\-_=+\\/><.,`~]{8,30}$/;
 
    if (password.value !== confirmPassword.value) {
       confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
       confirmPassword.setCustomValidity(""); 
    }
 
    if (!passwordPattern.test(password.value)) {
       password.setCustomValidity("Password must be 8-30 characters and contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.");
    } else {
       password.setCustomValidity(""); 
    }
 
    if (password.value.toLowerCase() === userID || password.value.toLowerCase().includes(userID)) {
       password.setCustomValidity("Password cannot be the same as your User ID or contain part of it.");
    }
  }