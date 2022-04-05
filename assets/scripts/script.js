let main = document.getElementById("main")
let backgroundColor = document.getElementsByTagName('body')[0].style

const scheduleDay = (day) => {
    main.innerHTML  = 
    `<img alt="Horários do dia" class="lineup" src="./assets/img/${day}.PNG"/>`;
}

const days = (functionName) => {
    return `
    <button class="day" onclick="${functionName}('sexta')">
        <p class="day__text">Sexta - 25/03</p>
    </button>
    <button class="day" onclick="${functionName}('sabado')">
        <p class="day__text">Sábado - 26/03</p>
    </button>
    <button class="day" onclick="${functionName}('domingo')">
        <p class="day__text">Domingo - 27/03</p>
    </button>`;
}

const changeMenuLinkColor = (active) => {
    let array = [0, 1, 2, 3];
    array.slice(active, 1);

    document.querySelector('.menu__link--active').classList.remove('menu__link--active')
    document.querySelectorAll('.menu__link')[active].classList.add('menu__link--active')

    if (active === 3) {
        for(let el of array) {
            document.querySelectorAll('.menu__link')[el].classList.add('menu__link--black')
        }
    } else {
        for(let el of array) {
            document.querySelectorAll('.menu__link')[el].classList.remove('menu__link--black')
        }
    }
}

const schedulePage = () => {
    backgroundColor.background = 'var(--background-gradient)';
    changeMenuLinkColor(1);

    main.innerHTML = days('scheduleDay');
};


const lyricsPage = () => {
    backgroundColor.background = 'var(--background-gradient)';
    changeMenuLinkColor(2);

    main.innerHTML = days('scheduleDay');
};

const mapPage = () => {
    backgroundColor.background = 'var(--alabaster)';
    changeMenuLinkColor(3);

    main.innerHTML  = 
    `<div class="container">
        <img alt="Mapa" class="map" src="./assets/img/mapa.png"/>
        <iframe class="real-map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7192.368936893399!2d-46.697021!3d-23.702166!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1649195485850!5m2!1spt-BR!2sbr" width="600" height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>`;
};