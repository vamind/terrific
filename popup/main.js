document.addEventListener("click", (event) => {

    event.stopPropagation();

    function register() {
        let email = document.getElementById('js-email').value;
        let password = document.getElementById('js-password').value;
        document.getElementById('js-logreg').classList.add('d-none');
        document.getElementById('js-registration-sent').classList.remove('d-none');
    }

    function login() {
        let email = document.getElementById('js-email').value;
        let password = document.getElementById('js-password').value;
        document.getElementById('js-logreg').classList.add('d-none');
        document.getElementById('js-list').classList.remove('d-none');
        browser.browserAction.setIcon({path: {"48":'../icons/basic-red-48.png'}});
    }

    function no() {
        document.getElementById('js-ratings').classList.add('d-none');
        document.getElementById('js-reason-block').classList.remove('d-none');
    }

    function yes() {
        document.getElementById('js-ratings').classList.add('d-none');
        document.getElementById('js-rating-list').innerHTML = '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start list-group-item-success"> <div class="d-flex w-100 justify-content-between"><h5 class="mb-1">mine</h5><small>now</small></div></a>' + document.getElementById('js-rating-list').innerHTML;
    }

    function back() {
        document.getElementById('js-ratings').classList.remove('d-none');
        document.getElementById('js-reason-block').classList.add('d-none');
    }

    function noSend() {
        let reason = document.getElementById('js-reason').value;
        document.getElementById('js-reason-block').classList.add('d-none');
        document.getElementById('js-rating-list').innerHTML = '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start list-group-item-danger"> <div class="d-flex w-100 justify-content-between"> <h5 class="mb-1">mine</h5> <small>now</small> </div> <small>'+reason+'</small></a>' + document.getElementById('js-rating-list').innerHTML;
    }

    if (event.target.classList.contains("js-login")) {
        login();
    } else if (event.target.classList.contains("js-register")) {
        register();
    } else if (event.target.classList.contains("js-yes")) {
        yes();
    } else if (event.target.classList.contains("js-no")) {
        no();
    } else if (event.target.classList.contains("js-back")) {
        back();
    } else if (event.target.classList.contains("js-no-send")) {
        noSend();
    }
});