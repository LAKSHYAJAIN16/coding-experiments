a = 10
b = 10
c = 10
addVariables = false
subVariables = true
mulVariables = false
divVariables = false

add = (num1, num2, num3) -> num1 + num2 + num3
sub = (num1, num2, num3) -> num1 - num2 - num3
mul = (num1, num2, num3) -> num1 * num2 * num3
div = (num1, num2, num3) -> num1 / num2 / num3

fn = add if addVariables
fn = sub if subVariables
fn = mul if mulVariables
fn = div if divVariables

console.log fn(a,b,c)