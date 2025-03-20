import './styles.css';
import { pageHero, imgHighlights, callToAction} from './pages/home';

document.addEventListener('DOMContentLoaded', (event) => {
    const main = document.getElementById("content");
    main.appendChild(pageHero);
    main.appendChild(imgHighlights);    
    main.appendChild(callToAction);    
});