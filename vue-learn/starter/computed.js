var ex = new Vue({
	el: '#example',
	data: {
		message: 'Hello Vue!',
		firstName: 'Meimei',
		lastName: 'Han'
	},
	// computed 计算属性 (计算属性可以有缓存,而函数调用每次都会调用)
	// 控制台输出两次 method -> reverseMessage,
	// 而只输出一次 computed -> reverseMessage , 可见使用计算属性会有缓存
	computed: {
		reverseMessage: function() {
			console.log('computed -> reverseMessage');
			return this.message.split('').reverse().join('');
		},
		fullName: {
			// getter
			get: function() {
				return this.firstName + ' ' + this.lastName;
			},
			// setter
			set: function(newValue) {
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	},
	methods: {
		reverseMessageMethod: function() {
			console.log('method -> reverseMessage');
			return this.message.split('').reverse().join('');
		}
	}
});

// 执行 ex.fullName = 'Lei Li' 后, firstName 和 lastName 都会变掉

