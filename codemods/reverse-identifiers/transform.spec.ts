import { applyTransform } from "@hypermod/utils";
import * as transformer from "./transform";

describe("hypermod-community#reverse-identifiers transform", () => {
  it("should transform correctly", async () => {
    const result = await applyTransform(
      transformer,
      `
var foo = 'hypermod-community';
console.log(foo);
      `,
      { parser: "tsx" }
    );

    expect(result).toMatchInlineSnapshot(`
      "var oof = 'hypermod-community';
      elosnoc.gol(oof);"
    `);
  });
});
