$(document).ready(function()
{
    $("body").css("display", "none");
    $("body").fadeIn(2000);

    var currpage = ".Description";
    var cimg = $(".CoverImage");
  	var cimgw = $(".CoverImage").width();

    var screenwidth = $(window).width();
    var orientation = window.orientation;

    var PrjCallback =  function(event){ SwitchPage(".Projects") };
    var LnkCallback =  function(event){ SwitchPage(".Links") };
    var DesCallback = function(event){ SwitchPage(".Description") };

    $("#id_projects").on("click", PrjCallback );
  	$("#id_links").on("click", LnkCallback );
  	$("#id_back").on("click", DesCallback );
  	$('#id_top').on("click", BacktoTop);

  $(window).resize(function(event)
  {
      if($(window).width() != screenwidth && orientation == window.orientation)
      {
        //Update Original Width of CoverImage based on size of page//
        var sitew = cimg.parent().width();
        cimgw = (25 * sitew) / 100;

        if (currpage == ".Description")
          cimg.animate({width: cimgw}, 1000 );
      }
  });

  function ClickAnimationCheck(isAnimating)
	{
		if (isAnimating)
		{
      $("#id_projects").off("click", PrjCallback );
    	$("#id_links").off("click", LnkCallback );
    	$("#id_back").off("click", DesCallback );
    	$('#id_top').off("click", BacktoTop);
		}
		else
		{
      $("#id_projects").on("click", PrjCallback );
    	$("#id_links").on("click", LnkCallback );
    	$("#id_back").on("click", DesCallback );
    	$('#id_top').on("click", BacktoTop);
		}
	}

	function BacktoTop() { $('body').animate({ scrollTop: 0 }, 1000); }

  function TransformCoverImage( shrink )
  {
    if (shrink)
      cimg.animate({ width: '100px', marginTop: '-40px'}, 1000)
     cimg.toggleClass("translatecoverimage");
  }

  function ToggleNavigation(from, to)
  {
    $(from).fadeToggle(1000, function(){ $(to).fadeToggle(1000); });
  }
  function ToggleMainArea(from, to, backhome)
  {
    $(from).fadeToggle(1000, function(){
        $(to).fadeToggle(1000);
        if (backhome){ cimg.animate({width: cimgw, marginTop: '0px'}, 1000 ); }
          ClickAnimationCheck(false);
      });
  }

  function SwitchPage(nextpage)
  {
      ClickAnimationCheck(true);

      if (currpage == nextpage)
        nextpage = ".Description";

      if (currpage == ".Description")
      {
        TransformCoverImage(true);
        ToggleNavigation(".Social", ".bottomnav");
      }

      if (nextpage == ".Description")
      {
          ToggleMainArea(currpage,nextpage, true);
          TransformCoverImage(false);
          ToggleNavigation(".bottomnav",".Social");
      }
      else
        ToggleMainArea(currpage, nextpage,false);

      currpage = nextpage;
  }
});
