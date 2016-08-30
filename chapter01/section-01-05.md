# 第一个 Angular 2 Web 应用
## 数组的使用
现在我们可以让一个名字说“Hello”，但是我们如何让一组名字说“Hello”呢？

如果我们之前使用过 Angular 1，你很可能会用`ng-repeat`指令。在 Angular 2中，相似的指令叫做`NgFor`（我们用`*ngFor`来标记它，我们马上会讲到）。它的语法稍微有一些不同，但是它们有相同的目的：*重复展示合集对象*。

让我们看一下 app.ts 代码：

```
import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

@Component({
	selector: 'hello-world',
	template: `
		<ul>
			<li *ngFor="let name of nams">Hello {{name}}</li>
		</ul>
		`
})
class HelloWorld {
	name: string[];
	constructor() {
		this.name = ['Ari', 'Carlos', 'Felipe', 'Nate']
	}
}

bootstrap(HelloWorld);
```

第一个改变在我的 HelloWorld 类中有新的`sting[]`属性。这个语法的意思是 names 的类型是一个数组字符串。另外一个方式是这样的`Array<string>`。

另外一个改变是我们在构造函数中设置了`this.name`的值为：`['Ari', 'Carlos', 'Felipe', 'Nate']`。

接下来的改变在我们的模版。现在我们用一个`ul`和一个`li`标签，并且增加了新属性`*ngFor="let name of names"`。`*`和`#`符号可能是一个巨大的变化，让我们各个击破：

`*ngFor`这个属性的意思是我们要用`NgFor`指令。你可以认为`NgFor`类似于`for`循环；它的意思是通过一个集合来创建每一个 DOM 元素。

属性的值：`"let name of names"`。`names`是 HelloWorld 对象中的数组属性。`let name`叫做引用。当我们使用`let name of names`的意思是：通过`names`循环每一个元素并且归属于每一个`name`变量。

`NgFor`指令将会渲染`names`数组的每一个`li`标签，声明一个本地变量`name`来重复的保留当前的项。这个新变量将会被`Hello {{name}}`片段代替。

我们没有必要调用引用变量`name`。也可以这么写：

```
<li *ngFor="let foobar of names">Hello {{ foobar }}</li>
```

但是如果是相反的呢？小测验：如果这样写会发生什么呢：

```
<li *ngFor="let name of foobar">Hello {{ name }}</li>
```

这将会产生一个错误，因为`foobar`不是模块的一个属性。

`NgFor`指令是通过附属于这个元素的`*ngFor`来重当前元素的。也就是说，我们把它放在`li`标签上，而不是`ul`标签上，因为我们像重复的是 li 元素而不是 ul 元素。

如果你具有冒险精神，你可以通过阅读 Angular 核心团队写的组件相关的源码。你可以在这里找到[NgFor 指令的源码](https://github.com/angular/angular/blob/master/modules/@angular/common/src/directives/ng_for.ts)。

当你刷新页面，你可以看到我们有一个通过数组渲染出来的 list。


