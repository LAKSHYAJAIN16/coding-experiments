// Generated by CoffeeScript 2.6.1
(function() {
  var a, add, addVariables, b, c, div, divVariables, fn, mul, mulVariables, sub, subVariables;

  a = 10;

  b = 10;

  c = 10;

  addVariables = false;

  subVariables = true;

  mulVariables = false;

  divVariables = false;

  add = function(num1, num2, num3) {
    return num1 + num2 + num3;
  };

  sub = function(num1, num2, num3) {
    return num1 - num2 - num3;
  };

  mul = function(num1, num2, num3) {
    return num1 * num2 * num3;
  };

  div = function(num1, num2, num3) {
    return num1 / num2 / num3;
  };

  if (addVariables) {
    fn = add;
  }

  if (subVariables) {
    fn = sub;
  }

  if (mulVariables) {
    fn = mul;
  }

  if (divVariables) {
    fn = div;
  }

  console.log(fn(a, b, c));

}).call(this);