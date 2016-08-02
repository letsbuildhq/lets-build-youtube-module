# lets-build-youtube-module

## Quickstart

$(‘div.container’).LBYoutuber();

## Options
- backgroundSize: cover (default), contain
- aspectRatio: number (default: 16/9)
- autoplay: boolean (default: true)
- muted: boolean (default: false)
- controls: boolean (default: true); allows user play/pause
- playPauseButton: element selector that plays/pauses the video, e.g. (‘.play-button’), default is the containing element; must be wrapped inside the containing element
- onVideoStart: function
- onVideoPlay: function
- onVideoPause: function
- onVideoFinish: function

## Methods
- destroy: destroys the LBYoutuber instance
- loadNew: loads a new video inside an existing instance
