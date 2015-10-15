
$(document).ready(function()
{
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $(".Projects").css("display", "none");
    $(".Navbarbtm").css("display","none");

  	$("#id_projects").on("click", OpenProjectsPage);
  	$("#id_links").on("click", OpenlinksPage);
  	$("#id_back").on("click", OpenHomePage);
  	$('#id_top').on("click", BacktoTop);

  	var ishome = true;
  	var islink = false;
  	var isproject = false;

    var cimg = $(".CoverImage");
  	var cimgw = $(".CoverImage").width();

	function ClickAnimationCheck(isAnimating)
	{
		if (isAnimating)
		{
			$("#id_projects").off("click", OpenProjectsPage);
			$("#id_back").off("click", OpenHomePage);
			$('#id_top').off("click", BacktoTop);
			$("#id_links").off("click", OpenlinksPage);
		}
		else
		{
			$("#id_projects").on("click", OpenProjectsPage);
			$("#id_back").on("click", OpenHomePage);
			$('#id_top').on("click", BacktoTop);
			$("#id_links").on("click", OpenlinksPage);
		}
	}

	function BacktoTop()
	{
		$('body').animate({
          scrollTop: 0
        }, 1000);
	}

  function ShrinkCoverImage()
  {
    cimg.animate({ width: '100px', marginTop: '-40px'}, 1000);
    cimg.addClass("translatecoverimage");
  }

  function ToggleHomeNavigation()
  {
      $(".Social").fadeToggle(1000, function(){
        $(".Navbarbtm").fadeToggle(1000);
      });
  }
  function ToggleProjLinkNavigation()
  {
    $(".Navbarbtm").fadeToggle(1000, function(){
      $(".Social").fadeToggle(1000);
    });
  }

  function ToggleMainArea(from, to, backhome)
  {
    $(from).fadeToggle(1000, function(){
        $(to).fadeToggle(1000);
        if (backhome)
          { cimg.animate({width: cimgw, marginTop: '0px'}, 1000 );}
        ClickAnimationCheck(false);
      });
  }

	function OpenlinksPage()
	{
		if (ishome)
		{
			ClickAnimationCheck(true);
      ShrinkCoverImage();
      ToggleHomeNavigation();

      ToggleMainArea(".Description", ".Links",false);

			ishome = false;
			islink = true;
		}
		else if (isproject)
		{
			ClickAnimationCheck(true);

      ToggleMainArea(".Projects", ".Links",false);

			ishome = false;
			isproject = false;
			islink = true;
		}
		else if (islink)
		{
			OpenHomePage();
		}

	}

	function OpenHomePage()
	{

		if (isproject)
		{
			ClickAnimationCheck(true);

      ToggleMainArea(".Projects",".Description", true)

			cimg.removeClass("translatecoverimage");
			ToggleProjLinkNavigation();

			ishome = true;
			isproject = false;
		}
		else if (islink)
		{
			ClickAnimationCheck(true);

      ToggleMainArea(".Links", ".Description",true);

			cimg.removeClass("translatecoverimage");
      ToggleProjLinkNavigation();

			ishome = true;
			islink = false;
		}
	}

	function OpenProjectsPage ()
	{
		if (ishome)
		{
			ClickAnimationCheck(true);
			ShrinkCoverImage();
      ToggleHomeNavigation();
      ToggleMainArea(".Description", ".Projects",false);

			ishome = false;
			isproject = true;
			islink = false;
		}
		else if (islink)
		{
			ClickAnimationCheck(true);
			ToggleMainArea(".Links", ".Projects",false);

			ishome = false;
			isproject = true;
			islink = false;
		}
		else if (isproject)
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
