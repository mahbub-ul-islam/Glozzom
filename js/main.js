//=============================================
//=            Section comment block          =
//=============================================

//=====  End of Section comment block  ======


//=============================================
//=            router configure block          =
//=============================================
const router = {
    baseUrl: "http://127.0.0.1:5500/",
    backend: "",
    partials: {
        home: "/template/home.html",
        about: "/template/about.html",
        services: "/template/services.html",
        blog: "/template/blog.html",
        contact: "/template/contact.html",
    },
    api: {

    },
}


let controller = (_url, _method, _data, _container="body", _clearContainer=true) => {
    if (_container [0] != "#") {
        _container = "#" + _container;
    }

    $.ajax({
        url: _url,
        method: _method,
        data: _data,
        success: (res) => {
            if (_clearContainer) {
                $(_container).empty();
            }
            $(_container).append(res);
        },
        error: (res) => {
            console.error(res)
        }
    })
}
//=====  End of router configure block  ======



//=============================================
//=            navbar block          =
//=============================================
// navbar active
$( '#mainNav .navbar-nav a' ).on( 'click', function () {
	$( '#mainNav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
	// $( '#mainNav .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	// $( this ).parent( 'a' ).addClass( 'active' );
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


//=====  End of navbar block  ======


//=============================================
//=            carousel block          =
//=============================================

// $('.carousel').carousel({
//     interval: 1000,
//     pause: 'hover'
// })


// $(document).ready(function() {
//     $('.carousel').carousel({
//         interval: 120
//     })
// });


//=====  End of carousel block  ======




//=============================================
//=            video modal comment block          =
//=============================================

// Video Play
// $(function () {
//     // Auto play modal video
//     $(".video").click(function () {
//         var theModal = $(this).data("target"),
//             videoSRC = $(this).attr("data-video"),
//             videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
//         $(theModal + ' iframe').attr('src', videoSRCauto);
//         $(theModal + ' button.close').click(function () {
//             $(theModal + ' iframe').attr('src', videoSRC);
//         });
//     });
// });

//=====  End of Section comment block  ======



// ekko-lightbox script
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });







// about page slick carousel

    // $('.slider').slick({
    //     infinite: true,
    //     slideToShow: 1,
    //     slideToScroll: 1
    // });
