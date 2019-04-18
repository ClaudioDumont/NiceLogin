const bro = (greeting => {
    return `${greeting}, la vai`;
})

export { bro };

const cpfButton = document.getElementById('cpfButton');
const cnpjButton = document.getElementById('cnpjButton');
const container = document.getElementById('container');

cpfButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

cnpjButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});






