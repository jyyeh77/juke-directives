'use strict'

juke.directive('albumList', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/album/templates/albums.directive.template.html',
		scope: {
			data: "="
		},
		link: function(scope){
			scope.albums = scope.data;
		}
	}
})