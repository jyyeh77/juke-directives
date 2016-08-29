'use strict'

juke.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			doubleClick: '&',
		},
		link: function(scope, element){

			element.on('dblclick', (function(){
				// console.log(element)
				// console.log('scope.$parent:' , scope.$parent);
				// console.log('scope.$parent.$parent:' , scope.$parent.$parent)
				scope.doubleClick();
			}))
		}
	}
})