# Vibe Hoops · 篮球技术动作沉浸式学习

高颜值的篮球动作学习与知识库系统，专注于新手动作教学（无摄像头检测、无计时器）。

## 功能

- **左侧导航**：按「控球基础 / 投篮定型 / 突破脚步」分类，点击切换动作
- **右侧详情**：标准动作 GIF 区、视频教程嵌入、步骤拆解、常见错误
- **学习进度**：标记「已掌握」或「加入今日复习」，状态保存在 LocalStorage

## 内置动作

| 动作 | 分类 | 难度 |
|------|------|------|
| 库里投篮手型定型 | 投篮定型 | 进阶 |
| 艾弗森 Crossover 变向 | 控球基础 | 高阶 |
| 欧洲步上篮 | 突破脚步 | 入门 |

## 快速开始

**方式一：直接打开**

双击根目录的 `index.html`，在浏览器中即可使用。

**方式二：本地服务器**

```bash
npm install
npm start
```

浏览器将自动打开 `http://127.0.0.1:3000`。

## 技术栈

- 单文件 `index.html`
- [Tailwind CSS](https://tailwindcss.com/)（CDN）
- 原生 JavaScript（ES6+），本地 JSON 数据驱动渲染

## 仓库

https://github.com/samuelsun620-create/basketball-training

## License

MIT
