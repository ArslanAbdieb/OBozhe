var cont = 0;
            function loopSlider() {
                var xx = setInterval(function () {
                    switch (cont) {
                        case 0:
                            {
                                $("#slider-1").fadeOut(400);
                                $("#slider-2").delay(400).fadeIn(400);
                                $("#sButton1").removeClass("bg-purple-800");
                                $("#sButton2").addClass("bg-purple-800");
                                cont = 1;
                                break;
                            }
                        case 1:
                            {
                                $("#slider-2").fadeOut(400);
                                $("#slider-1").delay(400).fadeIn(400);
                                $("#sButton2").removeClass("bg-purple-800");
                                $("#sButton1").addClass("bg-purple-800");
                                cont = 0;
                                break;
                            }
                    }
                }, 8000);
            }

            function reinitLoop(time) {
                clearInterval(xx);
                setTimeout(loopSlider(), time);
            }

            function sliderButton1() {
                $("#slider-2").fadeOut(400);
                $("#slider-1").delay(400).fadeIn(400);
                $("#sButton2").removeClass("bg-purple-800");
                $("#sButton1").addClass("bg-purple-800");
                reinitLoop(4000);
                cont = 0
            }

            function sliderButton2() {
                $("#slider-1").fadeOut(400);
                $("#slider-2").delay(400).fadeIn(400);
                $("#sButton1").removeClass("bg-purple-800");
                $("#sButton2").addClass("bg-purple-800");
                reinitLoop(4000);
                cont = 1
            }

            $(window).ready(function () {
                $("#slider-2").hide();
                $("#sButton1").addClass("bg-purple-800");
                loopSlider();
            });
            function disp(form) {
                if (form.style.display == "none") {
                    form.style.display = "block";
                } else {
                    form.style.display = "none";
                    $.ajax({
                        'type': 'POST',
                        'url': 'skript.php'
                    });
                }
            }
            (function () {
                'use strict';

                function trackScroll() {
                    var scrolled = window.pageYOffset;
                    var coords = document.documentElement.clientHeight;

                    if (scrolled > coords) {
                        goTopBtn.classList.add('back_to_top-show');
                    }
                    if (scrolled < coords) {
                        goTopBtn.classList.remove('back_to_top-show');
                    }
                }
            })

            $(function () {
                // при нажатии на кнопку scrollup
                $('.scrollup').click(function () {
                    // переместиться в верхнюю часть страницы
                    $("html, body").animate({
                        scrollTop: 0
                    }, 1000);
                })
            })
            // при прокрутке окна (window)
            $(window).scroll(function () {
                // если пользователь прокрутил страницу более чем на 200px
                if ($(this).scrollTop() > 200) {
                    // то сделать кнопку scrollup видимой
                    $('.scrollup').fadeIn();
                }
                // иначе скрыть кнопку scrollup
                else {
                    $('.scrollup').fadeOut();
                }
            });
            function disp(form) {
                if (form.style.display == "none") {
                    form.style.display = "block";
                } else {
                    form.style.display = "none";
                    $.ajax({
                        'type': 'POST',
                        'url': 'skript.php'
                    });
                }
            }
            function app() {
                return {
                    wysiwyg: null,
                    init: function(el) {
                        // Get el
                        this.wysiwyg = el;
                        // Add CSS
                        this.wysiwyg.contentDocument.querySelector('head').innerHTML += `<style>
                        *, ::after, ::before {box-sizing: border-box;}
                        :root {tab-size: 4;}
                        html {line-height: 1.15;text-size-adjust: 100%;}
                        body {margin: 0px; padding: 1rem 0.5rem;}
                        body {font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";}
                        </style>`;
                        this.wysiwyg.contentDocument.body.innerHTML += `
                        <h1>Hello World!</h1>
                        <p>Welcome to the pure AlpineJS and Tailwind WYSIWYG.</p>
                        `;
                        // Make editable
                        this.wysiwyg.contentDocument.designMode = "on";
                    },
                    format: function(cmd, param) {
                        this.wysiwyg.contentDocument.execCommand(cmd, !1, param||null)
                    }
                }
            }
            window.onload = function () {
                document.body.classList.add('loaded');
              }