// Need to grab modules
const { Circle, Square, Triangle } = require("./shape");

// Test Circle
describe("Circle", () => {
    test("should render svg for a green circle element", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
      const circle = new Circle();
      circle.setColor("green");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
      const circle = new Circle();
      circle.setColor("blue");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
  
  // Test Square
  describe("Square", () => {
    test("should render svg for a green polygon element", () => {
      const expectedSvg =
        '<rect x="73" y="40" width="160" height="160" fill="green" />';
      const square = new Square();
      square.setColor("green");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<rect x="73" y="40" width="160" height="160" fill="red" />';
      const square = new Square();
      square.setColor("red");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });

  // Test Triangle
  describe("Triangle", () => {
    test("should render svg for a blue polygon element", () => {
      const expectedSvg =
        '<polygon points="150, 19 244, 192 56, 102" fill="blue" />';
      const triangle = new Triangle();
      triangle.setColor("blue");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<polygon points="150, 19 244, 192 56, 102" fill="red" />';
      const triangle = new Triangle();
      triangle.setColor("red");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
  