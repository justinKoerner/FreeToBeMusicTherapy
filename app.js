// const contactLink = document.querySelector('#contact-link');
// contactLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     contactLink.href = 'contact.html';
// })


// Event listeners for FAQ cards
const faqCards = document.querySelectorAll('#faq-section .card');
let areActive = [false, false, false, false];

faqCards[0].addEventListener('click', (e) => {
    e.preventDefault();
    const paragraph = faqCards[0].querySelector('p');
    transformCard(faqCards[0], paragraph, 0);
})

faqCards[1].addEventListener('click', (e) => {
    e.preventDefault();
    const paragraph = faqCards[1].querySelector('p');
    transformCard(faqCards[1], paragraph, 1);
})

faqCards[2].addEventListener('click', (e) => {
    e.preventDefault();
    const paragraph = faqCards[2].querySelector('p');
    transformCard(faqCards[2], paragraph, 2);
})

faqCards[3].addEventListener('click', (e) => {
    e.preventDefault();
    const paragraph = faqCards[3].querySelector('p');
    transformCard(faqCards[3], paragraph, 3);
})

const transformCard = (card, paragraph, index) => {
     if(!areActive[index]) {
        // card.style.height = '20em';
        card.style.justfyContent = 'start';
        card.style.backgroundColor = 'rgb(112, 152, 166)';
        card.style.borderRadius = '20px';
        paragraph.style.display = 'block';
        areActive[index] = true;
    // if card is active and clicked, paragraph is hidden
    } else {
        // card.style.height = '10em';
        card.style.justfyContent = 'center';
        card.style.backgroundColor = 'rgb(225, 225, 211)';
        card.style.borderRadius = '50%';
        paragraph.style.display = 'none';
        areActive[index] = false;
    }
}
