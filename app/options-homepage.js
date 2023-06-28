const foro = document.querySelector('.foro');
const tienda = document.querySelector('.tienda');
const votos = document.querySelector('.votos');
const staff = document.querySelector('.staff');

// Foro
foro.addEventListener('mouseenter', () => {
    foro.style.transform = 'scale(1.1)';

    tienda.style.opacity = '0.8';
    votos.style.opacity = '0.8';
    staff.style.opacity = '0.8';

    tienda.style.transform = 'scale(0.9)';
    votos.style.transform = 'scale(0.9)';
    staff.style.transform = 'scale(0.9)';
  });
  
foro.addEventListener('mouseleave', () => {
  foro.style.transform = 'scale(1)';

  tienda.style.opacity = '1';
  votos.style.opacity = '1';
  staff.style.opacity = '1';

  tienda.style.transform = 'scale(1)';
  votos.style.transform = 'scale(1)';
  staff.style.transform = 'scale(1)';
});

// Tienda
tienda.addEventListener('mouseenter', () => {
  tienda.style.transform = 'scale(1.1)';

  foro.style.opacity = '0.8';
  votos.style.opacity = '0.8';
  staff.style.opacity = '0.8';

  foro.style.transform = 'scale(0.9)';
  votos.style.transform = 'scale(0.9)';
  staff.style.transform = 'scale(0.9)';
});

tienda.addEventListener('mouseleave', () => {
  tienda.style.transform = 'scale(1)';

  foro.style.opacity = '1';
  votos.style.opacity = '1';
  staff.style.opacity = '1';

  foro.style.transform = 'scale(1)';
  votos.style.transform = 'scale(1)';
  staff.style.transform = 'scale(1)';
});

// Votos
votos.addEventListener('mouseenter', () => {
  votos.style.transform = 'scale(1.1)';

  foro.style.opacity = '0.8';
  tienda.style.opacity = '0.8';
  staff.style.opacity = '0.8';

  foro.style.transform = 'scale(0.9)';
  tienda.style.transform = 'scale(0.9)';
  staff.style.transform = 'scale(0.9)';
});

votos.addEventListener('mouseleave', () => {
  votos.style.transform = 'scale(1)';

  foro.style.opacity = '1';
  tienda.style.opacity = '1';
  staff.style.opacity = '1';

  foro.style.transform = 'scale(1)';
  tienda.style.transform = 'scale(1)';
  staff.style.transform = 'scale(1)';
});

// Staff
staff.addEventListener('mouseenter', () => {
  staff.style.transform = 'scale(1.1)';

  foro.style.opacity = '0.8';
  tienda.style.opacity = '0.8';
  staff.style.opacity = '0.8';

  foro.style.transform = 'scale(0.9)';
  tienda.style.transform = 'scale(0.9)';
  votos.style.transform = 'scale(0.9)';
});

staff.addEventListener('mouseleave', () => {
  staff.style.transform = 'scale(1)';

  foro.style.opacity = '1';
  tienda.style.opacity = '1';
  votos.style.opacity = '1';

  foro.style.transform = 'scale(1)';
  tienda.style.transform = 'scale(1)';
  votos.style.transform = 'scale(1)';
});