/* Let's Build Youtube Loader 0.0.1
*/

exports.init = function() {

	window.YTLoader = {

		youTubeIframeAPIReady: false,
		onReady: function() {}, 
		embed: function(options, onReady) {
			// if API not ready, set function to re-call
			// `embed` when it is ready
			if (!YTLoader.youTubeIframeAPIReady) {
				YTLoader.onReady = function() {
					onReady();
				}
				return;
			}
			this.videoPlayer = new YT.Player('ytloader-' + options.youtubeId, {
				videoId: options.youtubeId,
				playerVars: {
					rel: 0,
					controls: 0,
					showinfo: 0,
					modestbranding: 1,
					enablejsapi: 1
				},
				events: {
					'onReady': function() {
						if (options.autoPlay) {
							this.playVideo();
						}
						if (options.onReady) {
							options.onReady();
						}
					},
					'onStateChange': function() {
						this.onStateChange()
					}
				}
			}.bind(this));

			this.onStateChange = function() {
				var state = this.videoPlayer.getPlayerState();
		        if (state === 0) { // video ended
		        	if (options.onEnded) {
		        		options.onEnded();
		        	}
		        }
		        if (state === 1) {
		        	if (options.onPlay) {
		        		options.onPlay();
		        	}
		        }
		        if (state === 2) {
		        	if (options.onPause) {
		        		options.onPause();
		        	}
		        }
			}.bind(this);

			this.playVideo = function(e) {
				this.videoPlayer.seekTo(0);
				this.videoPlayer.playVideo();
			}.bind(this);

			this.playPauseVideo = function(e) {
			    if (this.videoPlayer.getPlayerState() === 1) {
			    	this.videoPlayer.pauseVideo();
			    } else {
			    	this.videoPlayer.playVideo();
			    }
			}.bind(this);

			this.stopVideo = function(e) {
				this.videoPlayer.pauseVideo();
			}.bind(this);

			this.getVideoState = function(e) {
				return this.videoPlayer.getPlayerState();
			}.bind(this);

		}

	};

	// once youtube iframe API is loaded,
	// it will call this function
	window.onYouTubeIframeAPIReady = function() {
		YTLoader.youTubeIframeAPIReady = true;
		YTLoader.onReady();
	}

	// load the youtube iframe API
	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

}