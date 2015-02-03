var Lib = null;

(function () {
	Lib = function () {
		return;
	};
	
	Lib.prototype = {
		
		/**
		 * extend（継承）
		 */
		extend: function (base, child) {
			//親
			child.superclass = base;
			
			//プロトタイプを拡張
			child.prototype = _.extend({}, base, child);
			
			return child.prototype;
		}
		
	};
	

})();


