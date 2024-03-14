import {programacion} from '../data.js';
const contenedor = document.getElementById('contenedor');
    
        programacion.forEach(item => {
            const div = document.createElement('div');
            div.className = item.class;
            div.onclick = () => window.open(item.url, '_self');
    
            const h3 = document.createElement('h3');
            h3.textContent = item.title;
    
            div.appendChild(h3);
            contenedor.appendChild(div);
        });