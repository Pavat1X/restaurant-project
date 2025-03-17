//Setting up section DOM objects


//building hero section
const pageHero = document.createElement('div');
pageHero.setAttribute('id', 'page-hero');

pageHero.innerHTML = '<div id="hero-text"><p id="hero-text-main">A <span>Premier</span> Cantonese Restaurant</p><p id="hero-text-sub">serving authentic Hong Kong style cuisine</p></div>';

//building image highlights section

const imgHighlights = document.createElement('div');
imgHighlights.setAttribute('id', 'img-highlights');

const imgSrc = document.createElement('img');




//export DOM Objects
export { pageHero, imgHighlights};

