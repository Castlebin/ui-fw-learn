var obj = {
	foo: 'bar'
};

// 使用 Object.freeze(obj)之后,obj变为一个只读对象,它的属性值不会再被改变
// 这是一条 JavaScript 知识
Object.freeze(obj);

var app = new Vue({
	el: '#app',
	data: obj
});

// 使用 $ 可以取到 Vue 实例的 属性 和 方法
//　使用　$data 可以取到 Vue 实例中的 data 属性,同理 $el 取到 el 属性
console.log(app.$data === obj);  // 输出 true
console.log(app.$el == document.getElementById("app")); // 输出 true

var ex = new Vue({
	el: '#example',
	data: {
		message: 'Hello Vue!'
	},
	created: function() {
		console.log('Vue Object has been created!');
	}
});
// $watch 绑定一个监听器
ex.$watch('message', function(newValue, oldValue) {
	console.log('The value of foo changed, oldValue=' + oldValue 
		+ ', newValue=' + newValue);
});

