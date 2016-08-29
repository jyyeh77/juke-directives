'use strict'

juke.directive('songList', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/song/songlist.directive.template.html',
		scope: {
			data: "="
		},
		transclude: true,
		link: function(scope){
			scope.songs = scope.data;
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			scope.next = PlayerFactory.next;
			scope.previous = PlayerFactory.previous;
			scope.isPlaying = PlayerFactory.isPlaying;
			scope.toggle = function (song) {
				if (song !== PlayerFactory.getCurrentSong()) {
				  PlayerFactory.start(song, $scope.album.songs);
				} else if ( PlayerFactory.isPlaying() ) {
				  PlayerFactory.pause();
				} else {
				  PlayerFactory.resume();
				}
			};

			scope.getPercent = function () {
				return PlayerFactory.getProgress() * 100;
			};

			scope.handleProgressClick = function (evt) {
				PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
			};
		}
	}
})