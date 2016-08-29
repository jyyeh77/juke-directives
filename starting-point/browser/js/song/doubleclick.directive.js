'use strict'

juke.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			doubleClick: '&',
		},
		link: function(scope, element){
			element.on('dblclick', (function(){
				scope.doubleClick();
			}))
		}
	}
})