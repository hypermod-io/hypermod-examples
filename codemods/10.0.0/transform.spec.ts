import { applyTransform } from "@hypermod/utils";
import * as transformer from "./transform";

describe("hypermod-community@10.0.0 transform", () => {
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
      "var bar = 'hypermod-community';
      console.log(bar);"
    `);
  });
});
