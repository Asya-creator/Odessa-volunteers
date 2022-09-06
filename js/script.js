const lang = document.querySelectorAll('.lang-switch');

for (let i=0; i<lang.length; i++) {
  lang[i].addEventListener('click', () =>{
    lang[i].classList.toggle('active');
  });
}