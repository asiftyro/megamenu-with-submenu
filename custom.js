
let prevMenuLevel = -1;
$(document).ready(function () {

    $('#megamneu1').on('mouseover', function (e) {


        // $('.dropdown').addClass('show');
        $('.dropdown-menu').addClass('show');

    });



    $(window).click(function(e) {

           $('.dropdown-menu').removeClass("show"); 
           e.preventDefault();
           
     });
      $('.dropdown-menu').click(function(event){
          event.stopPropagation();
      });


    // $('.megamenu-area').on('mouseleave', function (e) {

    //     e.stopPropagation();
    //     console.log("Oho");
    //     $('.dropdown').removeClass('show');
    //     $('.dropdown-menu').removeClass('show');
    // });
    // document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

    // 	everyitem.addEventListener('mouseover', function(e){

    // 		let el_link = this.querySelector('a[data-bs-toggle]');

    // 		if(el_link != null){
    // 			let nextEl = el_link.nextElementSibling;
    // 			el_link.classList.add('show');
    // 			nextEl.classList.add('show');
    // 		}

    // 	});
    // 	everyitem.addEventListener('mouseleave', function(e){
    // 		let el_link = this.querySelector('a[data-bs-toggle]');

    // 		if(el_link != null){
    // 			let nextEl = el_link.nextElementSibling;
    // 			el_link.classList.remove('show');
    // 			nextEl.classList.remove('show');
    // 		}


    // 	})
    // });







    $('.mega-nav-link').on('mouseenter', function (e) {
        e.stopPropagation();

        megaMenuLevel = $(this).parent().parent().data('mega-menu-level');
        // remove hover selected 

        megaMenuLevelToHideSelector = '*[data-mega-menu-level="' + megaMenuLevel + '"]';
        $(megaMenuLevelToHideSelector).find('.mega-nav-link').removeClass('hover-active')

        for (level = megaMenuLevel + 1; level <= 2; level++) {
            if (level == 0) continue;
            megaMenuLevelToHideSelector = '*[data-mega-menu-level="' + level + '"]';
            $(megaMenuLevelToHideSelector).hide();
            $(megaMenuLevelToHideSelector).find('.mega-nav-link').removeClass('hover-active')

        }

        megaTargetSubMenu = $(this).data('mega-target-sub-menu');
        megaTargetSubMenuSelector = '*[data-mega-menu-name="' + megaTargetSubMenu + '"]';
        if (megaTargetSubMenu != "") {
            $(megaTargetSubMenuSelector).show();
            // $(megaTargetSubMenuSelector).show( "slide", {direction: "left" }, 2000 );
        }

        $(this).addClass('hover-active');

        // console.log('enter', prevMenuLevel, megaMenuLevel);
        // prevMenuLevel = megaMenuLevel;

    });

    // reset on hide
    $('#navbarContent').on('show.bs.dropdown', function () {
        for (level = 0; level <= 2; level++) {
            megaMenuLevelToHideSelector = '*[data-mega-menu-level="' + level + '"]';
            $(megaMenuLevelToHideSelector).find('.mega-nav-link').removeClass('hover-active')
            if (level > 0) {
                $(megaMenuLevelToHideSelector).hide();
            }
        }
    });


    window.onmouseover = function (e) {
        if (typeof e.target.className != "string")
            text = "";
        else
            text = e.target.className ? e.target.className : "";

        if (text.includes("megamenu-area") == false) {
            for (level = 0; level <= 2; level++) {
                megaMenuLevelToHideSelector = '*[data-mega-menu-level="' + level + '"]';
                $(megaMenuLevelToHideSelector).find('.mega-nav-link').removeClass('hover-active')
                if (level > 0) {
                    $(megaMenuLevelToHideSelector).hide();
                }
            }
        }

    };


});
