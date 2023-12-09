const handleContinue = async () => {
    const donorName = document.getElementById("doname").value;
    const phone = document.getElementById("phone").value;
    const donorEmail = document.getElementById("doemail").value;
    const amount = document.getElementById("amount").value;
    const donationType = document.getElementById("donationType").value;
    const message = document.getElementById("message").value;

    const data = {
        donorName,
        phone,
        donorEmail,
        amount,
        donationType,
        message
    }

    try {
        const response = await fetch("http://localhost:5000/donate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const parsedData = await response.json();
        alert(parsedData.message)
    } catch (error) {
        alert(error)
    }
}