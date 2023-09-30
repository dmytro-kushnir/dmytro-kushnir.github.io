/* ==============
 ========= js documentation =========

 template name: Blad Ai
 version: 1.0
 description: Blood Donation Activism & Campaign HTML Template
 author: CropTheme
 author url: https://themeforest.net/user/croptheme

    =========================

     01. data background
     ------------------------------------------------------
     02. animated hamburger icon
     ------------------------------------------------------
     03. position navbar on scroll
     ------------------------------------------------------
     04. search box toggle
     ------------------------------------------------------
     05. close search box
     ------------------------------------------------------
     06. open sidebar
     ------------------------------------------------------
     07. close sidebar
     ------------------------------------------------------
     08. on window resize
     ------------------------------------------------------
     09. open reply form
     ------------------------------------------------------
     10. scroll bottom to top
     
    =========================
============== */

(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        // Preloader
        //$(window).on('load', function() {
          //  $('.preloader').addClass('preloader-deactivate');
        //}) 

        // data background
        $("[data-background]").each(function () {
            $(this).css(
                "background-image",
                "url(" + $(this).attr("data-background") + ")"
            );
        });

        // animated hamburger icon
        $(".navbar-toggler").on("click", function () {
            $(this).toggleClass("toggle-active");
        });

        // position navbar on scroll
        var fixedTop = $(".header")
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                fixedTop.addClass("header-active animated fadeInDown");
                $(".hero, .banner").addClass("body-active");
            }
            else {
                fixedTop.removeClass("header-active animated fadeInDown");
                $(".hero, .banner").removeClass("body-active");
            }
        });

        // search box toggle
        $(".search-icon").click(function () {
            $(".search").slideDown();
        });

        // close search box
        $(".close").click(function () {
            $(".search").slideUp();
        });

        // open sidebar
        $(".open-sidebar").on("click", function () {
            $(this).toggleClass("toggle-active");
            $(".sidebar").addClass("sidebar-active");
        });

        // close sidebar
        $(".close-sidebar").on("click", function () {
            $(".sidebar").removeClass("sidebar-active");
            $(".open-sidebar").toggleClass("toggle-active");
        });

        // on window resize
        $(window).on("resize", function () {
            if ($(".dropdown-menu").hasClass("show")) {
                $(".dropdown-menu").removeClass("show");
                $(".dropdown-toggle").removeClass("show");
            }
            $(".navbar-toggler, .open-sidebar").removeClass("toggle-active");
            $(".navbar-collapse").removeClass("show");
            $(".select-language").removeClass("open");
            $(".sidebar").removeClass("sidebar-active");
            $(".search").slideUp();
        });

        $(document).mouseup(function (e) {
            if (!$('.open-sidebar').is(e.target) && !$('.sidebar').is(e.target) && $('.sidebar').has(e.target).length == 0) {
                $(".open-sidebar").removeClass("toggle-active");
                $(".sidebar").removeClass("sidebar-active");
            }
        });

        // open reply form
        $(".open-reply").on("click", function () {
            $(this).next(".reply-form").slideToggle();
        });

        // scroll bottom to top
        var ScrollTop = $(".scrollToTop");
        $(window).on("scroll", function () {
            if ($(this).scrollTop() < 300) {
                ScrollTop.removeClass("active");
            } else {
                ScrollTop.addClass("active");
            }
        });

        $(".scrollToTop").on("click", function () {
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                300
            );
            return false;
        });
    });
})(jQuery);