// Initial validation function
function validateForm(event) {
    // Prevent form submission
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var email = document.getElementById("email").value.trim();
    var gender = document.getElementById("gender").value.trim();
    var desc = document.getElementById("desc").value.trim();

    // Check if any required field is empty
    if (name == "" || age == "" || email == "" || gender == "" || desc == "") {
        alert("All fields must be filled out");
        return false;
    }

    // Validate email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate age (make sure it is a valid number and greater than 0)
    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age");
        return false;
    }

    // Log the form data to the console
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Email: " + email);
    console.log("Gender: " + gender);
    console.log("Description: " + desc);

    // Now submit the form data via AJAX (Optional, if you want to send data to PHP without reloading)
    submitFormData(name, age, email, gender, desc);
}

// Function to handle form submission via AJAX
function submitFormData(name, age, email, gender, desc) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "your_php_script.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText); // Handle the server response here
        }
    };

    // Send the form data to PHP
    xhr.send("name=" + encodeURIComponent(name) + "&age=" + encodeURIComponent(age) + "&email=" + encodeURIComponent(email) + "&gender=" + encodeURIComponent(gender) + "&desc=" + encodeURIComponent(desc));
}

// Add event listener to form submit event
document.getElementById("tripform").addEventListener("submit", validateForm);



// function validateForm() {
//     var name = document.getElementById("name").value.trim();
//     var age = document.getElementById("age").value.trim();
//     var email = document.getElementById("email").value.trim();
//     var gender = document.getElementById("gender").value.trim();
//     var desc = document.getElementById("desc").value.trim();

//     // Check if any required field is empty
//     if (name == "" || age == "" || email == "" || gender == "" || desc == "") {
//         alert("All fields must be filled out");
//         return false;
//     }

//     // Validate email format
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address");
//         return false;
//     }

//     // Validate age (make sure it is a valid number and greater than 0)
//     if (isNaN(age) || age <= 0) {
//         alert("Please enter a valid age");
//         return false;
//     }

//     // Log the form data to the console (after trimming)
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("Email: " + email);
//     console.log("Gender: " + gender);
//     console.log("Description: " + desc);

//     return true; // Form is valid, allow submission
// }
