
// Add this if using the radar chart (requires Chart.js)
const ctx = document.getElementById('radarChart').getContext('2d');
new Chart(ctx, {
type: 'radar',
data: {
labels: ['Pentesting', 'Cryptography', 'Networking', 'Python', 'Linux', 'Forensics'],
datasets: [{
label: 'Skill Level',
data: [90, 70, 85, 80, 75, 60],
backgroundColor: 'rgba(0, 255, 157, 0.2)',
borderColor: '#00ff9d',
borderWidth: 2,
pointBackgroundColor: '#00a1ff'
}]
},
options: {
scales: {
r: {
angleLines: { color: '#333' },
grid: { color: '#333' },
pointLabels: { color: '#f0f0f0' },
ticks: { display: false, backdropColor: 'transparent' }
}
},
plugins: {
legend: { display: false }
}
}
});
