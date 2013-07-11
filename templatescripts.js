var zalAppName, zalDomain, gaId;

$(document).ready(function()
{
    loadTemplateMenu();
    loadTemplateFooter();

    var $window = $(window),
        $body = $("body");
        $wrapper = $("#wrapper");

    // Make sure if fits on smaller screens.
    if ($window.innerWidth() < $body.innerWidth() - 1)
    {
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

    var jqueryJs = document.createElement("script");
    jqueryJs.src= "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";

    var siteJs = document.createElement("script");
    siteJs.src= "scripts.js";

    var gaJs = document.createElement("script");
    gaJs.innerHTML = '' +
        '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){' +
        '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),' +
        'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)' +
        '})(window,document,"script","//www.google-analytics.com/analytics.js","ga");' +
        'ga("create", "' + zalDomain + '", "' + gaId + '");' +
        'ga("send", "pageview");';

    head.appendChild(templateCss);
    head.appendChild(siteCss);
    head.appendChild(jqueryJs);
    head.appendChild(siteJs);
    head.appendChild(gaJs);
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