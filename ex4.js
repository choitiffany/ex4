$(function () {
    console.log('ready');


    //Planner
    $('#planner').hover(function () {
        console.log("hover over planner");
        $(this).attr('src', 'images/planner.png').animate({
            opacity: 1
        })
    }, function () { //second function
        $(this).attr('src', 'images/plannerOutline.png').animate({
            opacity: .7
        })
    });

    //sketchbook
    $('#sketchbook').hover(function () {
        console.log("hover over sketchbook");
        $(this).attr('src', 'images/sketchbook.png').animate({
            opacity: 1
        })
    }, function () { //second function
        $(this).attr('src', 'images/sketchbookOutline.png').animate({
            opacity: .7
        })
    });

    //wallet
    $('#wallet').hover(function () {
        console.log("hover over wallet");
        $(this).attr('src', 'images/wallet.png').animate({
            opacity: 1
        })
    }, function () { //second function
        $(this).attr('src', 'images/walletOutline.png').animate({
            opacity: .7
        })
    });

    //cheerios
    $('#cheerios').hover(function () {
        console.log("hover over cheerios");
        $(this).attr('src', 'images/cheerios.png').animate({
            opacity: 1
        })
    }, function () { //second function
        $(this).attr('src', 'images/cheeriosOutline.png').animate({
            opacity: .7
        })
    });

    //usb
    $('#usb').hover(function () {
        console.log("hover over usb");
        $(this).attr('src', 'images/usb.png').animate({
            opacity: 1
        })
    }, function () { //second function
        $(this).attr('src', 'images/usbOutline.png').animate({
            opacity: .7
        })
    });

    //slide toggle
    $('section#plannerText').hide();


    $('#planner').click(function () {
        $('section#plannerText').slideToggle(500);

    });

    $('section#sketchbookText').hide();


    $('#sketchbook').click(function () {
        $('section#sketchbookText').slideToggle(500);

    });

    $('section#walletText').hide();


    $('#wallet').click(function () {
        $('section#walletText').slideToggle(500);

    });
    $('section#cheeriosText').hide();


    $('#cheerios').click(function () {
        $('section#cheeriosText').slideToggle(500);

    });

    $('section#usbText').hide();


    $('#usb').click(function () {
        $('section#usbText').slideToggle(500);

    });


}); //end