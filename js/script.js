// jQuery shorthand for executing code when the DOM is fully loaded
$(function(){

    // Initializing parallax effect on image with id "img1" using image source
    $("#img1").parallax({
        imageSrc: "images/emma3.jpeg" 
    });
    // Initializing parallax effect on image with id "img2" using specified image source
    $("#img2").parallax({
        imageSrc: "images/laptop.jpg" 
    });

    // Initializing background video for element with class "banner-video"
    $(".banner-video").bgVideo({
        pauseAfter: 0, // No pause after video finishes
        fadeIn: 0, // No fade-in effect
        showPausePlay: false // Hide pause/play button
    });

});


