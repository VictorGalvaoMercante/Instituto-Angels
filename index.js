const text = "INSTITUTO EDUCACIONAL ANGELS";
const typingElement = document.getElementById("typing-text");
const navbar = document.getElementById('navbar');

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

const projetosData = {
  1: {
    titulo: "Projeto Cestas Solidárias",
    descricao: "Distribuição de alimentos e roupas para moradores de rua.",
    imagens: [
      "assets/img/proj1_1.jpg",
      "assets/img/proj1_2.jpg",
      "assets/img/proj1_3.jpg",
      "assets/img/proj1_4.jpg",

    ]
  },
  2: {
    titulo: "Projeto Educar",
    descricao: "Aulas de reforço escolar para crianças carentes.",
    imagens: [
      "assets/img/proj2_1.jpg",
      "assets/img/proj2_2.jpg"
    ]
  }
};

document.querySelectorAll('.card-projeto').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    const projeto = projetosData[id];

    document.getElementById('modal-titulo').textContent = projeto.titulo;
    document.getElementById('modal-descricao').textContent = projeto.descricao;

    const carrossel = document.getElementById('modal-carrossel');
    carrossel.innerHTML = '';
    projeto.imagens.forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      carrossel.appendChild(img);
    });

    document.getElementById('modal-projeto').classList.remove('hidden');
  });
});

document.querySelector('.fechar-modal').addEventListener('click', () => {
  document.getElementById('modal-projeto').classList.add('hidden');
});



const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Abre/fecha menu ao clicar no hambúrguer
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});




typeEffect();
