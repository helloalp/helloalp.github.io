(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.example.com/library.js';
    script.onload = function() {
        console.log('CDN script loaded successfully.');
    };
    script.onerror = function() {
        console.log('CDN script failed to load. Loading local script.');
        var localScript = document.createElement('script');
        localScript.src = 'path/to/local/library.js';
        document.head.appendChild(localScript);
    };
    document.head.appendChild(script);
})();