+++
title = '设计一个优雅的瀑布流 Gallery'
date = 2024-03-18T08:45:00+08:00
lastmod = 2024-03-18T08:45:00+08:00
summary = '分享我在 Hugo 中构建响应式瀑布流布局与灯箱交互时的思路与实现细节。'
categories = ['Design']
tags = ['gallery', 'css', 'interaction design']
[cover]
  image = '/images/posts/masonry-gallery.svg'
  alt = 'Sketches of a masonry layout transitioning into a lightbox preview.'
  relative = false
+++

打造一个真正优雅的 Gallery，需要考虑视觉节奏、性能与交互细节。以下是这次实现的关键。

## 布局原则

瀑布流的目标是让不同尺寸的图片自然排列。纯 CSS 的多列布局能减少脚本依赖：

```css
.masonry-gallery {
  column-count: var(--gallery-columns, 3);
  column-gap: 1.5rem;
}
```

通过媒体查询调整 `column-count`，可以在移动端保持单列体验。

## 交互体验

点击图片后立即放大预览，并显示说明文字。轻量的原生 JavaScript 足以胜任：

```js
button.addEventListener('click', () => {
  lightbox.show({ src, alt, caption });
});
```

关键在于细节——例如在灯箱打开时禁用滚动、支持 `Esc` 关闭、让背景有柔和过渡等。

## 内容管理

我选择把图片元数据写在页面 Front Matter 中。这样新增作品时只需补充条目，无需修改模板逻辑。同时也方便在未来接入 CMS 时映射字段。

最终的效果让我满意：页面保持 PaperMod 的简洁调性，同时展示作品的多样性。
