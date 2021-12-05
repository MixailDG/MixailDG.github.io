document.body.onload = function (argument) {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if ( !preloader.classList.contains('done') ) {
            preloader.classList.add('done')
        }
    }, 1000);
}


