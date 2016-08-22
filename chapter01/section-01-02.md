# 第一个 Angular 2 Web 应用
## 准备开始
### TypeScript
使用 TypeScript 前，我们需要安装 Node.js。有很多方式可以安装 Node.js，更多细节请查看 Node.js 官网：[https://nodejs.org/download/](https://nodejs.org/download/)。

*我必须使用 TypeScript 吗？并不是一定要使用 TypeScript 来开发 Angular 应用，但是你很可能会选择使用 TypeScript。因为 ng2 没有 ES5 API，但 Angular 2 又是采用 TypeScript 编写。我们在这本书中的例子采用 TypeScript，因为它让 Angular 2 工作起来更佳容易。即便如此，TypeScript 并不是必要的*

当你安装好了 Node.js 后，下一步就是安装 TypeScript。请保证你安装的是 1.7 或以上版本。可以使用以下命令来安装：

```
$ npm install -g 'typescript@1.9.0-dev.20160409'
```

*nmp 是 Node.js 的一部分。如果在你的系统中没有 npm，请确认你采用的 Node.js 安装程序中包含它*

*Windows 用户：整本书将采用 Linux/Mac 风格的命令行。我们强力推荐你安装 [Cygwin](https://www.cygwin.com/)，这样你就可以使用这本书中的命令了*

### 项目例子
现在你的开发环境就准备好了，让我们开始开发我们的第一个 Angualr 2 应用程序吧！

下载本书相关代码包，打开并解压文件包。在命令行中通过 `cd` 命令进入到 `first_app/angular2-reddit-base` 文件夹：

```
$ cd first_app/angular2-reddit-base
```

*如果你不熟悉 `cd` 命令，它类似于改变目录。如果你在 Mac 上开发，请尝试如下步骤：*

* 打开命令行程序 /Applications/Utilities/Terminal.app
* 输入 `cd` 命令
* 在 Finder 中，拖拽 first_app/angular2-reddit-base 文件夹到命令行窗口
* 输入你要进入的文件夹，现在你可以进行下一个步骤了！

第一次使用 npm 安装依赖项：

```
$ npm install
```

在项目所在文件夹的跟节点创建一个新 `index.html` 文件，文件内容如下：

```
<!doctype html>
<html>
	<head>
		<title>Angular 2 - Simple Reddit</title>
	</head>
	<body>
	</body>
</html>
```

你的 angular2-reddit-base 文件夹下的文件结构应该如下：

```
 1 .
 2 |-- README.md          // 帮助文档
 3 |-- index.html         // 首页文件
 4 |-- index-full.html    // Sample index file
 5 |-- node_modules/      // 安装的依赖模块
 6 |-- package.json       // npm 配置文件
 7 |-- resources/         // 资源文件，例如图片等静态资源
 8 |-- styles.css         // 样式文件
 9 |-- tsconfig.json      // compiler configuration
10 `-- tslint.json        // code-style guidelines
```

**Angular 2 本身又一个 javascript 文件**。所以我们需要在 index.html 中增加一个 script 标签来引用它。不过我们还需要引用一些 Angular 自身的依赖：

### Angular 的依赖项

*你并不一定需要为了使用 Angular 2 而去完全深入的理解它的依赖项，但是你需要引用它们。如果你对这些依赖项不感兴趣可以跳过这一节，但是要保证这些 script 标签已经被拷贝到你的文件中*

要运行 Angular 2，我们依赖如下四个库：

* es6-shim
* zone.js
* reflect-metadata
* SystemJS

请将它们放到 HTML 的 `<head>` 中去

```
	<script src="node_modules/es6-shim/es6-shim.js"></script>
	<script src="node_modules/zone.js/dist/zone.js"></script>
	<script src="node_modules/reflect-metadata/Reflect.js"></script>
	<script src="node_modules/systemjs/dist/system.src.js"></script>
```

todo...

### 所有的依赖需要被加载
现在我们增加了所有的依赖，我们的 index.html 看起来应该是这样的：

```
<!doctype html>
<html>
	<head>
		<title>Angular 2 - Simple Reddit</title>
		<script src="node_modules/es6-shim/es6-shim.js"></script>
		<script src="node_modules/zone.js/dist/zone.js"></script>
		<script src="node_modules/reflect-metadata/Reflect.js"></script>
		<script src="node_modules/systemjs/dist/system.src.js"></script>
	</head>
	<body>
	</body>
</html>
```

### 引用 CSS
同样我们要增加一些 CSS 样式，否者我们的应用将完全没有样式。让我们将两个样式表引入：

```
<!doctype html>
<html>
	<head>
		<title>Angular 2 - Simple Reddit</title>
		<script src="node_modules/es6-shim/es6-shim.js"></script>
		<script src="node_modules/zone.js/dist/zone.js"></script>
		<script src="node_modules/reflect-metadata/Reflect.js"></script>
		<script src="node_modules/systemjs/dist/system.src.js"></script>
		
		<!-- Stylesheet -->
		<link rel="stylesheet" type="text/css" href="resources/vendor/semantic.min.css">
		<link rel="stylesheet" type="text/css" href="styles.css"> 
	</head>
	<body>
	</body>
</html>
```

*这个项目将采用 (Semantic-UI)[http://semantic-ui.com/] 来帮助我们编写样式。Semantic-UI 是一个类似于 Foundation 或者 Twitter Bootstrap 的 CSS 框架。我们已经将它放在下载的示例代码中，你只需要增加 link 标签引入就行了*





