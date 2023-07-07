// Function to toggle the dropdown content
function toggleDropdown() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

  // Event listener for the dropdown button
let dropdownBtn = document.querySelector('.dropdown-btn');
dropdownBtn.addEventListener('click', toggleDropdown);

// document.addEventListener("DOMContentLoaded", function() {
//     // Get the form element
//     let form = document.querySelector("form");

//     // Add a submit event listener to the form
//     form.addEventListener("submit", function(event) {
//       event.preventDefault(); // Prevent the form from submitting normally

//       // Get the form data
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let information = document.getElementById("information").value;

//       // Perform form validation
//     if (name === "" || email === "" || information === "") {
//         alert("Please fill in all required fields.");
//         return;
//     }

//       // Create an object to store the form data
//     let formData = {
//         name: name,
//         email: email,
//         information: information
//     };

//       // Convert the form data to JSON format
//     let jsonData = JSON.stringify(formData);

//       // Send the form data to the server-side script using AJAX
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "/send-email.php", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//         alert("Email sent successfully!");
//           form.reset(); // Reset the form after successful submission
//         } else {
//         alert("Failed to send email. Please try again later.");
//         }
//     };
//     xhr.send(jsonData);
//     });
// });
