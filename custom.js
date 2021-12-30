
$(document).ready(function() {
    $('.mega-nav-link').on('click', function(e) {
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
        }

        $(this).addClass('hover-active')
    });

    // reset on hide
    $('#navbarContent').on('show.bs.dropdown', function() {
        for (level = 0; level <= 2; level++) {
            megaMenuLevelToHideSelector = '*[data-mega-menu-level="' + level + '"]';
            $(megaMenuLevelToHideSelector).find('.mega-nav-link').removeClass('hover-active')
            if (level > 0) {
                $(megaMenuLevelToHideSelector).hide();
            }
        }
    });
    // persistent hover color when selected
});
