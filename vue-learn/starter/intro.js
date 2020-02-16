var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
	el: "#app-3",
	data: {
		seen: true
	}
});

var app4 = new Vue({
	el: "#app-4",
	data: {
		todos: [
			"Love", 
			"Peace",
			"Sunshine"
		]
	}
});

var app5 = new Vue({
	el: "#app-5",
	data: {
		message: "Hello Vue!"
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('');
		}
	}
});