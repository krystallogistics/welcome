// Function to toggle the dropdown content
function toggleDropdown() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

  // Event listener for the dropdown button
let dropdownBtn = document.querySelector('.dropdown-btn');
dropdownBtn.addEventListener('click', toggleDropdown);

function openWhatsApp() {
  let phoneNumber = "+2332531728911";
  let message = "Hello, how can I help you?";

  let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url);
}
