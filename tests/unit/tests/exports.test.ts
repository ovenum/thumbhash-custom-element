import { describe, expect, it } from "vitest";

import * as ModuleBuild from "../../../src/index.js";
import type { Strategy } from "../../../src/index.js";
import * as UMDBuild from "../../../src/ThumbHashElement.js";

describe("Exports", () => {
  it("should only have a default export for the UMD bundle", () => {
    expect(Object.keys(UMDBuild)).toEqual(["default"]);
  });
});
