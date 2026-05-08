const images = [
    {
        src: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=900&q=80',
        alt: 'León',
        info: '<p><strong>Libertad:</strong> El león debe vivir en la sabana, en manadas, cazando libremente y sin estar enjaulado.</p><p><strong>Comida:</strong> Carnes como cebras, antílopes y búfalos.</p>'
    },
    {
        src: 'https://images.unsplash.com/photo-1509099836639-18ba102cd98e?auto=format&fit=crop&w=900&q=80',
        alt: 'Elefante',
        info: '<p><strong>Libertad:</strong> Los elefantes necesitan grandes espacios para caminar y vivir en familias numerosas.</p><p><strong>Comida:</strong> Hierba, hojas, frutas y raíces.</p>'
    },
    {
        src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80',
        alt: 'Loro',
        info: '<p><strong>Libertad:</strong> Los loros deben volar entre los árboles y elegir su propia comida.</p><p><strong>Comida:</strong> Semillas, frutas, nueces y bayas.</p>'
    },
    {
        src: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80',
        alt: 'Tigre',
        info: '<p><strong>Libertad:</strong> Los tigres necesitan bosques grandes para buscar a sus presas y descansar en paz.</p><p><strong>Comida:</strong> Ciervos, jabalíes y otros animales del bosque.</p>'
    }
];

const animalCards = [
    {
        title: 'Hábitat Natural',
        description: 'Los animales deben vivir en lugares que imitan su ambiente natural, con comida y agua suficientes.'
    },
    {
        title: 'Respeto y Cuidado',
        description: 'Respetar a los animales significa no molestarlos, no dañarlos y evitar el turismo con animales enjaulados.'
    },
    {
        title: 'Protección',
        description: 'Los parques y reservas ayudan a que los animales vivan sin peligro de caza ilegal y con espacios adecuados.'
    }
];

let currentIndex = 0;

function updateAnimalCard() {
    const imageElement = document.getElementById('animal-image');
    const infoElement = document.getElementById('animal-info');
    const animal = images[currentIndex];

    imageElement.src = animal.src;
    imageElement.alt = animal.alt;
    infoElement.innerHTML = animal.info;
}

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateAnimalCard();
}

function createInfoCards() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';

    animalCards.forEach(card => {
        const cardElement = document.createElement('article');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        `;
        cardsContainer.appendChild(cardElement);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animal-button');
    button.addEventListener('click', changeImage);
    createInfoCards();
    updateAnimalCard();
});
