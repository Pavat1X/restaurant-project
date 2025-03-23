import './styles.css';
import { pageHero, imgHighlights, callToAction} from './pages/home';

document.addEventListener('DOMContentLoaded', (event) => {
    const main = document.getElementById("content");
    main.appendChild(pageHero);
    main.appendChild(imgHighlights);    
    main.appendChild(callToAction);
    
    const homeBtn = document.getElementById('home-logo-button');
    const menuBtn = document.getElementById('menu-button');    
    const contactBtn = document.getElementById('contact-button');

    homeBtn.addEventListener('click', () => {
        main.innerHTML = '';
        main.appendChild(pageHero);
        main.appendChild(imgHighlights);    
        main.appendChild(callToAction);
    });

    menuBtn.addEventListener('click', () => {
        main.innerHTML = '';
    })
    
});