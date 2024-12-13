(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.getElementById("sendMessageButton").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtén los valores de los campos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Verifica que los campos estén completos
    if (!name || !email || !subject || !message) {
        alert("Por favor, completa todos los campos antes de enviar el mensaje.");
        return;
    }

    // Construye el mensaje de WhatsApp
    const whatsappMessage = `Hola, mi nombre es ${name} ${email}. Mi email es ${subject}. \nMensaje: ${message}`;

    // Número de WhatsApp al que deseas enviar el mensaje (cambia el número por el tuyo)
    const phoneNumber = "5491123456789"; // Reemplaza con el número de WhatsApp en formato internacional

    // Genera la URL para WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");
});
