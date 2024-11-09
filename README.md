<p align="center">

[![readme-header](https://github.com/hirasso/thumbhash-custom-element/assets/869813/978e2445-d11c-4f32-8f73-e0cf8dfdce8c)](https://thumbhash-custom-element.js.org)

</p>

<div align="center">

[![Test status](https://img.shields.io/github/actions/workflow/status/hirasso/thumbhash-custom-element/e2e-tests.yml?branch=main&label=tests)](https://github.com/hirasso/thumbhash-custom-element/actions/workflows/e2e-tests.yml)
[![License](https://img.shields.io/github/license/hirasso/thumbhash-custom-element.svg)](https://github.com/hirasso/thumbhash-custom-element/blob/master/LICENSE)

</div>

**A [custom element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) that automatically renders a [thumbhash](https://github.com/evanw/thumbhash) placeholder for your lazy-loaded images 🎨**

## Demo

[thumbhash-custom-element.js.org](https://thumbhash-custom-element.js.org)

## Installation

Install from npm and import it into your bundle:

```bash
npm i thumbhash-custom-element
```

```js
import defineThumbhashElement from "thumbhash-custom-element";
defineThumbhashElement();
```

Or include the minified production file from a CDN:

```html
<script src="https://unpkg.com/thumbhash-custom-element@0"></script>
<script>
  defineThumbhashElement();
</script>
```

## Usage

### Markup

If the script is installed an initialized, you can render thumbhash placeholders automatically by using the custom element:

```html
<figure>
  <thumb-hash value="YTkGJwaRhWUIt4lbgnhZl3ath2BUBGYA" aria-hidden="true"></thumbhash-element>
  <img src="{{ url }}" loading="lazy" width="{{ width }}" height="{{ height }}" alt="{{ alt }}">
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