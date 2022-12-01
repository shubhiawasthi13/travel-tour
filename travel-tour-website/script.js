let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose =document.querySelector('#form-close');
let menuBar= document.querySelector('#menu-bar');
let navBar =document.querySelector('.navbar');
let videoBtn =document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
searchBtn.classList.remove('fa-times');
searchBar.classList.remove('active');
menuBar.classList.remove('fa-times');
navBar.classList.remove('active');
loginForm.classList.remove('active');
}
menuBar.addEventListener('click', () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
   
}); 

searchBtn.addEventListener('click', () =>{
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
});


loginBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
    
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
   
}); 
menuBar.addEventListener('click', () =>{
    menubar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
   
}); 
videoBtn.forEach(btn =>{
btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
});
});

 var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },

 });

