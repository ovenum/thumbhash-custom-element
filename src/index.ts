import Element from "./Element.js";

export default function defineElement() {
  if (!window.customElements.get("thumbhash-element")) {
    customElements.define("thumbhash-element", Element);
  }
}
