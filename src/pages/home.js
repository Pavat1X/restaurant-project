import charsiu from "./charsiu.jpg"
import siuyok from "./siuyok.jpg"
import hofun from "./hofun.jpg"


//Setting up section DOM objects


//building hero section
const pageHero = document.createElement('div');
pageHero.setAttribute('id', 'page-hero');
pageHero.innerHTML = '<div id="hero-text"><p id="hero-text-main">A <span>Premier</span> Cantonese Restaurant</p><p id="hero-text-sub">serving authentic Hong Kong style cuisine</p></div>';

//building image highlights section

const imgHighlights = document.createElement('div');
imgHighlights.setAttribute('id', 'img-highlights');

function makeImg(imgSrc, imgName, accomText) {
    const foodCard = document.createElement('div'); 
    const imgContainer = document.createElement('img');
    const txtContainer = document.createElement('div');

    foodCard.setAttribute('class', 'food-card');
    foodCard.setAttribute('id', `${imgName}-card`); 

    imgContainer.setAttribute('src', imgSrc);
    imgContainer.setAttribute('class', 'food-img');
    imgContainer.setAttribute('id', `${imgName}-img`); 
    
    txtContainer.setAttribute('class', 'accom-text');
    txtContainer.innerHTML = accomText;

    foodCard.appendChild(imgContainer);
    foodCard.appendChild(txtContainer);

    return foodCard;

}

const charSiu = makeImg(charsiu, 'charsiu', '<h4>Char Siu Pork</h4><p>Pork, honey roasted to perfection.Served over rice or with vegetables.</p>');
const siuYok = makeImg(siuyok, 'siuyok', '<h4>Siu Yok</h4><p>Chinese-style pork with a satisfying crackle.To be enjoyed with mustard.</p>'); 
const hoFun = makeImg(hofun, 'hofun', '<h4>Beef Ho Fun</h4><p>A Hong Kong diner classic. Stir fried noodles with beef slices.Highly aromatic with a charred wok aftertaste.</p>');   

imgHighlights.appendChild(charSiu);
imgHighlights.appendChild(siuYok);
imgHighlights.appendChild(hoFun);


//building up call to action section
const callToAction = document.createElement('div');
callToAction.setAttribute('id', 'call-to-action');

callToAction.innerHTML = '<p id="action-text">Experience the Hong Kong diner magic today!</p><div id="contacts-container"><p>Call us at <span>1-800-HKDINER</span></p><p>Visit us at 121 Baltimore Road, NY</p></div>'



//export DOM Objects
export { pageHero, imgHighlights, callToAction};

