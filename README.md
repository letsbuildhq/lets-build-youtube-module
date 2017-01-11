# lets-build-youtube-module

## Install

install via `npm install lets-build-youtube-module`

Use by calling 

## Options
- `youtubeId` youtube id of video
= `autoplay` option to start playing video as soon as it's loaded; default `false`
- `onReady` callback when video is loaded
- `onPause` callback function when video is paused
- `onPlay` callback function when video resumes playing after pause
- `onEnded` callback function when video ends

## Events
- `startVideo` start the video
- `playPauseVideo` pause video if playing; play video if paused
- `stopVideo` stop the video
- `getVideoState` get a numeral value indicating the video state:
	`-1` unstarted
	`0` ended
	`1` playing
	`2` paused
	`3` buffering
	`5` video cued

## Example

### HTML
```
<div id="youtube-wduZHtRbSkY"></div>
```

### Javascript
This will load a video into an iframe and insert it into the DOM in place of an element with `id="youtube-wduZHtRbSkY"`

```
var options = {
	youtubeId: 'wduZHtRbSkY',
	onReady: function() {
		console.log("The video is loaded");
	}
}
var player = new YTLoader.embed(options);

//assuming JQuery, bind events like so
$('.a-player-button').click(player.playPause);

```

## TODO
- include options to set Iframe params, e.g., showing video player controls
