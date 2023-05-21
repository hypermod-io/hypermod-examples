import { applyTransform } from "@codeshift/test-utils";
import * as transformer from "./transform";

describe("codeshift-community@10.0.0 transform", () => {
  it("should transform correctly", async () => {
    const result = await applyTransform(
      transformer,
      `
var foo = 'codeshift-community';
console.log(foo);
      `,
      { parser: "tsx" }
    );

    expect(result).toMatchInlineSnapshot(`
      "var bar = 'codeshift-community';
      console.log(bar);"
    `);
  });
});
