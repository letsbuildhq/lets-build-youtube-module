exports.init = function() {
	
	window.YTLoader = {

		youTubeIframeAPIReady: false,
		onReady: function() {}, 

		embed: function(options) {
			// if API not ready, set function to re-call
			// `youtubeEmbed` when it is ready
			if (!YTLoader.youTubeIframeAPIReady) {
				YTLoader.onReady = function() {
					YTLoader.embed(options);
				}
				return;
			}
			var self = this;
			this.videoPlayer = new YT.Player('youtube-' + options.youtubeId, {
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
						self.playVideo();
						if (options.onReady) {
							options.onReady();
						}
					},
					'onStateChange': function() {
						self.onStateChange()
					}
				}
			});

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

			this.startVideo = function(e) {
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
	tag.src = "http://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

}