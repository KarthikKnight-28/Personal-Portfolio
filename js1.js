function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;

    // Toggle sidebar visibility by moving it from the right
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px"; // Close the sidebar
        body.classList.remove("overlay-active"); // Remove the body overlay
    } else {
        sidebar.style.right = "0px"; // Open the sidebar
        body.classList.add("overlay-active"); // Add the overlay to prevent scrolling
    }
}

// Close the sidebar when clicking outside of it
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menu = document.querySelector(".menu");
    const body = document.body;

    // Check if the click was outside the sidebar and menu
    if (!sidebar.contains(event.target) && !menu.contains(event.target)) {
        sidebar.style.right = "-250px"; // Close sidebar
        body.classList.remove("overlay-active"); // Remove the overlay
    }
});
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;

    if (sidebar.style.right === "20px") {
        sidebar.style.right = "-100%"; // Hide the sidebar
        body.classList.remove("overlay-active");
    } else {
        sidebar.style.right = "20px"; // Show the sidebar aligned with the button
        body.classList.add("overlay-active");
    }
}


