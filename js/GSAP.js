gsap.registerPlugin(ScrollTrigger);
  
          gsap.utils.toArray('.midsection-wrap img').forEach((img, i) => {
              gsap.from(img, {
                  scrollTrigger: {
                      trigger: img,
                      start: 'top center+=100',
                      toggleActions: 'play none none reverse',
                  },
                  opacity: 0,
                  y: 50,
                  duration: 0.7,
                  delay: i * 0.2,
              });
          });

          gsap.registerPlugin(ScrollTrigger);

          gsap.utils.toArray('.image-container1 img').forEach((img, i) => {
              gsap.from(img, {
                  scrollTrigger: {
                      trigger: img,
                      start: 'top center',
                      end: 'bottom center', 
                      scrub: true, // To make it stay on screen
                  },
                  opacity: 0.5,
                  y: 50,
                  duration: 0.5
              });
          });