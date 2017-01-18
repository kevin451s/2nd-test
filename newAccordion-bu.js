$(document).ready(function() {
  // Variables for desktop design
  var navbr = $(".navbr");
  var navbar = $(".navbar");
  var fit_content = $(".fit-content");
  var care_content = $(".care-content");
  var materials_content = $(".materials-content");
  var navbar_fit_button = $(".fit-navbar");
  var navbar_care_button = $(".care-navbar");
  var navbar_materials_button = $(".materials-navbar");
  // Variables for responsive design
  var accordion_icon = $(".accordion-icon");
  var phone_navbar = $(".phone-navbar");
  var accordion_icon_fit = $("#accordion-icon-fit");
  var accordion_icon_care = $("#accordion-icon-care");
  var accordion_icon_materials = $("#accordion-icon-materials");

  // navbar_fit_button.on("click", function() {
  //   fit_content.toggleClass("hidden")
  //   navbar_fit_button.toggleClass("responsive")
  //   accordion_icon_fit.html("-");
  //   navbar_fit_button.toggleClass('navbar__button--active')
  //
  //   if (phone_navbar.hasClass("responsive")) {
  //         accordion_icon.html("-");
  //     } else {
  //         accordion_icon.html("+");
  //     }
  //
  //   navbar_care_button.removeClass('navbar__button--active')
  //   navbar_materials_button.removeClass('navbar__button--active')
  //
  //
  //   accordion_icon_care.html("+");
  //   accordion_icon_materials.html("+");
  //   navbar_care_button.removeClass("responsive")
  //   navbar_materials_button.removeClass("responsive")
  //   care_content.addClass("hidden")
  //   materials_content.addClass("hidden")
  // })
  // navbar_care_button.on("click", function() {
  //   care_content.toggleClass("hidden")
  //   navbar_care_button.toggleClass("responsive")
  //   accordion_icon_care.html("-");
  //   navbar_care_button.toggleClass('navbar__button--active')
  //
  //
  //   if (phone_navbar.hasClass("responsive")) {
  //         accordion_icon.html("-");
  //     } else {
  //         accordion_icon.html("+");
  //     }
  //
  //   navbar_fit_button.removeClass('navbar__button--active')
  //   navbar_materials_button.removeClass('navbar__button--active')
  //
  //
  //   accordion_icon_materials.html("+");
  //   accordion_icon_fit.html("+");
  //   navbar_fit_button.removeClass("responsive")
  //   navbar_materials_button.removeClass("responsive")
  //   fit_content.addClass("hidden")
  //   materials_content.addClass("hidden")
  // })
  // navbar_materials_button.on("click", function() {
  //   materials_content.toggleClass("hidden")
  //   navbar_materials_button.toggleClass("responsive")
  //   accordion_icon_materials.html("-");
  //   navbar_materials_button.toggleClass('navbar__button--active')
  //
  //
  //   if (phone_navbar.hasClass("responsive")) {
  //         accordion_icon.html("-");
  //     } else {
  //         accordion_icon.html("+");
  //     }
  //
  //   navbar_fit_button.removeClass('navbar__button--active')
  //   navbar_care_button.removeClass('navbar__button--active')
  //
  //
  //   accordion_icon_care.html("+");
  //   accordion_icon_fit.html("+");
  //   navbar_fit_button.removeClass("responsive")
  //   navbar_care_button.removeClass("responsive")
  //   care_content.addClass("hidden")
  //   fit_content.addClass("hidden")
  // })







  $('button').on("click", function() {
    if($(this).hasClass("fit-navbar")) {
      if(fit_content.hasClass("hidden")) {
        fit_content.removeClass("hidden")
        // Highlights Active Tab
        navbar_fit_button.addClass("navbar__button--active");

        accordion_icon_fit.html("-")

        // Removes Active Tab
        navbar_materials_button.removeClass("navbar__button--active");
        navbar_care_button.removeClass("navbar__button--active");

        // Hides Content Divs
        care_content.addClass("hidden");
        materials_content.addClass("hidden");

        // Adds Plus
        accordion_icon_care.html("+")
        accordion_icon_materials.html("+")

      } else {
        fit_content.addClass("hidden");
        navbar_fit_button.removeClass("navbar__button--active");
        accordion_icon_fit.html("+")
      }
    } else if ($(this).hasClass("care-navbar")) {
      if(care_content.hasClass("hidden")) {
        care_content.removeClass("hidden")
        // Highlights Active Tab
        navbar_care_button.addClass("navbar__button--active");

        accordion_icon_care.html("-")

        // Removes Active Tab
        navbar_materials_button.removeClass("navbar__button--active ");
        navbar_fit_button.removeClass("navbar__button--active ");

        // Hides Content Divs
        fit_content.addClass("hidden");
        materials_content.addClass("hidden");

        // Adds Plus
        accordion_icon_fit.html("+")
        accordion_icon_materials.html("+")
      } else {
        care_content.addClass("hidden");
        navbar_care_button.removeClass("navbar__button--active");
        accordion_icon_care.html("+")
      }
    } else if ($(this).hasClass("materials-navbar")) {
      if(materials_content.hasClass("hidden")) {
        materials_content.removeClass("hidden")
        // Highlights Active Tab
        navbar_materials_button.addClass("navbar__button--active");

        accordion_icon_materials.html("-")

        // Removes Active Tab
        navbar_care_button.removeClass("navbar__button--active ");
        navbar_fit_button.removeClass("navbar__button--active ");

        // Hides Content Divs
        fit_content.addClass("hidden");
        care_content.addClass("hidden");

        // Adds Plus
        accordion_icon_care.html("+")
        accordion_icon_fit.html("+")
      } else {
        materials_content.addClass("hidden");
        navbar_materials_button.removeClass("navbar__button--active");
        accordion_icon_materials.html("+")
      }
    }


  })










})
