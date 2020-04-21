function opentab(evt, Name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
document.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20) {
    mybutton.style.display = "none";
  }
  else {
    mybutton.style.display = "block";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal(event) {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showImg(slideIndex);

function currentImg(n){
  showImg(slideIndex = n);

}

function showImg(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// document.onclick = function(event) {
//   // console.log("message");
//   var modal = document.getElementById("myModal")
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }