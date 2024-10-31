document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    menuToggle.addEventListener('click', function() {
          navLinks.classList.toggle('active');
    });
    
    // Menambahkan event listener untuk setiap link dalam menu
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
        navLinks.classList.remove('active'); // Menutup menu setelah item diklik
        });
    });
});
(function($){
    new WOW().init();
})(jQuery);