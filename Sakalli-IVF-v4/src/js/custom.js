$(document).ready(function () {
    $("#menu-toggle").click(function () {
        $("#mega-menu").toggle();
        $("#menu-arrow").toggleClass("rotate-180");
    });
    $("#sidebar-menu-toggle").click(function () {
        $("#sidebar-mega-menu").toggle();
        $("#sidebar-menu-arrow").toggleClass("rotate-180");
    });
    $('#dropdownButton').on('click', function (e) {
        e.stopPropagation();
        $('#dropdownMenu').toggleClass('hidden');
    });
    $(document).on('click', function () {
        $('#dropdownMenu').addClass('hidden');
    });
    $('#dropdownMenu').on('click', function (e) {
        e.stopPropagation();
    });
    $('#dropdownMenu .flex').on('click', function () {
        const selectedLanguage = $(this).find('span').text();
        const selectedFlag = $(this).find('img').attr('src');
        $('#dropdownButton img').attr('src', selectedFlag);
        $('#dropdownButton span').text(selectedLanguage);
        $('#dropdownMenu').addClass('hidden');
    });
    $('#dropdownButton-country').on('click', function () {
        $('#dropdownMenu-country').toggleClass('hidden');
    });
    $('#dropdownMenu-country button').on('click', function () {
        const selectedValue = $(this).data('value');
        $('#selectedCountry').text(selectedValue);
        $('#dropdownMenu-country').addClass('hidden');
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#dropdownButton-country, #dropdownMenu-country').length) {
            $('#dropdownMenu-country').addClass('hidden');
        }
    });
    $("#datePicker").datepicker({
        dateFormat: "dd-mm-yy",
        showAnim: "slideDown",
    });
    $("#datePicker").on("change", function () {
        const selectedDate = $(this).val();
        if (!selectedDate) {
            $("#dateError").removeClass("hidden");
        } else {
            $("#dateError").addClass("hidden");
        }
    });
    $('#consultationForm').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        // Validate first name
        const firstName = $('#firstName');
        if (!firstName.val().trim()) {
            showError(firstName, 'First name is required');
            isValid = false;
        } else {
            hideError(firstName);
        }

        // Validate phone
        const phone = $('#phone');
        const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Simple phone validation
        if (!phoneRegex.test(phone.val())) {
            showError(phone, 'Please enter a valid phone number');
            isValid = false;
        } else {
            hideError(phone);
        }

        // Validate email
        const email = $('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.val())) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError(email);
        }

        // Validate date
        const date = $('#date');
        if (!date.val()) {
            showError(date, 'Please select a date');
            isValid = false;
        } else {
            hideError(date);
        }

        if (isValid) {
            alert('Form submitted successfully!');
        }
    });

    function showError(input, message) {
        const errorElement = input.siblings('span');
        errorElement.text(message).removeClass('hidden');
        input.addClass('border-red-600');
    }

    function hideError(input) {
        const errorElement = input.siblings('span');
        errorElement.addClass('hidden');
        input.removeClass('border-red-600');
    }

    let currentIndex = 0;
    const images = $(".slider-image");
    const totalImages = images.length;

    const sliderData = [
        {
            src: "src/images/slider-1.jpg",
            alt: "Slider 1",
            heading: "EMPOWRING DREAMS CREATING FAMILIES",
            subtext: "Women IVF for a Healthy Tomorrow: Take a Step to Your Dream Family",
            buttonText: "Book an Appointment"
        },
        {
            src: "src/images/slider-2.jpg",
            alt: "Slider 2",
            heading: "NURTURING DREAMS CREATING FAMILIES",
            subtext: "Bearded IVF for a Healthy Tomorrow: Take a Step to Your Dream Family",
            buttonText: "Book an Appointment"
        },
        
    ];


    const totalSlides = sliderData.length;

    function updateSlider() {
        const slide = sliderData[currentIndex];

        $(".slider-image").fadeOut(100, function () {
            $(this).attr("src", slide.src).attr("alt", slide.alt).fadeIn(1000);
        });

        $(".slider-heading").fadeOut(100, function () {
            $(this).text(slide.heading).fadeIn(100);
        });

        $(".slider-subtext").fadeOut(100, function () {
            $(this).text(slide.subtext).fadeIn(100);
        });

        $(".slider-button").fadeOut(100, function () {
            $(this).text(slide.buttonText).fadeIn(100);
        });

        currentIndex = (currentIndex + 1) % totalSlides;
    }

    setInterval(updateSlider, 6000);


    $("#sidebarButton").on("click", function () {
        $("#sidebar").removeClass("-translate-x-full");
        $("#sidebar").removeClass("hidden");
    });

    $("#closeSidebar").on("click", function () {
        $("#sidebar").addClass("-translate-x-full");
        $("#sidebar").addClass("hidden");
    });
});



// Cards Flips on Mobile View with Hover Effect Start
        document.addEventListener("DOMContentLoaded", function () {
            const cards = document.querySelectorAll(".card");

            cards.forEach((card) => {
                card.addEventListener("click", function (event) {
                    event.stopPropagation();
                    this.classList.toggle("active");

                    const content = this.querySelector(".card-content");
                    content.classList.toggle("opacity-100");
                });
            });

            // Close when clicking outside
            document.addEventListener("click", function (e) {
                cards.forEach((card) => {
                    if (!card.contains(e.target)) {
                        card.classList.remove("active");
                        const content = card.querySelector(".card-content");
                        content.classList.remove("opacity-100");
                    }
                });
            });
        });
// Cards Flips on Mobile View with Hover Effect End



        // Tab Acoordination Start

       
        function openTab(evt, tabId) {
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
            document.getElementById(tabId).classList.remove('hidden');
            
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('text-gray-700', 'border-blue-500', 'active');
                btn.classList.add('text-gray-500', 'border-transparent');
            });
            
            evt.currentTarget.classList.remove('text-gray-500', 'border-transparent');
            evt.currentTarget.classList.add('text-gray-700', 'border-blue-500', 'active');
        }
   
    
        // Tab Acoordination End



        document.addEventListener("DOMContentLoaded", function () {
            const accordions = document.querySelectorAll(".accordion-toggle");
        
            accordions.forEach((accordion) => {
                accordion.addEventListener("click", function () {
                    const parent = this.parentElement;
                    const content = parent.querySelector(".accordion-content");
        
                    // Toggle active class for accordion
                    parent.classList.toggle("active");
        
                    // Expand or collapse content
                    if (parent.classList.contains("active")) {
                        content.style.maxHeight = content.scrollHeight + "px";
                    } else {
                        content.style.maxHeight = "0px";
                    }
        
                    // Rotate the arrow icon
                    const icon = this.querySelector("svg");
                    if (icon) {
                        icon.classList.toggle("rotate-180");
                    }
                });
            });
        });
        