(function(){
	'use strict';
	angular
	.module('cellularApp',['ngMaterial','ngMessages']);
})();

(function(){
	'use strict';
	angular
	.module('cellularApp')
	.component('firstComponent',{
		templateUrl : 'html/firstcomponent.html',
		controller : 'cellularCtrl'
	});
})();

(function(){
	'use strict';
	angular
	.module('cellularApp')
	.component('secondComponent',{
		templateUrl : 'html/secondcomponent.html',
		controller : 'cellularCtrl'
	});
})();


(function(){
	'use strict';
	angular
	.module('cellularApp')
	.component('thirdComponent',{
		templateUrl : 'html/thirdcomponent.html',
		controller : 'cellularCtrl'
	});
})();

(function(){
	'use strict';
	angular
	.module('cellularApp')
	.component('fourthComponent',{
		templateUrl : 'html/fourthcomponent.html',
		controller : 'cellularCtrl'
	});
})();

(function(){
	'use strict';
	angular
	.module('cellularApp')
	.component('fifthComponent',{
		templateUrl : 'html/fifthcomponent.html',
		controller : 'cellularCtrl'
	});
})();

(function(){
	'use strict';
	angular
	.module('cellularApp')
	.component('sixthComponent',{
		templateUrl : 'html/sixthcomponent.html',
		controller : 'cellularCtrl'
	});
})();

(function(){
	'use strict';
	angular
	.module('cellularApp')
	.component('seventhComponent',{
		templateUrl : 'html/seventhcomponent.html',
		controller : 'cellularCtrl'
	});
})();



(function(){
	'use strict';
	angular
	.module('cellularApp')
	.controller('cellularCtrl',[function(){
		var controllerData = {};


		return controllerData;
	}]);
})();