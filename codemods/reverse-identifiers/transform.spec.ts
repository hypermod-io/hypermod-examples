import { applyTransform } from "@codeshift/test-utils";
import * as transformer from "./transform";

describe("codeshift-community#reverse-identifiers transform", () => {
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
      "var oof = 'codeshift-community';
      elosnoc.gol(oof);"
    `);
  });
});
