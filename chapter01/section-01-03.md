# 第一个 Angular 2 Web 应用
## 初识 TypeScript
现在我们创建第一个 TypeScript 文件。在同样的文件夹中创建一个新的文件取名 app.ts 内容如下：

*注意 TypeScript 文件的后缀为 .ts，但问题在于浏览器无法识别 TypeScript 文件。我们通过讲 .ts 编译成 .js 文件来解决这个问题*

code/first_app/angular2-reddit-base/app.ts

```
import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

@Component({
	selector: 'hello-world',
	template: `
		<div>
		Hello world
		</div>
		`
})
class HelloWorld {
}

bootstrap(HelloWorld);
```

这段代码第一次看起来非常难，但是不要担心。我们将一行一行的解读它。

TypeScript 是一种基于类型的 JavaScript，为了能够在浏览器中使用 Angular，我们需要告诉 TypeScript 编译器在什么地方找到文件。应用声明了具体文件的路径。（如果你还不理解，请将这几行代码拷贝过去，不要担心。我们将会吃一些解释为什么需要这么做。）

`import` 指令表示我们的代码需要使用哪些模块。这里我们导入了两个模块：Component 和 bootstrap。

我们导入 Component 模块来源于 ”@angular/core“。”@angular/core“ 这部分代码告诉程序在哪里去找到这些依赖。

类似的，我们导入 bootstrap 模块来源于 “@angular/platform-browser-dynamic”。

注意 import 指令的格式为：`import { things } from wherever`。`{ things }` 的部分我们把它叫做**解构**。解构是 ES6 的一个功能，我们会在下一个章节中讲到。

这里的 import 并不像 Java 中的 import 或者 Ruby 中的 require：在这里它会将其它模块的依赖拉取下来成为可用的依赖。（todo 感觉怪怪的）

### 创建一个模块
Angular 2 的最大的一个功能就是模块（component）。

在我们的 Angular 程序中我们通过 HTML 标记来实现我们的交互。但是浏览器只说认识的内置标签，例如：`<select>`、`<form>`或`<video>`这些标签都是浏览器定义好的功能。但是我们如何让浏览器识别新的标签呢？要是我们想让`<weather>`标签显示天气或者想让 `<login>`标签显示登录框又该如何做呢？

这就是组件背后的意义：我们让浏览器认识更多的新标签让它具有更多的功能。

*如果你有 Angular 1 的经验，那么组件就好比新版本的指令*

让我们来创建第一个组件。当我们完成了这个组件，那么我们就可以在 HTML 中使用这个标签了：

```
<hello-world></hello-world>
```

我们如何创建一个新的模块呢？一个基本的模块需要两个部分：

* 模块的注解
* 模块定义的类

“Let’s take these one at a time”(???)

如果你刚刚开始使用 JavaScript 编程，那么接下来你会感到有一些怪异：

```
@Component({
	//...
})
```

怎么回事？如果你使用过后端的 Java 程序，它看起来有点像注解。

注解就像你代码中的元数据（描述数据的数据）。当我们使用`@Component`在 HelloWorld 类上，我们就将 HelloWorld 作为了一个组件。

如果我们想通过`<hello-world>`标签来使用这个组件，我们需要对这个`@Component`设置一个`hello-world`选择器。

```
@Component({
	selector: 'hello-world'
})
```

如果你熟悉 CSS 选择器、XPath 或者 jQuery 选择器，你会知道有很多方式来设置选择器。Angular 增加了它自己特殊的选择器，我们将在后面讲到。现在只需要知道我们定义了一个新的标签。

选择器属性表示哪个 DOM 元素这个组件会使用。如果我们在`<hello-world></hello-world>`标签中有一个模版，它将会被编译到这个 Component 类中。

### 增加模版
我们可以通过`template`属性给`@Component`增加膜版。

```
@Component({
	selector: 'hello-world',
	template: `
		<div>
			Hello world
		</div>
		`
})
```

注意我们将模版定义在两个引号之间（``` `...` ```）。这是 ES6 中的一个新功能，允许我们使用多行的字符串。采用双引号来让我们更佳容易的将多行字符串模版编写到代码中去。

*我们真的需要将模版放入到代码中去吗？答案是肯定的。长久以来我们都一直认为应该让代码和模版解耦。但是这对于某些团队或者项目更佳容易增加管理成本，因为你会在更多的文件从切换。*

*就个人而言，如果我的模版要比一个页面的内容更加少，我更宁愿让模版和代码放在一起。当我能够同时看到业务逻辑和视图时会让人更加容易理解它们之间的交互*

*将视图放到代码中的最大的缺点在于，现在很多编辑器还不支持这种语法高亮。我们希望将有更多的编辑器支持模版中的 HTML 语法高亮*

### 引导程序
代码的最后一行`bootstrap(HelloWorld);`会运行程序。第一个参数表示程序的主模块就是我们的 HelloWorld 模块。

一旦程序被启动，HelloWOrld 模块将被渲染在 index.html 的`<hello-world></hello-world>`部分。让我们试一下！

### 加载程序
运行我们的应用程序，我们需要做两件事情：

* 告诉 HTML 文档导入我们的 app 文件
* 我们需要使用`<hello-world>`模块

添加以下代码到 body 的部分：

```
<!doctype html>
<html>

<head>
    <title>Angular 2 - Hello World</title>
    <script src="node_modules/es6-shim/es6-shim.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <!-- Stylesheet -->
    <link rel="stylesheet" type="text/css" href="resources/vendor/semantic.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
    <script src="systemjs.config.js"></script>
    <script>
    	System.import('app.js').then(null, console.error.bind(console));
    </script>
    <hello-world></hello-world>
</body>

</html>
```

我们增加了两个 script 标签来配置我们依赖的模块，System.js：

* 我们加载 systemjs.config.js 这个文件告诉 System.js 如何加载类库和文件。详细内容现在并不重要。
* 我们导入 app.js 文件

最重要的代码如下：

```
System.import('app.js')
```

它告诉 System.js 我们要加载 app.js 作为程序的入口。现在有一个问题在于：我们现在根本还没有 app.js 文件！（我们的文件是 app.ts，是一个 TypeScript 文件。）




