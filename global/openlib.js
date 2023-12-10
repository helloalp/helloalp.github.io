
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

document.addEventListener('cut', function(e) {
    e.preventDefault();
});

document.addEventListener('paste', function(e) {
    e.preventDefault();
});


var iframes = document.querySelectorAll('iframe');


iframes.forEach(function(iframe) {
    iframe.addEventListener('copy', function(e) {
        e.preventDefault();
    });

    iframe.addEventListener('cut', function(e) {
        e.preventDefault();
    });

    iframe.addEventListener('paste', function(e) {
        e.preventDefault();
    });
});
