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


var watchExample = new Vue({
	el: '#watch-example',
	data: {
		question: '',
		answer: 'I cannot give you an answer until you ask a question!'
	},
	watch: {
		// 如果 `question` 发生改变，这个函数就会运行
		question: function(newQuestion, oldQuestion) {
			this.answer = 'Waiting for you to stop typing...'
			this.debouncedGetAnswer();
		}
	},
	created: function () {
		// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
		// 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
		// AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
		// `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
		// 请参考：https://lodash.com/docs#debounce
		this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
	},
	methods: {
		getAnswer: function () {
			if (this.question.indexOf('?') === -1) {
				this.answer = 'Questions usually contain a question mark. ;-)'
				return;
			}
			this.answer = 'Thinking...';
			var vm = this;
			axios.get('https://yesno.wtf/api')
			.then(function (response) {
				vm.answer = _.capitalize(response.data.answer);
			})
			.catch(function (error) {
				vm.answer = 'Error! Could not reach the API. ' + error;
			})
		}
	}
});