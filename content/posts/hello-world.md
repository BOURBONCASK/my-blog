+++
title = '从零打造 PaperMod 主题的理想工作流'
date = 2024-01-12T09:00:00+08:00
lastmod = 2024-01-12T09:00:00+08:00
draft = false
summary = '记录我为 Hugo PaperMod 主题打造本地开发环境与发布流程的实践心得。'
categories = ['Engineering']
tags = ['hugo', 'papermod', 'workflow']
[cover]
  image = 'images/posts/papermod-workflow.svg'
  alt = 'A layered illustration showing Hugo, GitHub Actions and GitHub Pages working together.'
  relative = false
+++

想要一个优雅的静态博客并不难，难的是让内容生产流程顺滑。以下记录了我从初始化仓库、安装主题到配置自动化发布的关键步骤。

## 初始化 Hugo 项目

```bash
hugo new site my-blog
cd my-blog
git init
```

我倾向于把主题作为子模块引用，这样能保持更新灵活：

```bash
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

## 必备配置

- 设定 `baseURL` 与语言。
- 启用 `ShowToc`、`ShowCodeCopyButtons` 让阅读体验更佳。
- 配置菜单，确保导航清晰。

> 一个实用的小技巧：把自定义样式放在 `assets/css/extended/custom.css`，这样就不会与主题文件混淆。

## 内容生产节奏

当我需要撰写新文章时，会执行：

```bash
hugo new posts/my-article.md
```

然后立刻补充 `summary`、`tags` 与头图。这样能保证列表页内容整齐划一。

## 发布策略

结合 GitHub Actions 可以让部署变得非常轻松。我会在推送到 `main` 分支后自动运行构建并发布到 `gh-pages`，具体配置可以参考仓库中的 workflow 文件。自动化的意义不仅在于省事，还能让每一次改动都留下可回溯的记录。

最后，保持写作的节奏，让内容持续流动，这才是最重要的。
