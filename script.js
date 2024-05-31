document.getElementById('findRides').addEventListener('click', function() {
    const start = document.getElementById('start').value;
    const destination = document.getElementById('destination').value;

    // Mock data for available rides
    const rides = [
        { driver: 'John Doe', start: 'Downtown', destination: 'Airport', time: '10:00 AM' },
        { driver: 'Jane Smith', start: 'Suburb', destination: 'City Center', time: '11:00 AM' },
        { driver: 'Mike Johnson', start: 'Train Station', destination: 'Beach', time: '12:00 PM' }
    ];

    // Filter rides based on user input
    const filteredRides = rides.filter(ride => 
        ride.start.toLowerCase().includes(start.toLowerCase()) && 
        ride.destination.toLowerCase().includes(destination.toLowerCase())
    );

    // Display the results
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (filteredRides.length > 0) {
        filteredRides.forEach(ride => {
            const rideElement = document.createElement('div');
            rideElement.classList.add('ride');
            rideElement.innerHTML = `
                <p><strong>Driver:</strong> ${ride.driver}</p>
                <p><strong>Start:</strong> ${ride.start}</p>
                <p><strong>Destination:</strong> ${ride.destination}</p>
                <p><strong>Time:</strong> ${ride.time}</p>
            `;
            resultsContainer.appendChild(rideElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No rides found.</p>';
    }
});
