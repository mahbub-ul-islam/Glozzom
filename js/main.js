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
//=           Owl carousel block          =
//=============================================

// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//         //    items
//         //    Type: Number
//         //    Default: 3
//         //    The number of items you want to see on the screen.
//         items: 1,
        
//         //    loop
//         //    Type: Boolean
//         //    Default: false
//         //    Infinity loop. Duplicate last and first items to get loop illusion.
//         loop:true,
        
//         //    nav
//         //    Type: Boolean
//         //    Default: false
//         //    Show next/prev buttons.
//         nav:true,

//         //    dots
//         //    Type: Boolean
//         //    Default: true
//         //    Show dots navigation.
//         dots:true,

//         //    autoplay
//         //    Type: Boolean
//         //    Default: false
//         //    Autoplay.
//         autoplay:true,

//         //    autoplaySpeed
//         //    Type: Number/Boolean
//         //    Default: false
//         //    autoplay speed.
//         autoplaySpeed:1500,

//         //    smartSpeed
//         //    Type: Number
//         //    Default: 250
//         //    Speed Calculate. More info to come..
//         smartSpeed:1500,

//         //    autoplayHoverPause
//         //    Type: Boolean
//         //    Default: false
//         //    Pause on mouse hover.
//         autoplayHoverPause:true
//     })
// })


//=====  End of carousel block  ======













