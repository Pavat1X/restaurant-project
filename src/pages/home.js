//Setting up section DOM objects


//building hero section
const pageHero = document.createElement('div');
pageHero.setAttribute('id', 'page-hero');

const heroText = document.createElement('div');
const heroTextMain = document.createElement('p');
const heroTextSub = document.createElement('p');

heroText.setAttribute('id', 'hero-text');
heroTextMain.setAttribute('id', 'hero-text-main');
heroTextSub.setAttribute('id', 'hero-text-sub');

heroTextMain.innerHTML = 'A <span>Premier</span> Cantonese Restaurant';
heroTextSub.innerHTML = 'serving authentic Hong Kong style cuisine';

heroText.appendChild(heroTextMain, heroTextSub);
pageHero.appendChild(heroText);

//building image highlights section
const imgHighlights = document.createElement('div');
imgHighlights.setAttribute('id', 'img-highlights');



//export DOM Objects
export { pageHero, imgHighlights};

