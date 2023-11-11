function animateService(service) {
  service.querySelector('.service-content').style.backgroundColor = '#555';
  service.querySelector('.service-content').style.transition = 'background-color 0.3s ease-in-out';

  service.querySelector('.service-content img').style.transform = 'scale(1.1)';
  service.querySelector('.service-content img').style.transition = 'transform 0.3s ease-in-out';
}

function resetService(service) {
  service.querySelector('.service-content').style.backgroundColor = '#333';
  service.querySelector('.service-content img').style.transform = 'scale(1)';
}
