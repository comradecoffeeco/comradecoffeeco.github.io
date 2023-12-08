<script>
    // Load and display the Lottie animation
    const animationContainer = document.getElementById('lottie-container');
    const animationData = {
        container: animationContainer, // The DOM element to render the animation
        renderer: 'svg', // Choose 'svg', 'canvas', or 'html' as per your preference
        loop: false, // Set to true for a looping animation
        autoplay: true, // Set to true to automatically start the animation
        path: 'https://lottie.host/49e71a74-7ebe-4097-9ad8-e867ff40abab/0d4iQQV8P7.json' // Path to your Lottie JSON file
    };
    // Create the Lottie player
    const anim = lottie.loadAnimation(animationData);
    // You can control the animation using the 'anim' object
    // For example, to pause the animation: anim.pause();
    // To play the animation: anim.play();
</script>