        document.addEventListener('DOMContentLoaded', () => {
            const cartItems = [
                {name: "Товар 1", quantity: 2},
                {name: "Товар 3", quantity: 4},
                {name: "Товар 5", quantity: 3},
                {name: "Товар 6", quantity: 8},
                {name: "Товар 4", quantity: 6},
            ];

            const ctx = document.getElementById('popularityChart').getContext('2d');
            const labels = cartItems.map(item => item.name);
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Популярність товару',
                    data: cartItems.map(item => item.quantity),
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            };

            const popularityChart = new Chart(ctx, {
                type: 'pie',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });