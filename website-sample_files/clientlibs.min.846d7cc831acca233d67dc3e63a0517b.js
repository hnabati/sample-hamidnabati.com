(function(){var c=0;
var a=0;
function b(){c=$(".custom-header").height();
a=$(".informa-bar").height()||0
}$(document).ready(function(){var d=$("html");
var e=$("#body_container_wrapper");
if(!e||e.length===0){e=$("body");
console.warn("Sticky header: body is used because the content is container missing")
}$(window).scroll(function(){if($(this).scrollTop()>a){d.addClass("sticky-header");
var f=!!($(".custom-header").css("position")==="fixed");
if(f){e.css("margin-top",c)
}}else{d.removeClass("sticky-header");
e.css("margin-top",0)
}});
b();
$(window).resize(b);
$(".top-nav .mainNav .navbar .container .navbar-element .navbar-nav .mainMenuTopnav a.has-submenu").click(function(h){var g=h.target||{};
var f=(g.nodeName||g.tagName||"").toLowerCase();
if(f!=="small"){h.preventDefault();
h.stopPropagation()
}})
})
})();