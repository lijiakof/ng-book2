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


### 增加模版
### 启动程序
### 加载程序


