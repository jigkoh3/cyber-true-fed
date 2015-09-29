(function () {

	if (typeof String.prototype.trim !== 'function') {
		String.prototype.trim = function() {
			return this.replace(/^\s+|\s+$/g, '');
		}
	}

	window.utils = {

		isEmpty: function (val) {
			return typeof val === 'undefined' || val === null || (val.toString && !val.toString().trim().length);
		},

		getObject: function (obj, where) {
			if (!obj) return obj;

			if (utils.isEmpty(where)) return obj;

			// Expect "where" as a dot notation name, so split "where" with a dot
			var keys = where.split('.');

			var key = keys[0];
			if (utils.isEmpty(obj[key])) return obj[key];

			var value = obj[key];
			for (var i = 1; i < keys.length; i++) {
				key = keys[i];
				value = value[key];

				if (utils.isEmpty(value)) return value;
			}

			return value;
		},

		createParamGet: function (data, keys) {
			if (!keys || !keys.length) {
				keys = Object.keys(data);
			}

			var pairs = [];
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				var value = utils.isEmpty(data[key]) ? '' : data[key];

				pairs.push(key + '=' + value);
			}

			return pairs.join('&');
		}

	};

})();