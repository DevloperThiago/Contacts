const language = document.querySelector('.language')

function changeLanguage() {
    const langSelect = document.querySelector('.language')
    const navLink1 = document.querySelector('.nav-link1')
    const navLink2 = document.querySelector('.nav-link2')
    const navLink3 = document.querySelector('.nav-link3')
    const title = document.querySelector('#main-title')
    const linkedin = document.querySelector('#linkedin')
    const instagram = document.querySelector('#instagram')
    const github = document.querySelector('#github')
    const option1 = document.querySelector('#option-text1')
    const option2 = document.querySelector('#option-text2')

    if(langSelect.value === 'english') {
        navLink1.innerHTML = `Main`
        navLink2.innerHTML = `Projects`
        navLink3.innerHTML = `Contact`
        title.innerHTML = `My contacts:`
        linkedin.innerHTML = `Access my LinkedIn`
        instagram.innerHTML = `My Instagram: thiago.m4tos`
        github.innerHTML = `Check out my projects on GitHub`
        option1.innerHTML = `English`
        option2.innerHTML = `Portuguese`
    }


    if(langSelect.value === 'portuguese') {
        navLink1.innerHTML = `Menu`
        navLink2.innerHTML = `Projetos`
        navLink3.innerHTML = `Contato`
        title.innerHTML = `Meus contatos:`
        linkedin.innerHTML = `Acessar meu LinkedIn`
        instagram.innerHTML = `Meu Instagram: thiago.m4tos`
        github.innerHTML = `Veja meus projetos no GitHub`
        option1.innerHTML = `Inglês`
        option2.innerHTML = `Português`
    }
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = 'assets/menu_white_36dp.png'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'assets/close_white_36dp.png'
    }
}


language.addEventListener('change', changeLanguage())