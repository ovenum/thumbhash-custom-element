# &#x3C;thumb-hash&#x3E;

**A [custom element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) that automatically renders a [thumbhash](https://github.com/evanw/thumbhash) placeholder for your lazy-loaded images**

[![Test status](https://img.shields.io/github/actions/workflow/status/hirasso/thumbhash-custom-element/e2e-tests.yml?branch=main&label=tests)](https://github.com/hirasso/thumbhash-custom-element/actions/workflows/e2e-tests.yml)
[![License](https://img.shields.io/github/license/hirasso/thumbhash-custom-element.svg)](https://github.com/hirasso/thumbhash-custom-element/blob/master/LICENSE)

## Demo

[thumbhash-custom-element.netlify.app](https://thumbhash-custom-element.netlify.app)

## Installation

Install from npm and import it into your bundle:

```bash
npm i @hirasso/thumbhash-custom-element
```

```js
import ThumbHashElement from "thumbhash-custom-element";
ThumbHashElement.init();
```

Or include the minified production file from a CDN:

```html
<script type="module">
  import ThumbHashElement from "https://unpkg.com/@hirasso/thumbhash-custom-element@0?module";
  ThumbHashElement.init();
</script>
```

## Usage

### Markup

**Input:** Now can start adding `<thumb-hash>` elements to your markup:

```diff
<figure>
+  <thumb-hash value="YTkGJwaRhWUIt4lbgnhZl3ath2BUBGYA" />
  <img src="https://example.com/image.jpg" loading="lazy" width="32" height="32" alt="My large lazy-loaded image">
</figure>
```

**Output**: The custom element will automatically create a canvas with the thumbhash image for you. It will also hide the element from screen readers:

```diff
<figure>
+  <thumb-hash value="YTkGJwaRhWUIt4lbgnhZl3ath2BUBGYA" aria-hidden="true">
+    ⏷ #shadow-root (open)
+       <canvas width="32" height="32" style="width: 100%; height: 100%;"></canvas>
+  </thumb-hash>
  <img src="https://example.com/image.jpg" loading="lazy" width="32" height="32" alt="My large lazy-loaded image">
</figure>
```

### Styling

```css
figure,
figure img {
  position: relative;
}
thumb-hash {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Average color

If you add the boolean attribute `average` to your `<thumb-hash />`, the average color of the image will be rendered instead of the blurry thumbhash image:

```diff
<figure>
+  <thumb-hash average value="YTkGJwaRhWUIt4lbgnhZl3ath2BUBGYA" />
  <img src="https://example.com/image.jpg" loading="lazy" width="32" height="32" alt="My large lazy-loaded image">
</figure>
```

The custom element will automatically create a canvas with the thumbhash image for you:

```diff
<figure>
+  <thumb-hash average value="YTkGJwaRhWUIt4lbgnhZl3ath2BUBGYA" aria-hidden="true">
+    ⏷ #shadow-root (open)
+       <div style="width: 100%; height: 100%; background: rgb(111, 51, 0);"></div>
+  </thumb-hash>
  <img src="https://example.com/image.jpg" loading="lazy" width="32" height="32" alt="My large lazy-loaded image">
</figure>
```