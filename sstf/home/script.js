$(document).ready(function() {
    $(".modern-button").hover(function() {
        $(this).animate({ borderColor: "#2ecc71", color: "#2ecc71" }, 300);
    }, function() {
        $(this).animate({ borderColor: "#3498db", color: "#fff" }, 300);
    });
});
