const input = document.querySelector('input');
const searchbar = input.parentElement;

input.addEventListener('focus', (event) => {
    input.parentElement.className = 'searchbar box-shadow';
})

input.addEventListener('blur', (event) => {
    input.parentElement.className = 'searchbar';
})