        const images = document.querySelectorAll('.fullsize-image');
        let currentIndex = 0;

        function changeImage() {
          images[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add('active');
        }

        setInterval(changeImage, 1000);


        document.addEventListener('DOMContentLoaded', function() {
          const detailsElements = document.querySelectorAll('.faq-section details');
        
          detailsElements.forEach(details => {
            details.addEventListener('click', function() {
              // Close all other details elements
              detailsElements.forEach(d => {
                if (d !== details) {
                  d.removeAttribute('open');
                }
              });
            });
          });
        });
        





