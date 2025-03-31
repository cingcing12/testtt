// change ff
const btnChangeF = document.querySelectorAll('.btnChangeF');
let listFf = [`"Monsieur La Doulaise", cursive`,
    `"Nunito", sans-serif`,
    `"Lato", sans-serif`,
    `"Rubik", sans-serif`,
    `"Source Code Pro", monospace`,
    `"Corben", serif`,
    `"Noto Serif Todhri"`,
    `"Source Sans 3", sans-serif`
]
btnChangeF.forEach((item, i) => {
    item.addEventListener('click', () => {
        btnChangeF.forEach(item => item.classList.remove('active'))
        item.classList.add('active');

        let dataFF = JSON.parse(localStorage.getItem('dataFF')) || [];
        let dataF = {
            ff: listFf[i],
            i: i
        }
        dataFF = dataF;
        localStorage.setItem('dataFF', JSON.stringify(dataFF));
        document.body.style.fontFamily = listFf[i];

    })
})
window.addEventListener('load', () => {
    btnChangeF.forEach((item, i) => {
        let dataFF = JSON.parse(localStorage.getItem('dataFF')) || [];
        let iData = dataFF.i;
        let ff = dataFF.ff;
        iData === i ? item.classList.add('active') : item.classList.remove('active');
        document.body.style.fontFamily = ff;
    })
})