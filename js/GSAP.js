// Adding ScrollTrigger plugin for scroll animation sync
gsap.registerPlugin(ScrollTrigger);
  
          gsap.utils.toArray('.midsection-wrap img').forEach((img, i) => {
            // Selecting each image in the midsection and animating them
              gsap.from(img, {
                // Applying animation properties to each image
                  scrollTrigger: {
                    // Defining trigger element for scroll animation
                      trigger: img,
                      // Setting the start point for animation trigger
                      start: 'top center+=100',
                      toggleActions: 'play none none reverse', // Playing animation when entering, reversing when leaving
                  },
                  // Setting start opacity to 0
                  opacity: 0,
                  // moving vertically by 50 pixels
                  y: 50,
                   // animation duration
                  duration: 0.7,
                  // Adding delay to each image's animation based on index
                  delay: i * 0.2,
              });
          });

          // Re-registering plugin for further use

          gsap.registerPlugin(ScrollTrigger);

          gsap.utils.toArray('.image-container1 img').forEach((img, i) => {
              // Selecting each image in the image container 1 and animating them
             gsap.from(img, {
                // rest is the same from above
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