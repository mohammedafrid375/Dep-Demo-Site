
(function() {
  "use strict";

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
   * news section intervel 
   */
  const spanArray = [document.getElementById("news1"),document.getElementById("news2"),document.getElementById("news3")];
  let i = 0;
  const newsTimer = setInterval(()=>{
    spanArray[i].style.display='block';
    spanArray[i].classList.add("animationjs"); 
    setTimeout(() => { 
        faculty.classList.remove("animationjs"); 
    }, 1500);
    if(i==0){
    spanArray[2].style.display='none';
    }
    else{
      spanArray[i-1].style.display='none';
    }
    i++;
    if(i > 2){
      i=0;
    }

  },3000);

  /**
   * info section event listener 
   */
  var infobt1 = document.getElementById("infobt1");
  var infobt2 = document.getElementById("infobt2");
  var infobt3 = document.getElementById("infobt3");
  var infobt4 = document.getElementById("infobt4");
  var infobtn1 = document.getElementById("infobtn1");
  var infobtn2 = document.getElementById("infobtn2");
  var infobtn3 = document.getElementById("infobtn3");
  var infobtn4 = document.getElementById("infobtn4");

  var achievements = document.getElementById("achievements");
  var faculty = document.getElementById("faculty");
  var events = document.getElementById("events");
  var course = document.getElementById("course");

  infobt1.addEventListener('click', () =>{
    achievements.style.display='block';
    faculty.style.display='none';
    events.style.display='none';
    course.style.display='none';

    achievements.classList.add("animationjs"); 
    setTimeout(() => { 
        achievements.classList.remove("animationjs"); 
    }, 1500);
  });
  infobtn1.addEventListener('click', () =>{
    achievements.style.display='block';
    faculty.style.display='none';
    events.style.display='none';
    course.style.display='none';

    achievements.classList.add("animationjs"); 
    setTimeout(() => { 
        achievements.classList.remove("animationjs"); 
    }, 1500);
  });

  infobt2.addEventListener('click',()=>{
    achievements.style.display='none';
    faculty.style.display='block';
    events.style.display='none';
    course.style.display='none';

    faculty.classList.add("animationjs"); 
    setTimeout(() => { 
        faculty.classList.remove("animationjs"); 
    }, 1500);
  });
  infobtn2.addEventListener('click',()=>{
    achievements.style.display='none';
    faculty.style.display='block';
    events.style.display='none';
    course.style.display='none';

    faculty.classList.add("animationjs"); 
    setTimeout(() => { 
        faculty.classList.remove("animationjs"); 
    }, 1500);
  });

  infobt3.addEventListener('click',()=>{
    achievements.style.display='none';
    faculty.style.display='none';
    events.style.display='block';
    course.style.display='none';

    events.classList.add("animationjs"); 
    setTimeout(() => { 
        events.classList.remove("animationjs"); 
    }, 1500);
  });
  infobtn3.addEventListener('click',()=>{
    achievements.style.display='none';
    faculty.style.display='none';
    events.style.display='block';
    course.style.display='none';

    events.classList.add("animationjs"); 
    setTimeout(() => { 
        events.classList.remove("animationjs"); 
    }, 1500);
  });

  infobt4.addEventListener('click',()=>{
    achievements.style.display='none';
    faculty.style.display='none';
    events.style.display='none';
    course.style.display='block';

    course.classList.add("animationjs"); 
    setTimeout(() => { 
        course.classList.remove("animationjs"); 
    }, 1500);
  });
  infobtn4.addEventListener('click',()=>{
    achievements.style.display='none';
    faculty.style.display='none';
    events.style.display='none';
    course.style.display='block';

    course.classList.add("animationjs"); 
    setTimeout(() => { 
        course.classList.remove("animationjs"); 
    }, 1500);
  });

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()