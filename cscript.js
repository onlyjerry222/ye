// Inisialisasi EmailJS
(function() {
    emailjs.init("F7Ll1Iiqy4-lS9IRY"); // Ganti dengan User ID Anda
})();

// Fungsi untuk mengirim email
function sendEmail(e) {
    e.preventDefault();

    // Ambil data dari formulir
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Parameter untuk EmailJS
    const params = {
        name: name,
        email: email,
        message: message,
    };

    // Kirim email menggunakan EmailJS
    emailjs.send("service_zmn8xon", "template_nxhnmqf", params) // Ganti dengan Service ID dan Template ID Anda
        .then(function(response) {
            alert("Pesan berhasil dikirim!");
            document.getElementById("contactForm").reset(); // Reset formulir
        }, function(error) {
            alert("Terjadi kesalahan. Silakan coba lagi.");
            console.error("Error:", error);
        });
}

// Event listener untuk formulir
document.getElementById("contactForm").addEventListener("submit", sendEmail);

const slider = document.querySelector('.slide-bar');
const slides = document.querySelectorAll('.slide-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) {
      slide.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

showSlide(currentSlide);

const itemBar = document.querySelector('.item-bar');

itemBar.addEventListener('wheel', (e) => {
  e.preventDefault();
  itemBar.scrollLeft += e.deltaY;
});

const tombolNavbar = document.getElementById('navbar-button');
const tombolTutup = document.getElementById('navbar-close');
const navbar = document.getElementById('navbar');

tombolNavbar.addEventListener('click', () => {
  navbar.style.right = '0px';
  navbar.classList.toggle('jelas');
});

tombolTutup.addEventListener('click', () => {
  navbar.style.right = '-250px';
  navbar.classList.remove('jelas');
  setTimeout(() => {
    navbar.style.opacity = '0';
  }, 500);
});