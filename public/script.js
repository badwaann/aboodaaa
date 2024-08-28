function buyProduct(product) {
    const cardNumber = prompt("Enter your credit card number:");
    const cardExpiry = prompt("Enter your card expiry date (MM/YY):");
    const cardCVV = prompt("Enter your CVV:");

    if (cardNumber && cardExpiry && cardCVV) {
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `cardNumber=${cardNumber}&cardExpiry=${cardExpiry}&cardCVV=${cardCVV}&product=${product}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert("Please fill out all fields.");
    }
}
