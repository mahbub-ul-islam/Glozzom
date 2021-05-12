
const router = {
    baseUrl: "http://127.0.0.1:5500/",
    backend: "",
    partials: {
        home: "/template/home.html",
        about: "/template/about.html",
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

// navbar active
$( '#mainNav .navbar-nav a' ).on( 'click', function () {
	$( '#mainNav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
	$( '#mainNav .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	$( this ).parent( 'a' ).addClass( 'active' );
});

