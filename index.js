$('.splash-nav-toggle').click(e => {
    const sibling = $(e.target).siblings('.nav-dropdown');
    const isHidden = sibling.hasClass('nav-dropdown-hidden');
    // Hide all dropdowns
    $('.nav-dropdown').addClass('nav-dropdown-hidden');

    if (isHidden) {
        // Show the one we selected if it was hidden before
        sibling.removeClass('nav-dropdown-hidden');
    }
});
$('.hamburger').click(e => {
    $('.nav-desktop-grid').toggleClass('nav-desktop-grid-closed');
});