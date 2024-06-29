(function() {
    var script = document.createElement('script');
    script.src = 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.js';
    script.onload = function() {
        console.log('CDN script loaded successfully.');
    };
    script.onerror = function() {
        console.log('CDN script failed to load. Loading local script.');
        var localScript = document.createElement('script');
        localScript.src = '/personal/jquery/3.6.0/jquery.js';
        document.head.appendChild(localScript);
    };
    document.head.appendChild(script);
})();