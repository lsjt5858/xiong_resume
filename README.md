# 个人技能展示网站

基于 React 18 + Vite 6 + TypeScript 的个人技能与作品集展示站点，内置一套 Radix UI 封装组件（Button、Dialog、Slider 等）与通用样式，包含模块：Header、Skills、Projects、Knowledge、Footer。

## 环境要求
- Node.js ≥ 18
- npm（或兼容的包管理器）

## 快速开始
1. 安装依赖
   - npm install
2. 启动开发环境
   - npm run dev
   - 本地预览地址：http://localhost:3000/
3. 生产构建
   - npm run build
   - 产物输出目录：build/

如需修改开发端口，可在 vite.config.ts 中调整 server.port。

## 技术栈与目录结构
- React 18 + TypeScript
- Vite 6（见 vite.config.ts）
- 原子化风格类名与自定义主题变量
  - 全局样式入口：src/index.css
  - 主题与基础样式：src/styles/globals.css
- UI 封装组件（基于 Radix）：src/components/ui/

目录（节选）
- src/main.tsx：入口挂载
- src/App.tsx：页面骨架（Header、Skills、Projects、Knowledge、Footer）
- src/components/
  - Header.tsx：顶部信息、下载简历、联系我弹窗
  - Skills.tsx：技能卡片与编辑模式（新增/删除/修改、滑块调整熟练度）
  - Projects.tsx：项目卡片展示（可扩展）
  - Knowledge.tsx：文章卡片与“阅读全文”外链
  - ui/：Button、Dialog、Slider、Card、Badge 等基础 UI 组件
- src/styles/globals.css：颜色与主题变量

## 主要功能说明
- Header
  - 下载简历：通过浏览器打印（window.print）导出 PDF
  - 联系我：Dialog 弹窗展示微信号，支持一键复制
- Skills
  - 编辑模式：切换后可对分类与技能进行新增/删除/修改，滑块调整熟练度
  - 说明：当前编辑状态为前端内存状态，刷新后不会持久化
- Knowledge
  - 文章卡片：显示分类、阅读时长、发布日期、点赞/评论等
  - 阅读全文：按钮以新窗口打开外部链接
- Projects
  - 项目卡片展示，支持技术标签与操作按钮（可根据需要扩展）

## 个性化与内容维护
- 修改文章数据：src/components/Knowledge.tsx 内的 articles 数组
- 修改技能初始数据：src/components/Skills.tsx 内的 initialCategories
- 图片与占位：src/components/figma/ImageWithFallback.tsx 支持加载失败占位
- UI 组件使用：Button 支持 asChild，可将 a、Link 等作为子节点以继承样式

## 常见问题
- 编辑器提示“找不到模块 @radix-ui/xxx@version”：
  - 本项目在 vite.config.ts 中使用了带版本号的别名，并在 tsconfig.json 的 paths 中进行了同样映射。如仍提示，请重启编辑器的 TypeScript 服务或重新打开项目。
- 导出 PDF 不美观：
  - 可按需在样式中增加 @media print 的优化（隐藏不必要交互元素等）。

## 部署
- 执行 npm run build 后，将 build/ 目录部署至任意静态托管（Nginx、Netlify、Vercel、GitHub Pages 等）。
- 如需自定义构建目录或基础路径，请在 vite.config.ts 中调整。

## 许可
- 未设定许可证，可根据需要添加。