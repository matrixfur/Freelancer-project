const ctx = document.getElementById('surveyChart').getContext('2d');

// Dynamic chart data
const data = {
    labels: ['Personality', 'Emotion', 'Intrest', 'Stress'],
    datasets: [{
        label: 'Survey Results',
        data: [65, 45, 65, 55], // Dynamic data points
        backgroundColor: [
            'rgba(84, 125, 222, 0.8)', // Vibrant Blue
            'rgba(59, 189, 196, 0.8)', // Vibrant Teal
            'rgba(255, 140, 66, 0.8)', // Vibrant Orange
            'rgba(140, 84, 255, 0.8)'  // Vibrant Purple
        ],
        borderColor: [
            'rgba(84, 125, 222, 1)', 
            'rgba(59, 189, 196, 1)', 
            'rgba(255, 140, 66, 1)',
            'rgba(140, 84, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Create the chart
new Chart(ctx, {
    type: 'bar', 
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                }
            }
        }
    }
});

// Update the percentages in the boxes
const percentages = data.datasets[0].data;
document.getElementById('box1-percentage').textContent = `${percentages[0]}%`;
document.getElementById('box2-percentage').textContent = `${percentages[1]}%`;
document.getElementById('box3-percentage').textContent = `${percentages[2]}%`;
document.getElementById('box4-percentage').textContent = `${percentages[3]}%`;
