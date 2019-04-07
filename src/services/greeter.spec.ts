import { sayHello } from "./greeter";

describe("Greeter", () => {
  it("can say 'hello'", () => {
    const name = "Micky Mouse";
    const result = sayHello(name);
    expect(result).toEqual(`Hello, ${name}`);
  });
});
