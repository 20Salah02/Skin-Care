window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
});


//
document.querySelectorAll('.watch img').forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-hover');
  
  img.addEventListener('mouseover', function() {
      // Fade out the image
      this.style.opacity = 0;
      
      // After the fade-out transition ends, change the image source and fade back in
      setTimeout(() => {
          this.src = hoverSrc;
          this.style.opacity = 1; // Fade back in
      }, 600); // Match the duration of the CSS transition
  });

  img.addEventListener('mouseout', function() {
      // Fade out the image
      this.style.opacity = 0;

      // After the fade-out transition ends, change the image back to the original source and fade back in
      setTimeout(() => {
          this.src = originalSrc;
          this.style.opacity = 1; // Fade back in
      }, 600); // Match the duration of the CSS transition
  });
});

// 


//document.addEventListener('DOMContentLoaded', () => {
     const menTab = document.getElementById('men-tab');
     const womenTab = document.getElementById('women-tab');
     const menWatches = document.getElementById('men-watches');
     const womenWatches = document.getElementById('women-watches');
     const menButton = document.getElementById('men-button');
     const womenButton = document.getElementById('women-button');

     menTab.addEventListener('click', () => {
        
         menTab.classList.add('active');
         womenTab.classList.remove('active');

        
         menWatches.classList.add('active');
         womenWatches.classList.remove('active');
         menButton.classList.add('active')
         womenButton.classList.remove('active');
     });

     womenTab.addEventListener('click', () => {
        
         womenTab.classList.add('active');
         menTab.classList.remove('active');

        
         womenWatches.classList.add('active');
         menWatches.classList.remove('active');
        menButton.classList.remove('active')
         womenButton.classList.add('active');
     })


