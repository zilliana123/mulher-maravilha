var username = localStorage.getItem("name");
var password = localStorage.getItem("pass");
var typedUsernameLI = $("#li-un");
var typedPasswordLI = $("#li-pw");
var typedUsernameSU = $("#su-un");
var typedEmailSU = $("#su-em");
var typedPasswordSU = $("#su-pw");
var typedConfPasswordSU = $("#su-cp");

function js() {
    if (username) {
        $(".login").css("border-bottom", "solid");
        $(".login").css("border-bottom-width", "3px");
        $(".login").css("border-bottom-color", "#C98A85");
        $(".sign-up").css("border-bottom", "none");

        $(".signup-main").css("display", "none");
        $(".login-main").css("display", "block");
    }
    else {
        $(".sign-up").css("border-bottom", "solid");
        $(".sign-up").css("border-bottom-width", "3px");
        $(".sign-up").css("border-bottom-color", "#C98A85");
        $(".login").css("border-bottom", "none");

        $(".login-main").css("display", "none");
        $(".signup-main").css("display", "block");

        $(".main-login").css("height", "420px");
    }
};

$(".sign-up").on("click", function() {
    $(".sign-up").css("border-bottom", "solid");
    $(".sign-up").css("border-bottom-width", "3px");
    $(".sign-up").css("border-bottom-color", "#C98A85");
    $(".login").css("border-bottom", "none");

    $(".login-main").css("display", "none");

    setTimeout( function() {
        $(".signup-main").css("display", "block");
    }, 500);

    $(".main-login").css("height", "420px");
});

$(".login").on("click", function() {
    $(".login").css("border-bottom", "solid");
    $(".login").css("border-bottom-width", "3px");
    $(".login").css("border-bottom-color", "#C98A85");
    $(".sign-up").css("border-bottom", "none");

    $(".signup-main").css("display", "none");

    setTimeout( function() {
        $(".login-main").css("display", "block");
    }, 500);

    $(".main-login").css("height", "280px");
});

function login() {
    $(".lisub").on("click", function() {
        if (typedUsernameLI.val() == username) {
            if (typedPasswordLI.val() == password) {
                window.location = "file:///home/zilliana/Documentos/estudos/projeto-mulher-maravilha/mulher-maravilha/index.html";
            }
            else if (typedPasswordLI.val() == "") {
                alert("Please enter a valid password");
            }
            else {
                alert("Incorrect password");
            }
        }
        else if (typedUsernameLI.val() == "") {
            alert("Please enter a valid username");
        }
        else {
            alert("Incorrect username");
        }
    });
};

function signup() {
    $(".susub").on("click", function() {
        if (typedUsernameSU.val() == "") {
            alert("Please enter a valid username");
        }
        else {
            if (typedEmailSU.val() == "") {
                alert("Please enter a valid email");
            }
            else {
                if (typedPasswordSU.val() == "") {
                    alert("Please enter a valid password");
                }
                else {
                    if (typedConfPasswordSU.val() == typedPasswordSU.val()) {
                        localStorage.setItem("name", typedUsernameSU.val());
                        localStorage.setItem("pass", typedPasswordSU.val());
                        window.location = "file:///home/zilliana/Documentos/estudos/projeto-mulher-maravilha/mulher-maravilha/index.html";
                    }
                    else {
                        alert("Passwords do not match");
                    }
                }
            }
        }
    });
};

js();
login();
signup();