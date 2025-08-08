import Sortable from 'sortablejs/modular/sortable.esm.js';
console.log("Vite is running!");
import './style.css';
import './drag/drag-style.css'

const el = document.getElementById('sortable-list');
Sortable.create(el, {
    handle: '.handle',
    animation: 150,
    onEnd: () => {
        const order = Array.from(el.children).map(li => li.dataset.id);
        console.log(order);
    }
});