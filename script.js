document.getElementById('findRides').addEventListener('click', function() {
    const start = document.getElementById('start').value;
    const destination = document.getElementById('destination').value;

    // Mock data for available rides
    const rides = [
        { driver: 'Jay Kwashie', start: 'Woe', destination: 'Accra', time: '10:00 AM' },
        { driver: 'Chris Parbey', start: 'Kaneshie', destination: 'Nsawam', time: '11:00 AM' },
        { driver: 'Giovani Caleb', start: 'Kasoa', destination: 'Labone', time: '12:00 PM' },
        { driver: 'Dede Okley', start: 'Nungua', destination: 'Lapaz', time: '12:15 PM' },
        { driver: 'Jean Amenyaglo', start: 'Koforidua', destination: 'Kasoa', time: '12:00 PM' },
        { driver: 'Babalola Eze Yusuf', start: 'Oshodi', destination: 'Victoria Island', time: '1:00 PM' }
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
