# 第一个 Angular 2 Web 应用
## 初识 TypeScript
现在我们创建第一个 TypeScript 文件。在同样的文件夹中创建一个新的文件取名 app.ts 内容如下：

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

### 创建一个 Component
### 增加模版
### 启动程序
### 加载程序


