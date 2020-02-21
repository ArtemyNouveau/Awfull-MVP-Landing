$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal();
});
// https://stackoverflow.com/questions/38564156/get-the-element-closer-to-the-middle-of-the-screen-in-jquery/38564630

var scrollStop = function (callback) {

    if (!callback || typeof callback !== 'function') return;

    var isScrolling;

    window.addEventListener('scroll', function (event) {

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {

            // Run the callback
            callback();

        }, 66);

    }, false);

};

scrollStop(function () {
    setTimeout(scrollTo, 1000);
});

function scrollTo() {
    const scrollTop = $(document).scrollTop() + ($(window).height() / 5);
    const positions = [];

    // push each of the items we want to check against to an array with their position and selector
    $('.Landing-Page-View').each(function () {
        $(this).removeClass("active");
        positions.push({position: $(this).position().top, element: $(this)});
    });

    let getClosest = closest(positions, scrollTop);
    getClosest.element.addClass("active"); // the element closest to the middle of the screen
    console.log(getClosest.position);
    if (getClosest.length < 1) return;
    $('html, body').scrollTop(getClosest.position)
    // $('html, body').stop().animate({scrollTop: getClosest.position}, 500);
}

function closest(array, number) {
    let num = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        if (Math.abs(number - array[i].position) < Math.abs(number - array[num].position)) {
            num = i;
        }
    }
    return array[num];
}

// $(function () {
    $(window).scroll(function () {
        setTimeout(scrollTo, 2000);
    });
// });