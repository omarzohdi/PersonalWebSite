//////////////////////////////////////////////////////////////////////////
/////////////// youtube API - Load last video in channel /////////////////
//////////////////////////////////////////////////////////////////////////
 function loadJSON(callback) 
 {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");

    xobj.open('GET', 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCbH-KaxN81UiWPJVAGHN2Jw&maxResults=5&key=AIzaSyDqp56l16_1W_2NB4Dg0fzLVwk-pFcrafs',
     true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () 
    {
      if (xobj.readyState == 4 && xobj.status == "200") 
      {
        callback(xobj.responseText);
      }
      
    };
    console.log(xobj);
    xobj.send(null);  
 }

loadJSON(function (response) 
{
	var data = JSON.parse(response);

    var i = 0;

	var type = data.items[i].id.kind;
	while (type != "youtube#video") //this could be a problem// No videos in the last 5 items.
	{
		type = data.items[++i].id.kind;
	}

	var videoURL = data.items[i].id.videoId;
	var thumbURL = data.items[i].snippet.thumbnails.high.url;

	var newvidurl = "https://www.youtube.com/embed/"+ videoURL +"?enablejsapi=1&rel=0&autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&disablekb=1&playlist="+ videoURL;
	document.getElementById("youtube").setAttribute("src", newvidurl);

	var tag = document.createElement('script');
	tag.id = 'iframe-demo';
	tag.src = 'https://www.youtube.com/iframe_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}); 

var player;
function onYouTubeIframeAPIReady() 
{
	player = new YT.Player('youtube', {
		events: {
		'onReady': onPlayerReady,
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event)
{
	event.target.playVideo();
	player.mute();
}

//////////////////////////////////////////////////////////////////////////
/////////////// instafee.js - Load instagram feed.////////////////////////
//////////////////////////////////////////////////////////////////////////
var feed = new Instafeed({
    get: 'user',
    limit: 1,
    userId: '35724427',
    resolution: 'low_resolution',
    accessToken: '35724427.1677ed0.fd0e5ae2469741a3b99f1d898a459913',
    template: '<a href="{{link}}"><img class="centermargin insta" src="{{image}}" /></a>'
});
feed.run();
