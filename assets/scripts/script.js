const mapPage = () => {
    document.getElementsByTagName('body')[0].style.background = '#cdeaf2';

    document.querySelector('.menu__link--active').classList.remove('menu__link--active')
    document.querySelectorAll('.menu__link')[3].classList.add('menu__link--active')

    document.querySelectorAll('.menu__link')[0].classList.add('menu__link--black')
    document.querySelectorAll('.menu__link')[1].classList.add('menu__link--black')
    document.querySelectorAll('.menu__link')[2].classList.add('menu__link--black')

    let el = document.getElementById("main")
    el.innerHTML  = 
    `<img alt="Mapa" class="map" src="./assets/img/mapa.jpg"/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1636.1862843212439!2d-46.69702131073765!3d-23.702166409187747!2m3!1f270!2f0!3f0!3m2!1i1024!2i768!4f35!5e1!3m2!1spt-BR!2sbr!4v1646701192274!5m2!1spt-BR!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
};

const schedulePage = () => {
    document.getElementsByTagName('body')[0].style.background = 'var(--background-gradient)';

    document.querySelector('.menu__link--active').classList.remove('menu__link--active')
    document.querySelectorAll('.menu__link')[1].classList.add('menu__link--active')

    document.getElementsByClassName('menu__link')[0].style.color = 'black';
    document.getElementsByClassName('menu__link')[2].style.color = 'black';
    document.getElementsByClassName('menu__link')[3].style.color = 'black';

    let el = document.getElementById("main")
    el.innerHTML  = 
    `<button class="day">
        <p class="day__text" onclick="scheduleDay('sexta')">Sexta - 25/03</p>
    </button>
    <button class="day">
        <p class="day__text" onclick="scheduleDay('sabado')">Sábado - 26/03</p>
    </button>
    <button class="day">
        <p class="day__text" onclick="scheduleDay('domingo')">Domingo - 27/03</p>
    </button>`;
};

const lyricsPage = () => {
    document.getElementsByTagName('body')[0].style.background = 'var(--background-gradient)';

    document.querySelector('.menu__link--active').classList.remove('menu__link--active')
    document.querySelectorAll('.menu__link')[2].classList.add('menu__link--active')

    document.getElementsByClassName('menu__link')[0].style.color = 'white';
    document.getElementsByClassName('menu__link')[1].style.color = 'white';
    document.getElementsByClassName('menu__link')[3].style.color = 'white';

    let el = document.getElementById("main")
    el.innerHTML  = 
    `<button class="day">
        <p class="day__text">Sexta - 25/03</p>
    </button>
    <button class="day">
        <p class="day__text">Sábado - 26/03</p>
    </button>
    <button class="day">
        <p class="day__text">Domingo - 27/03</p>
    </button>`;
};

const scheduleDay = (day) => {
    document.getElementById("main").innerHTML  = 
    `<img alt="Horários do dia" class="lineup" src="./assets/img/${day}.webp"/>`;
}