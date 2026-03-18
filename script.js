// JavaScript Document
document.getElementById("enrollmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let dob = document.getElementById("dob").value;
    let grade = document.getElementById("grade").value;

    let errorMessage = document.getElementById("errorMessage");
    let successMessage = document.getElementById("successMessage");

    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Check empty fields
    if (name === "" || dob === "" || grade === "") {
        errorMessage.textContent = "Please fill in all fields!";
        return;
    }

    // Calculate age
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust if birthday hasn't happened yet
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Age validation (13 to 20)
    if (age < 13 || age > 20) {
        errorMessage.textContent = "Enrollment failed! Age must be between 13 and 20.";
        return;
    }

    // Success
    successMessage.textContent = "Enrollment Success! Student registered.";

    // Reset form
    document.getElementById("enrollmentForm").reset();
});

