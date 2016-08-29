'use strict'

juke.directive('jkPlayer', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/player/player.template.html',
		link: function(scope){
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			scope.next = PlayerFactory.next;
			scope.previous = PlayerFactory.previous;
			scope.isPlaying = PlayerFactory.isPlaying;
			scope.toggle = function () {
				if ( PlayerFactory.isPlaying() ) {
					scope.currentSong = PlayerFactory.getCurrentSong();
					PlayerFactory.pause();
				}
				else PlayerFactory.resume();
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