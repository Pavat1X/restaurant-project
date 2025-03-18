//Setting up section DOM objects


//building hero section
const pageHero = document.createElement('div');
pageHero.setAttribute('id', 'page-hero');

pageHero.innerHTML = '<div id="hero-text"><p id="hero-text-main">A <span>Premier</span> Cantonese Restaurant</p><p id="hero-text-sub">serving authentic Hong Kong style cuisine</p></div>';

//building image highlights section

class foodCard {
    constructor(name, imgSrc, id, innerText) {
        this.class = "food-card";
        this.name = name;
        this.imgSrc = imgSrc;
        this.id = id;
        this.innerText = innerText;
    }

    //get & set
    get imgSrc() {
        return this._imgSrc;
    }

    get id() {
        return this._id;
    }

    get innerText() {
        return this._innerText;
    }

    set imgSrc(newSrc) {
        this._imgSrc = newSrc;
    }

    set id(newId) {
        this._id = newId;
    }

    set innerText(newText) {
        this._innerText = newText;
    }

    // methods
    
    initCard = () => {
        //building blocks
        const divObj = document.createElement('div');
        const imgContainer = document.createElement('img');
        const txtContainer = document.createElement('div');
        
        
        //Adding props
        divObj.setAttribute('class', this.class);
        divObj.setAttribute('id', `${this.id}-card`);
        
        imgContainer.src = this.imgSrc;
        imgContainer.setAttribute('class', 'food-img');
        imgContainer.setAttribute('id', `${this.id}-img`);

        divObj.appendChild(imgContainer);

        //todo: figure out how to efficiently set innerText as txtContainer's innerHTML
        //maybe separate into a new method or just do it outside of the object bounds
    }
};




const imgHighlights = document.createElement('div');
imgHighlights.setAttribute('id', 'img-highlights');

const imgSrc = document.createElement('img');




//export DOM Objects
export { pageHero, imgHighlights};

