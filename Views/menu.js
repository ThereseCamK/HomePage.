function menuView(){
    let lightModeBTN = model.lightMode === 'dark' ? '': 'menuButtonLight';
    let lightModeContact = model.lightMode ===  'dark' ? '': 'contactMenuLight';
    return `<button class="menuButton ${lightModeBTN}" onclick="changePage('home')"> Hjem </button>
    <button class="menuButton ${lightModeBTN}" onclick="changePage('about')"> Om  </button>
    <button class="menuButton ${lightModeBTN}" onclick="changePage('cv')"> CV </button>
    <button class="menuButton  ${lightModeBTN}" onclick="changePage('projects')"> Prosjekter </button>
    <div class="contactMenu ${lightModeContact}">
    <p> Kontakt: </p>
    <p>&#9743; 413 77 965</p>
    <p>&#9993; theresecnord@gmail.com</p>
    </div>
    <div class="linkToSome"><a href="https://www.facebook.com/therese.nordnes.58/" class="fa fa-facebook"></a></div>
    <div class="linkToSome"><a href="https://www.linkedin.com/in/therese-camilla-nordnes-3a223420b/" class="fa fa-linkedin"></a></div>
    <div class="linkToSome"><a href="https://github.com/ThereseCamK?tab=repositories" class="fa fa-github"></a></div>
    
    `;
}