/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

    const ctx = document.getElementById('skillsChart');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Observability', 
                'Cloud (GCP/K8s)', 
                'Automation', 
                'Linux Admin', 
                'Operations', 
                'Leadership'
            ],
            datasets: [{
                label: 'Proficiency Level',
                data: [95, 90, 85, 92, 80, 75], // Ubah angka ini (0-100) sesuai keinginan Anda
                fill: true,
                backgroundColor: 'rgba(189, 112, 55, 0.2)', // Warna primary transparan
                borderColor: '#bd7037', // Warna primary rirula
                pointBackgroundColor: '#bd7037',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#bd7037'
            }]
        },
        options: {
            elements: {
                line: { borderWidth: 3 }
            },
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
