/**
 * 定义了一个叫 todo-item 的组件
 * 它有一个叫做 todo 的属性
 * 
 * template 定义了这个组件的 html 视图
 */
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
});


var app7 = new Vue({
	el: "#app-7",
	data: {
		groceryList: [
			{ id: 0, text: '蔬菜' },
			{ id: 1, text: '奶酪' },
			{ id: 2, text: '随便其它什么人吃的东西' }
		]
	}
});

