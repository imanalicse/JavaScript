document.addEventListener("DOMContentLoaded", function () {
   const sections = document.querySelectorAll("section");
   const navLi = document.querySelectorAll("nav .container ul li");
   window.addEventListener("scroll", function () {
      let current = '';
      sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
         if (scrollY >= (sectionTop - sectionHeight / 4)) {
            current = section.getAttribute('id');
         }
      })
      console.log(current);
      navLi.forEach(li => {
         if (current) {
            li.classList.remove('active');
         }
         if (li.classList.contains(current)) {
            li.classList.add('active');
         }
      })
   })
});