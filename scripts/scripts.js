// Function to toggle the dropdown content
function toggleDropdown() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

  // Event listener for the dropdown button
let dropdownBtn = document.querySelector('.dropdown-btn');
dropdownBtn.addEventListener('click', toggleDropdown);

function openWhatsApp() {
  let phoneNumber = "0531728911";
  let message = "Hello, I want to Order ";

  let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url);
}
