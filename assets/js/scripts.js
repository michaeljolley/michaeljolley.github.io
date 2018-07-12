jQuery(document).ready( function() {

    // Makes all videos responsive.
    $(".the-content").fitVids();

    // Shows the number of search results.
    jQuery('#search-input').on('focus', function() {
        jQuery('.show-results-count').addClass('active');
    });

    // Shows available sharing options.
    jQuery('.share').on('click', function() {
        $(this).addClass('active');
    });

    // Hides available sharing options and the number of search results.
    jQuery(document).on('click focus', function(e) {
        if (jQuery(e.target).closest('.share').length === 0 && jQuery(e.target).closest('#search-input').length === 0) {
            jQuery('.show-results-count').removeClass('active');
            jQuery('.results-container').hide();
            jQuery('.share').removeClass('active');
        }
    });

    // Automatically sets the first post image as a featured image on Facebook and Twitter.
    var firstImg = jQuery('.post.single').find('img:first-of-type');
    var firstImgSrc = firstImg.attr('src');
    if (typeof firstImgSrc !== 'undefined') {
        jQuery('meta[property="og:image"]').attr('content', firstImgSrc);
        jQuery('meta[name="twitter:image"]').attr('content', firstImgSrc);
    }

    // Fixed sidebar or not!
    var steveSidebar = jQuery('.user-profile');
    var steveSidebarPos = steveSidebar.offset().top;

    function fixedSidebar() {
        var scrollPos = jQuery(window).scrollTop();
        if (scrollPos >= steveSidebarPos) {
            steveSidebar.css({'top': scrollPos - 80});
        }
        else if (scrollPos === 0) {
            steveSidebar.css({'top': 0});
        }
    };

    fixedSidebar();

    jQuery(window).on('scroll', function () {
        fixedSidebar();
    });

    var viewportWidth = window.innerWidth;

    if (viewportWidth > 768 && steveSidebar.hasClass('fixed')) {
        fixedSidebar();
    }

    jQuery(window).on('resize', function() {
        viewportWidth = window.innerWidth;
        if (viewportWidth > 768 && steveSidebar.hasClass('fixed')) {
            fixedSidebar();
        }
    });

    function setupForm() {
        var status = document.getElementById('commentstatus')
        status.innerText = ''
        var requiredIds = [ 'message', 'email', 'name']
        var missing = requiredIds.filter(id => document.getElementById(id).value.length < 3)
        if (missing.length > 0) {
          status.innerText = 'Some required fields are missing - (' + missing.join(', ') + ')'
          return
        }
        var button = document.getElementById('commentbutton')
        if (button.innerText != 'Confirm comment') {
          button.innerText = 'Confirm comment'
          return
        }
        var form = document.getElementById('commentform')
        form.action = '{{ site.comments.receiver }}'
        button.innerText = 'Posting...'
        button.disabled = true
        var fields = document.getElementById('commentfields')                                         
        fields.disabled = true
        form.submit()
      }
});
