import { describe, expect, it } from "vitest";

import * as ModuleBuild from "../../../src/index.js";
import ScrollMirror from "../../../src/index.js";
import type { Strategy } from "../../../src/index.js";
import * as UMDBuild from "../../../src/ThumbHashElement.js";

describe("Exports", () => {
  it("should have the correct exports for the es6 module", () => {
    // expect(Object.keys(ModuleBuild)).toEqual([
    //   "getScrollProgress",
    //   "hasOverflow",
    //   "hasCSSOverflow",
    //   "nextTick",
    //   "default",
    // ]);
  });

  it("should only have a default export for the UMD bundle", () => {
    expect(Object.keys(UMDBuild)).toEqual(["default"]);
  });
});
