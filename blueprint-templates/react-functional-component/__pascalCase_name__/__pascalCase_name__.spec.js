import React from "react";
import renderer from "react-test-renderer";
import {{pascalCase name}} from "./{{pascalCase name}}";

describe("{{pascalCase name}}", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<{{pascalCase name}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
