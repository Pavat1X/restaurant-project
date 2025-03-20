import './styles.css';
import { pageHero, imgHighlights, callToAction} from './pages/home';

document.addEventListener('DOMContentLoaded', (event) => {
    const main = document.getElementById("content");
    main.appendChild(pageHero);
    main.appendChild(imgHighlights);    
    main.appendChild(callToAction);
    
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');    
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', () => {
        main.innerHTML = '';
        main.appendChild(pageHero);
        main.appendChild(imgHighlights);    
        main.appendChild(callToAction);
    });

    
});