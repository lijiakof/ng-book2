# 第一个 Angular 2 Web 应用
## 运行 APP
### 将 TypeScript 程序编译成 .js
我们的程序是用 TypeScrit 写的，我们用 app.ts 文件。下一步是将它编译成 JavaScript，这样浏览器才能识别它。

为了做到这一点，我们运行 TypeScript 编译器命令`tsc`:

```
tsc
```

如果你能过即时得到一个没有错误信息的反馈，这表明这个编译已经起作用了，并且我们将在同样的文件夹下生成 app.js 文件。

```
ls app.js
# app.js should exist
```

问题：
或许你会发现这个消息：`tsc: command not found.`代表`tsc`还没有安装或者没有在`PATH` 中设置。试一下进入到`node_modules`文件夹的`tsc`二进制文件中：

```
./node_modules/.bin/tsc
```

在这个例子中你不需要给 TypeScript 编译器传递任何参数，因为它会在当前文件夹下寻找 .ts 文件。如果你没有发现 app.js 文件，首先请确保你在 app.ts 所在的文件夹。

当里运行 tsc 时可能会产生这样的错误：`app.ts(2,1): error TS2304: Cannot find name or app.ts(12,1): error TS1068: Unexpected token.`

这个例子中编译器提示了错误原因在哪。`app.ts(2,1):`表示错误的文件为 app.ts 的第2行第1个字符。你可以在网上搜索这些错误代号，通常可以找到有帮助的解释来修复这个问题。

更多问题：
或许里还会发现这个消息：`error TS2307: Cannot find module '@angular/platform-browser-dynamic'`。在运行 tsc 时去掉文件名的参数就能简单的解决这个问题。

我们展开这个问题（如果你之前了解过 tsc 可以跳过这部分）：tsc 有一些隐含的功能：如果你不带任何参数运行 tsc 会发生如下事情：

* 查找当前文件夹（如果你设置了 -p 后可以是某个项目文件夹）的 tsconfig.json 文件
* 编译这个文件夹下的所有 .ts 文件

然而，如果你指定的文件（例如：运行 tsc app.ts）来运行 tsc，tsc 没有找到 tsconfig.json 这样你需要设置一些特殊的选项来让它正确的通过编译。

TypeScript 需要输入文件知道代码的类型。这本书中我们将讲到很多类型和输入文件。但是现在，只需要了解`@angular/platform-browser-dynamic`这些文件被加载，因为我们已经在 tsconfig.json 中指定了它，如果你指定了一个特定的文件给 tsc 来编译，它会找不到`@angular/platform-browser-dynamic`除非你指定了更多的命令行标记。

### 使用 npm
如果你的 tsc 命令运行成功，你也可以通过 npm 来编译文件。在示例代码中的`package.json`
文件定义了一些快捷的方式来帮助我们编译。

试一下运行以下命令：

```
npm run tsc    // 编译一次就跳出
npm run tsc:w  // 当文件有改变就自动编译
```

### 将程序变为服务
我们还需要一步就可以测试我们的应用程序：我们需要运行本地的 web 服务来运行我们的程序。

如果你做过`npm install`这个命令，那么你就已经在本地安装了一个 web 服务。运行如下命令来开启它：

```
npm run serve
```

它会自动打开浏览器并进入到 [http://localhost:8080](http://localhost:8080)。

为什么需要一个 web 服务？如果你开发了一个 javascript 程序，你肯定知道可以通过双击 `index.html`文件在浏览器中打开运行。但是我们用了 SystemJS 这样做是不能正常运行的。

当你直接打开`index.html`文件，浏览器会去使用`file:///`URL。由于安全限制，当使用`file:///`URL 时浏览器不会允许 AJAX 请求（这是一个好事情，如果不是这样的话 javascript 可以读取系统的文件来做一些恶意的事情）。

相反我们把它允许在本地 web 服务中，即使它是基于文件系统。这的确方便我们测试，但是请不要把它部署到生产环境。

如果你在主机名（localhost）或者端口号（8080）上有问题，可以通过简单的设置 `package.json`文件。例如：如果你无法访问`localhost`，可以尝试修改主机名为`127.0.0.1`。

如果都正常工作的话，你将看到如下页面：

如果打开应用程序还是存在问题，你可以检查以下项：

* 确保 app.js 文件是通过 TypeScript 编译器 tsc 来创建的
* 确保你的 web 服务指向 app.js 文件所在的文件夹
* 确保你的 index.html 文件和我们的示例代码一样
* 在 Chrome 中打开页面，右键选择"审查元素"，然后点击“Console”标签来检查错误
* 如果还是有问题，[请在 Gitter 中告诉我们](https://gitter.im/ng-book/ng-book)

### 每次修改自动编译
在我们的程序代码中会有很多修改。我们通过更加高级的 --watch ，来代替每次修改去运行`tsc`命令。--watch 会监听 TypeScript 的每次改动，并且一旦修改就会自动编译成 JavaScript：

```
tsc --watch
message TS6042: Compilation complete. Watching for file changes.
```

事实上，我们通常会把它们创建成一个快捷方式：

* 文件改变就自动编译
* 刷新开发环境

```
npm run go
```

现在当你修改了代码，它会自动的在浏览器中反应出最终的修改。





