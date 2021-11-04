class MobileNavbar {
    constructor (mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active" ;

        this.handleClick = this.handleClick.bind(this);
    }


    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }
      handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
      }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init () {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",

)

mobileNavbar.init();


function startTime()  {
    var today=new Date();
    var d=today.getDay();
    var h=today.getHours();
    var m=today.getMinutes();
    
        
    m=checkTime(m);
   
    document.getElementById('txt').innerHTML=sem[d]+h+":"+m;
    t=setTimeout('startTime()',500);
    }
    function checkTime(i)
    {
    if (i<10)
    {
    i="0" + i;
    }
    return i;
    
    }

var sem = new Array("Domingo  ", "Segunda-Feira  ","Terça-Feira  ", "Quarta-Feira  ", "Quinta-Feira  ", "Sexta-Feira  ", "Sábado  ")