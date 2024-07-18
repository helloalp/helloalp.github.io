(function() {
    var script = document.createElement('script');
    script.src = 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.js';
    
    script.onload = function() {
        $(document).ready(function() {
            $(".date").click(function() {
                $(this).next(".content").slideToggle(500);
            });
        });
    };
    
    document.head.appendChild(script);
})();
