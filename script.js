function calculateRide() {
    const start = document.getElementById("start").value;
    const destination = document.getElementById("destination").value;
    const resultDiv = document.getElementById("result");

    if (start === "" || destination === "") {
        resultDiv.innerHTML = "<p style='color:red;'>Please enter both locations.</p>";
        return;
    }

    const transportOptions = [
        {
            name: "Bus",
            cost: 500,
            time: 40
        },
        {
            name: "Taxi",
            cost: 2000,
            time: 20
        },
        {
            name: "Bike",
            cost: 800,
            time: 25
        }
    ];

    let cheapest = transportOptions[0];
    let fastest = transportOptions[0];

    transportOptions.forEach(option => {
        if (option.cost < cheapest.cost) {
            cheapest = option;
        }
        if (option.time < fastest.time) {
            fastest = option;
        }
    });

    let recommendation;
    if (cheapest.name === fastest.name) {
        recommendation = cheapest;
    } else {
        recommendation = transportOptions.find(option => 
            option.cost <= 1000 && option.time <= 30
        ) || fastest;
    }

    resultDiv.innerHTML = `
        <h3>Results:</h3>
        <p><strong>Cheapest:</strong> ${cheapest.name} (₦${cheapest.cost})</p>
        <p><strong>Fastest:</strong> ${fastest.name} (${fastest.time} mins)</p>
        <p><strong>Recommended:</strong> ${recommendation.name}</p>
    `;
}