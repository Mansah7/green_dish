// navigation

const nav = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.menu');
const naviLinkR = document.querySelector('.navi-linkR');
const naviLinkM = document.querySelector('.navi-linkM');
const naviLinkC = document.querySelector('.navi-linkC');
const naviLinkRe = document.querySelector('.navi-linkRe');



nav.onclick = function () {
     menu.classList.toggle('active');
     nav.classList.toggle('off');
     closeBtn.classList.toggle('on');
     
}

closeBtn.onclick = function () {
     menu.classList.toggle('active');
     nav.classList.toggle('off');
     closeBtn.classList.toggle('on');
}


naviLinkR.onclick = function () {
     menu.classList.remove('active');
     nav.classList.toggle('off');
     closeBtn.classList.toggle('on');
     
}
naviLinkM.onclick = function () {
     menu.classList.remove('active');
     nav.classList.toggle('off');
     closeBtn.classList.toggle('on');
     
}
naviLinkC.onclick = function () {
     menu.classList.remove('active');
     nav.classList.toggle('off');
     closeBtn.classList.toggle('on');
     
}
naviLinkRe.onclick = function () {
     menu.classList.remove('active');
     nav.classList.toggle('off');
     closeBtn.classList.toggle('on');
     
}



// hero

const titleSpan = document.querySelectorAll('h1 span');
const firstParagraph = document.querySelector('.first-paragraph');
const button = document.querySelector('.button');
const image = document.querySelector('.right-content');
const media = document.querySelectorAll('.icon');
const mapPine = document.querySelector('.location');
const adress = document.querySelector('.place');
const ancre = document.querySelector('.ancor');


window.addEventListener('load', () => {

     const TL = gsap.timeline({ paused: true});

     TL
     .staggerFrom(titleSpan, 1, {opacity: 0, ease: "power2.out"}, 0.3)
     .from(firstParagraph, 1, {opacity: 0, ease: "power3.out"}, 1.5, )
     .from(button, 1, {opacity: 0, ease: "power2.out"},2, '-=2')
     .from(image, 1, {opacity: 0, ease: "power2.out"},2.5)
     .staggerFrom(media, 1, {opacity: 0, ease: "power2.out"}, 0.3,'-=2')
     .from(mapPine, 1, {opacity: 0, ease: "power2.out"}, 3.3 )
     .from(adress, 1, {opacity: 0, ease: "power2.out"}, 3.4)
     .from(ancre, 1, {opacity: 0, ease: "power2.out"}, 4);
   


     TL.play();

})


const menu1 = document.querySelector('.liste1');
const menu2 = document.querySelector('.liste2');
const menu3 = document.querySelector('.liste3');
const menu4 = document.querySelector('.liste4');
const bas = document.querySelector('.ancor');

const diner = document.querySelector('#diner');
const matin = document.querySelector('#petitdej');
const repas = document.querySelector('#repas');
const menuPetidej = document.querySelector('.petitdej');
const menuDiner = document.querySelector('.diner');
const menuRepas = document.querySelector('.repas');
const actuel = document.querySelector('.default');
const reservation = document.querySelector('btn1');




const shay = document.querySelector('#shay');
const norad = document.querySelector('#norad');
const martin = document.querySelector('#martin');

const btn = document.getElementsByClassName('btn');
const slider = document.getElementById('slider');







// slider

btn[0].onclick = function () {
     slider.style.transform = "translateX(0px)";
     for (i = 0; i < 3; i++) {
          btn[i].classList.remove('active');
     
     }
     this.classList.add('active');
     
}



btn[1].onclick = function () {
     slider.style.transform = "translateX(-1200px)";
     for (i = 0; i < 3; i++) {
          btn[i].classList.remove('active');
     
     }
     this.classList.add('active');
     
     
}


btn[2].onclick = function () {
     slider.style.transform = "translateX(-2400px)";
     for (i = 0; i < 3; i++) {
          btn[i].classList.remove('active');
     
     }
     this.classList.add('active');
     
}


bas.onclick = function () {
     menu1.classList.toggle('current')
     menu2.classList.remove('current')
     menu3.classList.remove('current')
     menu4.classList.remove('current')
}
menu1.onclick = function () {
     menu1.classList.toggle('current')
     menu2.classList.remove('current')
     menu3.classList.remove('current')
     menu4.classList.remove('current')
}
menu2.onclick = function () {
     menu2.classList.toggle('current')
     menu1.classList.remove('current')
     menu3.classList.remove('current')
     menu4.classList.remove('current')
}
menu3.onclick = function () {
     menu3.classList.toggle('current')
     menu2.classList.remove('current')
     menu1.classList.remove('current')
     menu4.classList.remove('current')
}
menu4.onclick = function () {
     menu4.classList.toggle('current')
     menu2.classList.remove('current')
     menu3.classList.remove('current')
     menu1.classList.remove('current')
}


matin.onclick = function () {
     // menuPetidej.classList.remove('hidden')
     // menuDiner.classList.add('hidden')
     // menuRepas.classList.add('hidden')
     // repas.classList.remove('current')
     // diner.classList.remove('current')
     // matin.classList.add('current')
     // matin.classList.toggle('default')
     menuPetidej.classList.remove('hidden')
     menuRepas.classList.add('hidden')
     menuDiner.classList.add('hidden')
     diner.classList.remove('current')
     menuRepas.classList.remove('current')
     matin.classList.toggle('current')
     menuPetidej.classList.toggle('default')
     repas.classList.remove('default')
     diner.classList.remove('default')
     repas.classList.remove('current')
     
     
}
diner.onclick = function () {
     menuPetidej.classList.add('hidden')
     menuRepas.classList.add('hidden')
     menuDiner.classList.remove('hidden')
     diner.classList.toggle('current')
     menuRepas.classList.remove('current')
     matin.classList.remove('current')
     menuPetidej.classList.remove('default')
     repas.classList.remove('default')
     repas.classList.remove('current')
     
     
}
repas.onclick = function () {
     // menuRepas.classList.remove('hidden')
     // menuPetidej.classList.add('hidden')
     // menuDiner.classList.add('hidden')
     // repas.classList.toggle('current')
     // diner.classList.remove('current')
     // matin.classList.remove('current')
     // matin.classList.remove('default')
     menuPetidej.classList.add('hidden')
     menuRepas.classList.remove('hidden')
     menuDiner.classList.add('hidden')
     diner.classList.remove('current')
     menuRepas.classList.toggle('current')
     matin.classList.remove('current')
     menuPetidej.classList.remove('default')
     repas.classList.remove('default')
     repas.classList.toggle('current')
     
}








