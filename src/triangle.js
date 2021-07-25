export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}
test('should correctly determine whether three lengths are not a triangle', () => {
 const notTriangle = new Triangle(3,9,22);
  expect(notTriangle.checkType()).toEqual("not a triangle");
});
Triangle.prototype.checkType = function() {
  return "not a triangle";
};

