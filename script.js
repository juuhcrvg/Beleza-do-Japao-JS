let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Abre o modal com a imagem e legenda
function openModal(imageSrc, captionText) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex";
    modalImage.src = imageSrc;
    modalCaption.textContent = captionText;
}

// Fecha o modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapid);

L.marker([51.5, -0.09]).addTo(mapid)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
    

const form = document.getElementById('feedbackForm');
const feedbackMessage = document.getElementById('feedbackMessage');

// Valida o formulário no envio
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Valida os campos
    if (!name) {
        showFeedbackMessage('Por favor, preencha o nome.', 'red');
        return;
    }

    if (!validateEmail(email)) {
        showFeedbackMessage('Por favor, insira um e-mail válido.', 'red');
        return;
    }

    if (!message) {
        showFeedbackMessage('Por favor, insira sua mensagem.', 'red');
        return;
    }

    // Mostra mensagem de sucesso
    showFeedbackMessage('Obrigado pelo seu feedback!', 'green');
    form.reset(); // Limpa o formulário
});

// Valida o formato do e-mail
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostra mensagens de feedback
function showFeedbackMessage(message, color) {
    feedbackMessage.textContent = message;
    feedbackMessage.style.color = color;
}







