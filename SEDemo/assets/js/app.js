
/*---------------------------
  NAME: app.js
  AUTHORS: Team 1
  DESCRIPTION: CSS for Master CS
  VERSION: 1.0
----------------------------*/

/* FOLLOWING SECTION IS FROM GITHUB TEMPLATE FOR NAVBAR FUNCTIONALITY */
  /**
   * Easy selector helper function
   */
   const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }


  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
/* END SECTION FROM GITHUB TEMPLATE FOR NAVBAR FUNCTIONALITY */

/**
 * Progress Bar
 *  */ 
var i = 0;
function progress() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progressBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
} 

/**
 * Achivement Class
 */
 function achievement(name, text, checkFunction){
  this.name = name;
  this.text = text;
  this.checkFunction = checkFunction;
}

/**
 * Level Class
 */
function level(name, text, checkFunction) {
  this.name; 
  this.text; 
  this.checkFunction = checkFunction;
}

/**
 * Add Achivements 
 */
// Test achivement
 function initClickHandling() {

  var numClicks = 0;

  achievement.push(new achievement(
        "Clicktastic", 
        "You clicked 1000 times!", 
        function() {
            return numClicks > 1000;
        })
  );
  window.onclick = function() {
       numClicks++;
  }
}

// Welcome Badge
//When users first register to create an account on your site, they are awarded this badge.
//Required Steps: In the required steps manager select “Register to the website” as a trigger.


/**
 * Check Achievements
 */
 achievement.forEach(function(achievement) {
  if (achievement.checkFunction()) {
        // award the achievement to user
  }
});

function myFunction() {
  alert("Successfully Registered!");
}