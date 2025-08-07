document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    const video = document.querySelector("video");

    // Show preloader
    preloader.style.display = "flex";

    // Hide content
    content.style.display = "none";

    // Play video
    video.play();

    // Hide preloader and show content after the video ends
    video.addEventListener("ended", function () {
        // Hide preloader
        preloader.style.display = "none";

        // Show content
        content.style.display = "block";
    });

    // Set timeout to hide preloader after video duration
    setTimeout(function () {
        // Hide preloader
        preloader.style.display = "none";

        // Show content
        content.style.display = "block";
    }, video.duration * 1000); // Convert video duration to milliseconds
});
