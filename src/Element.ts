import { thumbHashToRGBA } from "thumbhash";
import { getCanvas } from "./support/utils.js";

/**
 * A custom element that automatically renders a thumbhash placeholder
 */
export default class Element extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const hash = this.hash.trim();
    if (hash) {
      this.render(hash);
    }
  }

  get hash() {
    return this.getAttribute("hash") || "";
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
    canvas.setAttribute("data-thumbhash-element", "");

    this.replaceWith(canvas);
  }
}
