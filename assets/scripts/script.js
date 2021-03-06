let main = document.getElementById("main")
let backgroundColor = document.getElementsByTagName('body')[0].style
let artists = [
    { name: "The Wombats", day: "sexta", photo: "https://yt3.ggpht.com/g_a0WQqXx7dhQadXUS35460TdZ8yOzDraYHocri7Z3SKSVAcLo5kvPC8gCuEB9KgU_3FDV7jXg=s176-c-k-c0x00ffffff-no-rj" },
    { name: "The Strokes", day: "sexta", photo: "https://yt3.ggpht.com/ytc/AKedOLSkS7pdVnuIZbN_qgCSSaVdfI-ZH0mlhC4Uc1mG=s176-c-k-c0x00ffffff-no-rj" },
    { name: "070 Shake", day: "sexta", photo: "https://yt3.ggpht.com/ytc/AKedOLSSUf5KE-JtfuXU0OGVk6kOmyLqfKne2wM2RdIU=s176-c-k-c0x00ffffff-no-rj" },
    { name: "LP", day: "sexta", photo: "https://yt3.ggpht.com/5NK5TaTv4iBx7UMk_P0tiOnysKoqQbvA7RJkG6aqGpnYq3QC4aZY3XZ3KCfaMlyjn_fz38lh=s176-c-k-c0x00ffffff-no-rj"},
    { name: "Miley Cyrus", day: "sabado", photo: "https://yt3.ggpht.com/Q3zWn-NiT2YtyY4nbFpjpgXCMB_gIJ62rkcbmO4Oiw1zvkkJqT4gr-tNgLyDHuG0j6dAg9gg=s176-c-k-c0x00ffffff-no-rj"},
    { name: "Two Feet", day: "sabado", photo: "https://yt3.ggpht.com/qxpqEJzRhcsuHq95Ea-zqSrCMSq5_8HieIDPhQtypr4sqr66OXL9Zq2EgMXeSOs0QP634dHH=s176-c-k-c0x00ffffff-no-rj"},
    { name: "A$AP Rocky", day: "sabado", photo: "https://yt3.ggpht.com/MGTwNIohI7lST3m4jLmObL00zOqseYmw6bKLzZYt9Ifyy23cBRU-tfBJBddgXphRfqTVz1bUGkA=s176-c-k-c0x00ffffff-no-rj"},
    { name: "Alessia Cara", day: "sabado", photo: "https://yt3.ggpht.com/WdUuEN8nK_iw0sABEspiwnZorTfWXAzW9nx-B9m_QDLQB5wfrVYAKhbRSb0MGMPwPS3_wQLnBQ=s176-c-k-c0x00ffffff-no-rj"},
    { name: "Foo Fighters", day: "domingo", photo: "https://yt3.ggpht.com/iCS11jvJG82IrZH-DW89Es_0dadc6oI-ZfNe009A1NyIOlXuGU2s32p8Vx-9E_rniAFNNkKtzw=s176-c-k-c0x00ffffff-no-rj"},
    { name: "Black Pumas", day: "domingo", photo: "https://yt3.ggpht.com/ytc/AKedOLR-Mb-z3fwkl7qG95xY0QpWJZ1gIBEjaFffI2e-=s176-c-k-c0x00ffffff-no-rj"},
    { name: "IDLES", day: "domingo", photo: "https://yt3.ggpht.com/H7udZwofN87YM8bGBWrfC348as6h6Fblj5L8rgK-smb3XG_b3YExAQtb1IY1PVsJFkwnsjWr=s176-c-k-c0x00ffffff-no-rj"},
    { name: "The Libertines", day: "domingo", photo: "https://yt3.ggpht.com/ytc/AKedOLTtzdgJVRMQ0GpuKbaodEBM7S07-6F5JMsJzdVm=s176-c-k-c0x00ffffff-no-rj"}
];

const scheduleDay = (day) => {
    main.innerHTML  = 
    `<img alt="Hor??rios do dia" class="lineup" src="./assets/img/${day}.PNG"/>`;
}

const lyricsDay = (day) => {
    let artistsDiv = ''
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].day === day) {
            artistsDiv += 
            `<div class="container">
                <img class="artist__photo" src="${artists[i].photo}" alt="">
                <div class="artist">${artists[i].name}</div>
            </div>`;
        }
    }

    main.innerHTML  = 
    `<div class="container">
        ${artistsDiv}
    </div>`;
}

const days = (functionName) => {
    return `
    <button class="day" onclick="${functionName}('sexta')">
        <p class="day__text">Sexta - 25/03</p>
    </button>
    <button class="day" onclick="${functionName}('sabado')">
        <p class="day__text">S??bado - 26/03</p>
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

    main.innerHTML = days(`lyricsDay`);
};

const mapPage = () => {
    backgroundColor.background = 'var(--alabaster)';
    changeMenuLinkColor(3);

    main.innerHTML  = 
    `<div class="container">
        <img alt="Mapa" class="map" src="./assets/img/mapa.png"/>
        <iframe class="real-map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7192.368936893399!2d-46.697021!3d-23.702166!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1649195485850!5m2!1spt-BR!2sbr" width="600" height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>`;
}
