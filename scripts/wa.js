function openWhatsApp() {
    let phoneNumber = "1234567890";
    let message = "Hello, how can I help you?";

    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url);
}
