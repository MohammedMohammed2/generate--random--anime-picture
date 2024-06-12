import { getdata } from "./module/fetch.js";
import { displayPicture } from "./module/display.js";


const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;

    getdata(type, category).then(displayPicture);


})