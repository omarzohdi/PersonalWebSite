
$(document).ready(function() {
        $("body").css("display", "none");
        $("body").fadeIn(2000);
});

if (screen.width <= 699) {
  changeCSS("css/mobile.css", 0);
}

function changeCSS(cssFile, cssLinkIndex) {
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
