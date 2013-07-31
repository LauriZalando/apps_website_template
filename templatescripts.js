var zalAppName, zalDomain, gaId;
var $window, $body, $wrapper;

$(document).ready(function()
{
    $window = $(window);
    $body = $("body");
    $wrapper = $("#wrapper");

    if ($window.innerWidth() < 1080) {
        $body.addClass("mobile");
    }

    // Load menu and footer.
    loadTemplateMenu();
    loadTemplateFooter();

    // Make sure if fits on smaller screens.
    if ($window.innerWidth() < $body.innerWidth() - 1) {
        $body.css("zoom", 0.75);
    }
});

// Append JS and CSS dependencies.
function appendCssAndJs() {
    var head = document.getElementsByTagName("head")[0];

    var templateCss = document.createElement("link");
    templateCss.rel = "stylesheet";
    templateCss.href = "template/templatestyles.css";

    var siteCss = document.createElement("link");
    siteCss.rel = "stylesheet";
    siteCss.href = "styles.css";

    $.getScript("scripts.js");

    head.appendChild(templateCss);
    head.appendChild(siteCss);
}

// Append straight away!
appendCssAndJs();

// Load top menu.
function loadTemplateMenu() {
    var callback = function() {
        var filename = location.pathname;

        while (filename.indexOf("/") >= 0) {
            filename = filename.substring(filename.indexOf("/") + 1);
        }

        if (!filename || filename === "" || filename === "/") {
            filename = "index";
        }

        $("#menu").find("." + filename.replace(".html", "")).addClass("active");
    };

    $("#menu-wrapper").load("menu.html", callback);
}

// Load footer.
function loadTemplateFooter() {
    $("#footer-wrapper").load("footer.html");
}