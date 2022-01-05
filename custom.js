
let prevMenuLevel = -1;
$(document).ready(function () {

    // $('.mega-nav-link').on('mouseleave', function(e) {
    //     e.stopPropagation();
    //     megaMenuLevel = $(this).parent().parent().data('mega-menu-level');
    //     console.log('leave', prevMenuLevel, megaMenuLevel)
    //     prevMenuLevel = megaMenuLevel;

    // remove hover selected 

    // megaMenuLevelToHideSelector = '*[data-mega-menu-level="' + megaMenuLevel + '"]';
    // $(megaMenuLevelToHideSelector).find('.mega-nav-link').removeClass('hover-active')

    // for (level = megaMenuLevel + 1; level <= 2; level++) {
    //     if (level == 0) continue;
    //     megaMenuLevelToHideSelector = '*[data-mega-menu-level="' + level + '"]';
    //     $(megaMenuLevelToHideSelector).hide();
    //     $(megaMenuLevelToHideSelector).find('.mega-nav-link').removeClass('hover-active')

    // }
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

            // $('#megamneu1').dropdown('hide')
        }
    };


    // $('.mega-sub-menu').show();
    // $('#mobile-navigation-close-button').on('click', function(){
    //     $('#navbarContent').dropdown('hide')
    // });
    // persistent hover color when selected
    // TODO
});
