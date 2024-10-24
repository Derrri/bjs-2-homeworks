function parseCount(value) {
  let pars = Number.parseFloat(value);
  if (isNaN(pars)) {
    throw new Error("Невалидное значение");
  }
  return pars;
}
function validateCount(input) {
  try {
    return parseCount(input);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (
      this.side1 + this.side2 <= this.side3 ||
      this.side1 + this.side3 <= this.side2 ||
      this.side2 + this.side3 <= this.side1
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  get area() {
    const semiPerimeter = this.perimeter / 2;
    return parseFloat(
      Math.sqrt(
        semiPerimeter *
          (semiPerimeter - this.side1) *
          (semiPerimeter - this.side2) *
          (semiPerimeter - this.side3)
      ).toFixed(3)
    );
  }
}
function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
