{
    // Selecting just the first of my bars
    const myBar = document.querySelector('.bargsap');
  
    function callback (entries, observer) {
      console.log('entries:', entries);
      console.log('observer:', observer);
    }
    
    // Instancing a new IntersectionObserver
    const observer = new IntersectionObserver(callback);
  
    // Adding a target to be observed
    observer.observe(myBar);
  }

{
    // Selecting all bars instead of just the first one
    const myBars = document.querySelectorAll('.bargsap');
  
    // No need to change this part. Though we'll have multiple targets,
    // we still have a single observer and a single callback
    const observer = new IntersectionObserver((entries, observer) => {
  
      // Each of the bars will make up an “entry”
      entries.forEach(entry => {
  
        // If our target enters the viewport, add an “active” class to it
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        // Otherwise, remove the “active” class
        } else {
          entry.target.classList.remove('active');
        }
      });
    });
  
    // Looping through the bars and adding them as targets of the observer
    Array.prototype.forEach.call(myBars, (el) => {
      observer.observe(el);
    });
  }

  {
    // Selecting just the first of my bars
    const myBar = document.querySelector('.bargsap2');
  
    function callback (entries, observer) {
      console.log('entries:', entries);
      console.log('observer:', observer);
    }
    
    // Instancing a new IntersectionObserver
    const observer = new IntersectionObserver(callback);
  
    // Adding a target to be observed
    observer.observe(myBar);
  }

{
    // Selecting all bars instead of just the first one
    const myBars = document.querySelectorAll('.bargsap2');
  
    // No need to change this part. Though we'll have multiple targets,
    // we still have a single observer and a single callback
    const observer = new IntersectionObserver((entries, observer) => {
  
      // Each of the bars will make up an “entry”
      entries.forEach(entry => {
  
        // If our target enters the viewport, add an “active” class to it
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        // Otherwise, remove the “active” class
        } else {
          entry.target.classList.remove('active');
        }
      });
    });
  
    // Looping through the bars and adding them as targets of the observer
    Array.prototype.forEach.call(myBars, (el) => {
      observer.observe(el);
    });
  }

  {
    // Selecting just the first of my bars
    const myBar = document.querySelector('.bargsap3');
  
    function callback (entries, observer) {
      console.log('entries:', entries);
      console.log('observer:', observer);
    }
    
    // Instancing a new IntersectionObserver
    const observer = new IntersectionObserver(callback);
  
    // Adding a target to be observed
    observer.observe(myBar);
  }

{
    // Selecting all bars instead of just the first one
    const myBars = document.querySelectorAll('.bargsap3');
  
    // No need to change this part. Though we'll have multiple targets,
    // we still have a single observer and a single callback
    const observer = new IntersectionObserver((entries, observer) => {
  
      // Each of the bars will make up an “entry”
      entries.forEach(entry => {
  
        // If our target enters the viewport, add an “active” class to it
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        // Otherwise, remove the “active” class
        } else {
          entry.target.classList.remove('active');
        }
      });
    });
  
    // Looping through the bars and adding them as targets of the observer
    Array.prototype.forEach.call(myBars, (el) => {
      observer.observe(el);
    });
  }

  {
    // Selecting just the first of my bars
    const myBar = document.querySelector('.bargsap4');
  
    function callback (entries, observer) {
      console.log('entries:', entries);
      console.log('observer:', observer);
    }
    
    // Instancing a new IntersectionObserver
    const observer = new IntersectionObserver(callback);
  
    // Adding a target to be observed
    observer.observe(myBar);
  }

{
    // Selecting all bars instead of just the first one
    const myBars = document.querySelectorAll('.bargsap4');
  
    // No need to change this part. Though we'll have multiple targets,
    // we still have a single observer and a single callback
    const observer = new IntersectionObserver((entries, observer) => {
  
      // Each of the bars will make up an “entry”
      entries.forEach(entry => {
  
        // If our target enters the viewport, add an “active” class to it
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        // Otherwise, remove the “active” class
        } else {
          entry.target.classList.remove('active');
        }
      });
    });
  
    // Looping through the bars and adding them as targets of the observer
    Array.prototype.forEach.call(myBars, (el) => {
      observer.observe(el);
    });
  }




//projets//



gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) => 
  loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
  
  gsap.utils.toArray('section').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: section, 
        scrub: 0.5 
      }
    });
  });
}

imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);

// Sélection de l'élément à animer
const gsaptxt = document.querySelector('.gsaptxt');

// Utilisation de la fonction fromTo() pour animer le texte
gsap.fromTo(gsaptxt, {x: '-100%'}, {x: '0%', duration: 1, ease: 'power2.out'});