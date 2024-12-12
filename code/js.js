let menu  = document.getElementById('menu');
   function Showmenu(){
   menu.classList.add('hidemenu')
;
}


function Hidemenu(){
    menu.classList.remove('hidemenu')
 ;
 }
 



 






 

 function openModal(image) {
   const modal = document.getElementById("imageModal");
   const modalImg = document.getElementById("modalImg");
   
    
   modalImg.src = image.src;
   modal.style.display = "block";

 }
 
 function closeModal() {
   const modal = document.getElementById("imageModal");
   modal.style.display = "none";
 }
 



 

 document.addEventListener("DOMContentLoaded", function() {
  //Initialize TweenMax animations after the DOM has loaded
  TweenMax.from('.title', 1, { delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut });
  TweenMax.from('.discription', 1, { delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut });
  // TweenMax.from('.orange-juice1', 1, { delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut });
//  TweenMax.from('.orange-juice2', 1, { delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut });
});

