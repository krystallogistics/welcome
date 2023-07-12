    // Get the necessary elements
    const campusSelect = document.getElementById('campus');
    const priceDisplay = document.getElementById('price');

    // Calculate the price based on the selected campus
    function calculatePrice() {
        const campusValue = campusSelect.value;
        let price = 0;

        if (campusValue === 'nyankpala') {
            price = 12;
        } else if (campusValue === 'dungu') {
            price = 10;
        } else if (campusValue === 'city-campus') {
            price = 7;
        } else if (campusValue === 'tatu') {
            price = 7;
        }
        // Display the price on the website
        priceDisplay.textContent = `Service Charge: Ghc ${price} `;
    }

    // Add event listener to the campus select element
    campusSelect.addEventListener('change', calculatePrice);
