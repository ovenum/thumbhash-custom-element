# &#x3C;thumb-hash&#x3E;

**A [custom element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) that automatically renders a [thumbhash](https://github.com/evanw/thumbhash) placeholder for your lazy-loaded images 🎨**

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
ThumbHashElement.define();
```

Or include the minified production file from a CDN:

```html
<script type="module">
  import ThumbHashElement from "https://unpkg.com/@hirasso/thumbhash-custom-element@0?module";
  ThumbHashElement.define();
</script>
```

## Usage

### Markup

If the script is installed an initialized, you can start adding `<thumb-hash>` to your markup:

```diff
<figure>
+  <thumb-hash value="YTkGJwaRhWUIt4lbgnhZl3ath2BUBGYA" aria-hidden="true"></thumb-hash>
  <img src="https://example.com/image.jpg" loading="lazy" width="32" height="32" alt="My nice image">
</figure>
```

The custom element will automatically create a canvas with the thumbhash image for you:

```diff
<figure>
+  <thumb-hash value="YTkGJwaRhWUIt4lbgnhZl3ath2BUBGYA" aria-hidden="true">
+    <canvas width="32" height="32" data-thumb-hash-canvas style="width: 100%; height: 100%;"></canvas>
+  </thumb-hash>
  <img src="https://example.com/image.jpg" loading="lazy" width="32" height="32" alt="My nice image">
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