# lets-build-youtube-module

## Install

install via `npm install lets-build-youtube-module`

Use by calling 

## Options
- `youtubeId` youtube id of video
- `onReady` callback when video is loaded
- `onPause` callback function when video is paused
- `onPlay` callback function when video resumes playing after pause
- `onEnded` callback function when video ends

## Events
- `start` start the video
- `playPause` pause video if playing; play video if paused
- `stop` stop the video

## Example


### HTML
```
<div id="video-wduZHtRbSkY"></div>
```

### Javascript
This will load a video into an iframe and insert it into the DOM in place of an element with `id="video-wduZHtRbSkY"`

```
var options = {
	youtubeId: 'wduZHtRbSkY',
	onReady: function() {
		console.log("The video is loaded");
	}
}
var player = new YTLoader.embed(options);

//assuming JQuery, bind events like so
$('someElement').click(player.playPause);

```

## TODO
- include options to set Iframe params, e.g., showing video player controls
