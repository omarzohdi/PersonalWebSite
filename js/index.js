
$(document).ready(function() 
{
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $(".Projects").css("display", "none");
    $(".Navbarbtm").css("display","none");

	$("#id_projects").on("click", OpenProjectsPage);
	$("#id_awards").on("click", OpenAwardPage);
	$("#id_back").on("click", OpenHomePage);
	$('#id_top').on("click", BacktoTop);

	var ishome = true;
	var cimgw;
	
	function ClickAnimationCheck(isAnimating)
	{
		if (isAnimating)
		{
			$("#id_projects").off("click", OpenProjectsPage);
			$("#id_back").off("click", OpenHomePage);
			$('#id_top').off("click", BacktoTop);
			$("#id_awards").off("click", OpenAwardPage);
		}
		else
		{
			$("#id_projects").on("click", OpenProjectsPage);
			$("#id_back").on("click", OpenHomePage);			
			$('#id_top').on("click", BacktoTop);
			$("#id_awards").on("click", OpenAwardPage);
		}
	}
	
	function BacktoTop()
	{
		$('body').animate({
          scrollTop: 0
        }, 1000);
	}

	function OpenAwardPage()
	{
	//	ClickAnimationCheck(true);

	}

	function OpenHomePage()
	{
		ClickAnimationCheck(true);
		var cimg = $(".CoverImage");

		cimg.removeClass("translatecoverimage");
		$(".Navbarbtm").fadeToggle(1000, function(){
			$(".Social").fadeToggle(1000);	
		});

		$(".Projects").fadeToggle(1000, function(){
			$(".Description").fadeToggle(1000);
			cimg.animate({width: cimgw, marginTop: '0px'}, 1000 );
			ClickAnimationCheck(false);
		});

		ishome = true;	
	}

	function OpenProjectsPage ()
	{
		if (ishome)
		{
			ClickAnimationCheck(true);
			var cimg = $(".CoverImage");
			cimgw = $(".CoverImage").width();

			cimg.animate({ width: '100px', marginTop: '-40px'}, 1000);
			cimg.addClass("translatecoverimage");	

			$(".Social").fadeToggle(1000, function(){
				$(".Navbarbtm").fadeToggle(1000);	
			});

			$(".Description").fadeToggle(1000, function() {
				$(".Projects").fadeToggle(1000);
				ClickAnimationCheck(false);
			});

			ishome = false;
		}
		else
		{
			OpenHomePage();
		}
	}
});

if (screen.width <= 699) 
{
  changeCSS("css/mobile.css", 0);
}

function changeCSS(cssFile, cssLinkIndex) 
{
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

