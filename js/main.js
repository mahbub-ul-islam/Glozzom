//=============================================
//=            Section comment block          =
//=============================================

//=====  End of Section comment block  ======


//=============================================
//=            router configure block          =
//=============================================
const router = {
    baseUrl: "https://mahbub-ul-islam.github.io/Glozzom/",
    backend: "",
    partials: {
        home: "template/home.html",
        about: "template/about.html",
        services: "template/services.html",
        blog: "template/blog.html",
        contact: "template/contact.html",
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


















