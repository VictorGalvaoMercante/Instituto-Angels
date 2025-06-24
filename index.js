
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
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
    descricao: "Distribuição de cestas para famílias carentes.",
    imagens: [
      "assets/img/proj1_1.jpg",
      "assets/img/proj1_2.jpg",
      "assets/img/proj1_3.jpg",
      "assets/img/proj1_4.jpg",

    ]
  },
  2: {
    titulo: "Distribuição de alimentos",
    descricao: "Distribuição de verduras, frutas e vegetais ",
    imagens: [
      "assets/img/proj2_1.jpg",
      "assets/img/proj2_2.jpg",
      "assets/img/proj2_3.jpg"
    ]
  },
  3: {
    titulo: "Dia Cultural",
    descricao: "Passeio cultural como lazer para as crianças.",
    imagens: [
      "assets/img/proj3_1.jpg",
      "assets/img/proj3_2.jpg",
      "assets/img/proj3_3.jpg",
      "assets/img/proj3_4.jpg",
      "assets/img/proj3_5.jpg",
      "assets/img/proj3_6.jpg",
    ]
  },
  4: {
    titulo: "Projeto Natal Solidário",
    descricao: "Entrega de presentes e ações para o Natal.",
    video: "assets/video/proj4_1.mp4"
  },
  5: {
    titulo: "Projeto Páscoa",
    descricao: "Entrega de ovos de páscos e chocolates na páscoa de 2025.",
    video: "assets/video/proj5_1.mp4"
  },
  6: {
    titulo: "Distribuição de marmitas",
    descricao: "Entrega de marmitas para pessoas carentes.",
    video: "assets/video/proj6_1.mp4"
  }

};


const slides = document.getElementById('slides');
const indicators = document.querySelectorAll('#indicadores span');
const totalSlides = indicators.length;
let currentIndex = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((el, i) => {
    el.classList.toggle('ativo', i === index);
  });
  currentIndex = index;
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => goToSlide(i));
});


document.querySelectorAll('.card-projeto').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    const projeto = projetosData[id];

    document.getElementById('modal-titulo').textContent = projeto.titulo;
    document.getElementById('modal-descricao').textContent = projeto.descricao;

    const carrossel = document.getElementById('modal-carrossel');
    carrossel.innerHTML = '';

    if (projeto.video) {
      const video = document.createElement('video');
      video.src = projeto.video;
      video.controls = true;
      video.autoplay = false;
      video.style.width = '100%';
      video.style.maxWidth = '90vw'; 
      video.style.height = 'auto';
      video.style.aspectRatio = '16 / 9'; 
      video.style.borderRadius = '12px';
      video.style.display = 'block';
      video.style.margin = '0 auto';
      carrossel.appendChild(video);
    } else if (projeto.imagens) {
      projeto.imagens.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        carrossel.appendChild(img);
      });
    }

    document.getElementById('modal-projeto').classList.remove('hidden');
  });
});

document.querySelector('.fechar-modal').addEventListener('click', () => {
  document.getElementById('modal-projeto').classList.add('hidden');
});


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const btnPrev = document.getElementById('prevSlide');
const btnNext = document.getElementById('nextSlide');

btnPrev.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  goToSlide(newIndex);
});

btnNext.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % totalSlides;
  goToSlide(newIndex);
});


setInterval(() => {
  const nextIndex = (currentIndex + 1) % totalSlides;
  goToSlide(nextIndex);
}, 2000);




typeEffect();
