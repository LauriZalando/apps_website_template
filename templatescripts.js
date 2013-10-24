// zalAppName defines the app or tool name.
// zalDomain defines the base domain to the landing page.
// zalSH defines the syntax highlighter, can be separated by commas, for example "Java,Python".
// galId defines the Google Analytics ID (DEPRECATED!!!)
var zalAppName, zalDomain, zalSH, gaId;

// Cached DOM variables.
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

    // Append CSS files.
    head.appendChild(templateCss);
    head.appendChild(siteCss);

    // Load scripts.js file and check for syntax highlighting.
    $.getScript("scripts.js");
}

// Append CSS and JS away!
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