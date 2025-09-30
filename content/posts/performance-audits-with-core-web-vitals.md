+++
title = '用 Core Web Vitals 审视前端性能'
date = 2024-02-02T14:20:00+08:00
lastmod = 2024-02-02T14:20:00+08:00
summary = '结合真实案例说明如何使用 Core Web Vitals 指标审视与优化网页性能。'
categories = ['Performance']
tags = ['core web vitals', 'performance', 'monitoring']
[cover]
  image = 'images/posts/core-web-vitals.svg'
  alt = 'A dashboard mock-up displaying Core Web Vitals metrics.'
  relative = false
+++

Core Web Vitals 为用户体验提供了可量化的指标。针对不同的业务场景，我会重点关注以下几个指标：

1. **Largest Contentful Paint (LCP)**：反映关键内容加载速度。
2. **First Input Delay (FID)**：衡量用户首次互动的响应性。
3. **Cumulative Layout Shift (CLS)**：用于评估页面布局稳定性。

## 基线测量

我通常会在 Lighthouse 与 WebPageTest 上做基线测量，并结合 Chrome User Experience Report 获取真实用户数据。对于全球站点，再辅以边缘节点监控结果。

```bash
npm install -g lighthouse
lighthouse https://example.com --view
```

## 优化策略清单

- 优化图片尺寸与格式：优先使用 AVIF / WebP，并合理设置 `srcset`。
- 延迟加载非关键脚本，对第三方脚本应用 `async` 或 `defer`。
- 缩减 CSS 体积，通过关键 CSS + 异步加载方式减少阻塞。

## 验收标准

当 LCP < 2.5s、FID < 100ms、CLS < 0.1 时，我才认为体验达标。若指标达不到目标，会继续拆解瀑布图与性能分析记录，定位瓶颈。

性能优化需要持续迭代，与设计、产品紧密合作才能真正落地。持续监控、快速反馈是关键。
