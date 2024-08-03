const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['0.045 Cellular Glass', '0.036 Nitril Rubber', '0.030 EPS Graphite', '0.025 Pf(Resol) Teqtix Rhino-Phen', '0.007 Vip(Vacuum Isolate Paneel)'],
      datasets: [{
        label: 'Pageview by Browsers',
        data: [0, 50, 100, 150, 200, 250],
        backgroundColor: ['#d1d1cf', '#d1d1cf', '#d1d1cf', '#d1d1cf', '#d1d1cf', '#d1d1cf', '#0413b8', '#d1d1cf', '#d1d1cf'],
        borderWidth: 1,
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    }
  });