var Manager = null;
(function () {

	Manager = function (config) {
		config = config || {};
		return this;
	};

	Manager.prototype = {

		/**
		 * ゲームステージ(レイヤー)
		 */
		gameStage: null,
		
		
		/**
		 * スコア
		 */
		gameScore: 0,
		getScore: function () {
			return this.gameScore;
		},
		
		setScore: function (score) {
			this.gameScore = score;
			return;
		},
		
		/**
		 * 資金（キャラ購入用）
		 */
		gameMoney: 0,
		getFunds: function () {
			return cc.sys.localStorage.getItem('Funds');
		},
		
		setFunds: function (funds) {
			cc.sys.localStorage.setItem('Funds', funds);
			return;
		},
		
		/**
		 * 資金パラメーターを削除
		 */
		removeFunds: function () {
			cc.sys.localStorage.removeItem('Funds');
			return;
		},
		
		//war funds.
		/**
		 * 軍資金
		 */
		getWarfunds: function () {
			return cc.sys.localStorage.getItem('warfunds');
		},

		setWarfunds: function (money) {
			cc.sys.localStorage.setItem('warfunds', money);
			return;
		},

		/**
		 * 軍資金パラメーターを削除
		 */
		removeWarfunds: function () {
			cc.sys.localStorage.removeItem('warfunds');
			return;
		}

	};
})();