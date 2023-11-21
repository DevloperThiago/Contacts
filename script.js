const language = document.querySelector('.language')

function changeLanguage() {
    const langSelect = document.querySelector('.language')

    const mainLink = document.querySelector('#main-link')
    const projectsLink = document.querySelector('#projects-link')
    const contactsLink = document.querySelector('#contacts-link')

    const mobileMainLink = document.querySelector('#mobile-main-link')
    const mobileProjectsLink = document.querySelector('#mobile-projects-link')
    const mobileContactsLink = document.querySelector('#mobile-contacts-link')
    
    const title = document.querySelector('#main-title')
    const linkedin = document.querySelector('#linkedin')
    const instagram = document.querySelector('#instagram')
    const github = document.querySelector('#github')
    const option1 = document.querySelector('#option-text1')
    const option2 = document.querySelector('#option-text2')

    if(langSelect.value === 'english') {
        mainLink.innerHTML = `<span>#1.</span> Main`
        projectsLink.innerHTML = `<span>#2.</span> Projects`
        contactsLink.innerHTML = `<span>#3.</span> Contact`

        mobileMainLink.innerHTML = `<span>#1.</span> Main`
        mobileProjectsLink.innerHTML = `<span>#2.</span> Projects`
        mobileContactsLink.innerHTML = `<span>#3.</span> Contact`
        
        title.innerHTML = `My contacts:`
        linkedin.innerHTML = `Access my LinkedIn`
        instagram.innerHTML = `My Instagram: thiago.m4tos`
        github.innerHTML = `Check out my projects on GitHub`
        option1.innerHTML = `English`
        option2.innerHTML = `Portuguese`
    }

    if(langSelect.value === 'portuguese') {
        mainLink.innerHTML = `<span>#1.</span> Menu`
        projectsLink.innerHTML = `<span>#2.</span> Projetos`
        contactsLink.innerHTML = `<span>#3.</span> Contato`

        mobileMainLink.innerHTML = `<span>#1.</span> Menu`
        mobileProjectsLink.innerHTML = `<span>#2.</span> Projetos`
        mobileContactsLink.innerHTML = `<span>#3.</span> Contato`
        
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


language.addEventListener('change', changeLanguage)
