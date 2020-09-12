(function(){function a(c){}var b={};
jQuery(document).ready(function(){if($(".mainNav").length>0){$(".header__columns-container-column:eq(1) > div").prepend($(".hamBurger"))
}$(".mainNav .container .navbar-element .navbar-nav").append("<li class='search-btn hidden-xs'><a class='trig-search'><small class='fas fa-search'></small></a></li>");
$(".trig-search").on("click",function(){$(".header__strip .header-search-element").addClass("active");
return false
});
$(".header__strip .header-search-element").append("<div class='trig-close'><span class='fas fa-times'></span></div>");
$(".trig-close").on("click",function(){$(".header__strip .header-search-element").removeClass("active");
return false
});
$("body").on("click",function(c){var d=$(".header__strip .header-search-element");
if(!d.is(c.target)&&d.has(c.target).length===0){d.removeClass("active")
}});
$("body").append("<div class='scrolltop'><div class='scroll icon'></div></div>");
$(".scrolltop").hide();
$(".scroll").click(function(){$("html,body").animate({scrollTop:0},"1000");
return false
});
$(window).scroll(function(){if($(this).scrollTop()>300){$(".scrolltop:hidden").stop(true,true).fadeIn()
}else{$(".scrolltop").stop(true,true).fadeOut()
}});
b.document=true
});
b.all=setInterval(function(){if(!b.bootstrap&&$().collapse){b.bootstrap=$
}if(!b.mascot&&window.mascot){b.mascot=true
}if(b.bootstrap&&b.document&&b.mascot){clearInterval(b.all);
a(b.bootstrap)
}},10)
})();