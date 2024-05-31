document.addEventListener('DOMContentLoaded', function() {
  const texts = [
    document.getElementById('text-1'),
    document.getElementById('text-2'),
    document.getElementById('text-3')
  ];
  const gif = document.getElementById('loading-gif');
  const textContainer = document.querySelector('.text-container');
  const textDisplayDuration = 0.8; // Duration for each text to display
  const totalTextDuration = texts.length * textDisplayDuration; // Total duration for all texts
  const staggerDelay = 0.2; // Delay between each text element
  const preloader = document.querySelector('.preloader');

  let timeline = gsap.timeline();

  // Animate each text sequentially with a staggered effect for smoother appearance
  texts.forEach((text, index) => {
    timeline.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.6, // Longer duration for smoother appearance
      ease: "power2.out", // Smoother easing function
      delay: index * staggerDelay // Add staggered delay
    });
  });

  // Form a single sentence
  timeline.to(textContainer, {
    display: 'block',
    duration: 0
  }, `-=${textDisplayDuration}`);

  // Hide text before showing GIF
  timeline.to(texts, {
    opacity: 0,
    duration: 0,
    ease: "power2.out", // Use a smoother easing function
  });

  // Center the GIF on the site
  timeline.to(gif, {
    display: 'block',
    opacity: 1,
    duration: 0.3,
    ease: "power2.out", // Use a smoother easing function
    onComplete: function() {
      // Hide preloader after the GIF has displayed for a while
      setTimeout(function() {
        timeline.to(preloader, {
          opacity: 0,
          duration: 0.5, // Duration of the fade-out animation
          onComplete: function() {
            // Hide preloader after fade-out animation completes
            preloader.style.display = 'none';
          }
        });
      }, 2000); // Keep the GIF for 2 seconds
    }
  });

  // Animate all texts to disappear simultaneously with a faster duration
  timeline.to(texts, {
    opacity: 0,
    y: -30,
    duration: 0.3,
    ease: "power2.out", // Use a smoother easing function
    delay: totalTextDuration
  });

  window.addEventListener('load', function() {
    timeline.play();
  });
});
