 // Toggle Menu
 const navToggle = document.querySelector('.nav__toggle');
 const navList = document.querySelector('.nav__list');
 const navLinks = document.querySelectorAll('.nav__link');

 navToggle.addEventListener('click', () => {
     navList.classList.toggle('show');
     navToggle.querySelector('i').classList.toggle('fa-times');
     navToggle.querySelector('i').classList.toggle('fa-bars');
 });

 // Active Link
 navLinks.forEach(link => {
     link.addEventListener('click', function() {
         navLinks.forEach(l => l.classList.remove('active'));
         this.classList.add('active');
         
         // Close mobile menu when link is clicked
         if (window.innerWidth <= 768) {
             navList.classList.remove('show');
             navToggle.querySelector('i').classList.remove('fa-times');
             navToggle.querySelector('i').classList.add('fa-bars');
         }
     });
 });


