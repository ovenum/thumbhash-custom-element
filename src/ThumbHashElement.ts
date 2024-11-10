import {
  decodeThumbHash,
  getAverageColor,
} from "./support/functions.js";

/**
 * A custom element that automatically renders a thumbhash placeholder
 */
export class ThumbHashElement extends HTMLElement {
  canvas: HTMLCanvasElement;
  shadowRoot: ShadowRoot;

  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "open" });

    // Create a canvas and add it to the shadow root
    this.canvas = document.createElement("canvas");

    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";

    // Hide from screen readers
    this.setAttribute('aria-hidden', 'true');
  }

  /**
   * Attach this class to the custom element <thumb-hash></thumb-hash>
   */
  static init() {
    if (!window.customElements.get("thumb-hash")) {
      customElements.define("thumb-hash", ThumbHashElement);
    }
  }

  connectedCallback() {
    const hash = this.value.trim();
    if (!hash) {
      return;
    }
    if (this.average) {
      this.renderAverage(hash);
      return;
    }
    this.renderCanvas(hash);
  }

  get value() {
    return this.getAttribute("value") || "";
  }

  get average() {
    return !!this.getAttribute("average");
  }

  /**
   * Render and append a canvas using the thumbhash data
   */
  renderCanvas(hash: string) {
    const { width, height, pixels } = decodeThumbHash(hash);

    const ctx = this.canvas.getContext("2d");
    if (!ctx) return;

    this.canvas.width = width;
    this.canvas.height = height;

    const imageData = ctx.createImageData(width, height);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);

    this.shadowRoot.appendChild(this.canvas);
  }

  /**
   * Renders the average color
   */
  renderAverage(hash: string) {
    const rgba = getAverageColor(hash);
    const div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.background = rgba;
    this.shadowRoot.appendChild(div);
  }
}
