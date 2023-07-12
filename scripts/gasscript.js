    // Get the necessary elements
    const campusSelect = document.getElementById('campus');
    const cylinderSelect = document.getElementById('cylinder-sizes');
    const priceDisplay = document.getElementById('price');

    // Calculate the price based on the selected campus and cylinder size
    function calculatePrice() {
        const campusValue = campusSelect.value;
        const cylinderValue = cylinderSelect.value;

        if (campusValue === 'nyankpala' && cylinderValue === 'big') {
            totalPrice = 25; 
        } else if (campusValue === 'nyankpala' && cylinderValue === 'mid'){
            totalPrice = 20;
        } 
        else if (campusValue === 'nyankpala' && cylinderValue === 'small'){
            totalPrice = 15;
        }
        else if (campusValue === 'dungu' && cylinderValue === 'big') {
            totalPrice = 25;
        } 
        else if (campusValue === 'dungu' && cylinderValue === 'mid'){
            totalPrice = 15;
        } else if (campusValue === 'dungu' && cylinderValue === 'small'){
            totalPrice = 15;
        }
        else if (campusValue === 'city-campus' && cylinderValue === 'big') {
            totalPrice = 20;
        } else if (campusValue === 'city-campus' && cylinderValue === 'mid') {
            totalPrice = 15;
        } 
        else if (campusValue === 'city-campus' && cylinderValue === 'small') {
            totalPrice = 10;
        }
        else if (campusValue === 'tatu' && cylinderValue === 'big') {
            totalPrice = 20;
        }
        else if (campusValue === 'tatu' && cylinderValue === 'mid') {
            totalPrice = 15;
        }
        else if (campusValue === 'tatu' && cylinderValue === 'small') {
            totalPrice = 10;
        }

        // if (cylinderValue === 'big') {
        //     cylinderPrice = 20;
        // } else if (cylinderValue === 'mid') {
        //     cylinderPrice = 15;
        // } else if (cylinderValue === 'small') {
        //     cylinderPrice = 10;
        // }

        // // Calculate the total price
        // const totalPrice = campusPrice + cylinderPrice;

        // Display the total price on the website
        priceDisplay.textContent = `Service Charge: ${totalPrice} cedis`;
    }

    // Add event listeners to the select elements
    campusSelect.addEventListener('change', calculatePrice);
    cylinderSelect.addEventListener('change', calculatePrice);