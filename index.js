const textEng = {
  language: "en",
  title: "Edoardo Rosiello | A Full Stack Web Developer based in Bergamo, Italy.",
  presentation: "I\'m a Web Developer with knowledge on various languages and frameworks for full stack development. \nFor back-end side I\'m proficent with Java (Spring framework), Phyton and C#, while for operation on databases I use MySQL.\n While regarding front-end side my principal languages is Javascript and Typescript (Angular framework)",
  navigationProjects: "Projects",
  navigationAbout: "About",
  navigationContact: "Contact",
  getInTouch: "Get in touch",
  myProjectsTitle: "Some of my projects",
  ecommerce: "Web application that simulates a business ecommerce of clothes. \nI used Angular and Typescript for building the front-end, making it a single page application and using the MVVM pattern. \nWhile for back-end I used Java and Spring following the MVC pattern. \nFor maintain data persistance I used Hibernate through Spring.",
  githubEcommerce: "Visit Github repository",
  aboutMe: "About Me",
  aboutMeContent: "I have 3 years of working experience in the development of either back-end and front-end for web application, my favorite languages are Java and Typescript. \nDuring my experience, I worked with an international team in two major project, following Agile Scrum methodology. I even got the opportunity to take the role of a Scrum Master!\nI really love working to meaningful and high-quality application, reasearching the best patterns and guidelines for a clean, better maintenable code.",
  resume: "My Resume (ITA)",
  mail: "I will do my best to respond back. 😊 The quickest way to reach out to me is via an email."
}

const textIta = {
  language: "it",
  title: "Edoardo Rosiello | Uno sviluppatore Web Full Stack da Bergamo, Italia.",
  presentation: "Sono uno sviluppatore web che programma in vari linguaggi e framework.\nPer il lato back-end sono competente con l'uso di Java e Spring, Phyton e C#, mentre per operazioni sui database uso MySQL.\n Riguardo il lato front-end i miei linguaggi principali sono Javascript e Typescript, sfruttando in particolare Angular",
  navigationProjects: "Progetti",
  navigationAbout: "Su di me",
  navigationContact: "Contatti",
  getInTouch: "Mettiti in contatto",
  myProjectsTitle: "Alcuni dei miei progetti",
  ecommerce: "Applicazione web che simula un ecommerce di abiti.\nHo usato Typescript ed Angular per creare il front-end come Single page application, sfruttando il pattern MVVM.\nPer il back-end ho utilizzato Java Spring seguendo il pattern MVC e per la persistenza dei dati ho sfruttato Hibernate attraverso Spring.",
  githubEcommerce: "Visita il repository su Github",
  aboutMe: "Su di me",
  aboutMeContent: "Ho 3 anni di esperienza nello sviluppo Web full-stack, i miei linguaggi preferiti sono Java e Typescript.\nDurante la mia esperienza lavorativa. ho avuto modo di lavorare in team internazionali su due grandi progetti, seguendo la filosofia e metodologia Agile Scrum. Ho anche avuto l'occasione di lavorare come scrum master del team!\nMi entusiasma lavorare ad applicazioni di alta qualità, ricercando sempre il miglior pattern e regole guide per ottenere un codice pulito, elegante e meglio mantenibile nel tempo.",
  resume: "Il mio Curriculum Vitae",
  mail: "Farò del mio meglio per rispondere il prima possibile. 😊 Il modo più veloce per contattarmi è tramite questa mail."
}

document.addEventListener("DOMContentLoaded", function() {
  setLanguage("English")
});

document.getElementById("selectLanguage").addEventListener("change", (event) => {
  setLanguage(event.target.value)
})

setLanguage = (language) => {
  switch(language){
    case "Italian":
      useLanguage(textIta)
      break;
    case "English":
      useLanguage(textEng)
      break;
  }
}

useLanguage = (text) => {
  document.getElementById("language").lang = text.language
  document.getElementById("title").innerText = text.title
  document.getElementById("presentation").innerText = text.presentation
  document.getElementById("navigationProjects").innerText = text.navigationProjects
  document.getElementById("navigationAbout").innerText = text.navigationAbout
  document.getElementById("navigationContact").innerText = text.navigationContact
  document.getElementById("getInTouch").innerText = text.getInTouch
  document.getElementById("getInTouch2").innerText = text.getInTouch
  document.getElementById("myProjectsTitle").innerText = text.myProjectsTitle
  document.getElementById("ecommerce").innerText = text.ecommerce
  document.getElementById("githubEcommerce").innerText = text.githubEcommerce
  document.getElementById("aboutMe").innerText = text.aboutMe
  document.getElementById("aboutMeContent").innerText = text.aboutMeContent
  document.getElementById("resume").innerText = text.resume
  document.getElementById("mail").innerText = text.mail



}

/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

 
const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
