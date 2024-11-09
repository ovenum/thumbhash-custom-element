import { thumbHashToRGBA } from "thumbhash";
import { getCanvas } from "./support/utils.js";

/**
 * A custom element that automatically renders a thumbhash placeholder
 */
export class ThumbHashElement extends HTMLElement {
  constructor() {
    super();
  }

  /**
   * Attach this class to the custom element <thumb-hash></thumb-hash>
   */
  static define() {
    if (!window.customElements.get("thumb-hash")) {
      customElements.define("thumb-hash", ThumbHashElement);
    }
  }

  connectedCallback() {
    const hash = this.value.trim();
    if (hash) {
      this.render(hash);
    }
  }

  get value() {
    return this.getAttribute("value") || "";
  }

  /**
   * Render and append a canvas using the thumbhash data
   */
  render(hash: string) {
    const bytes = Uint8Array.from(atob(hash), (c) => c.charCodeAt(0));
    const { w: width, h: height, rgba: pixels } = thumbHashToRGBA(bytes);

    const canvas = getCanvas(width, height, pixels);

    if (!canvas) {
      return;
    }

    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.setAttribute("data-thumb-hash-canvas", "");

    // this.replaceWith(canvas);
    this.appendChild(canvas);
  }
}
