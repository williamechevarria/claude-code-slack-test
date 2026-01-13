// Scientific Calculator

// =====================
// Basic Operations
// =====================

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Multiply two numbers and return their product
// Example usage: multiply(4, 5) returns 20
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// =====================
// Power & Root Functions
// =====================

// Raise base to the power of exponent
// Example: power(2, 3) returns 8
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Calculate square root
// Example: sqrt(16) returns 4
function sqrt(x) {
  if (x < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(x);
}

// Calculate cube root
// Example: cbrt(27) returns 3
function cbrt(x) {
  return Math.cbrt(x);
}

// Calculate nth root
// Example: nthRoot(27, 3) returns 3
function nthRoot(x, n) {
  return Math.pow(x, 1 / n);
}

// =====================
// Trigonometric Functions (radians)
// =====================

function sin(x) {
  return Math.sin(x);
}

function cos(x) {
  return Math.cos(x);
}

function tan(x) {
  return Math.tan(x);
}

// Inverse trigonometric functions
function asin(x) {
  return Math.asin(x);
}

function acos(x) {
  return Math.acos(x);
}

function atan(x) {
  return Math.atan(x);
}

// =====================
// Degree/Radian Conversion
// =====================

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

// =====================
// Logarithmic Functions
// =====================

// Natural logarithm (base e)
// Example: ln(Math.E) returns 1
function ln(x) {
  if (x <= 0) {
    throw new Error('Logarithm undefined for non-positive numbers');
  }
  return Math.log(x);
}

// Base 10 logarithm
// Example: log10(100) returns 2
function log10(x) {
  if (x <= 0) {
    throw new Error('Logarithm undefined for non-positive numbers');
  }
  return Math.log10(x);
}

// Logarithm with custom base
// Example: logBase(8, 2) returns 3
function logBase(x, base) {
  if (x <= 0 || base <= 0 || base === 1) {
    throw new Error('Invalid input for logarithm');
  }
  return Math.log(x) / Math.log(base);
}

// =====================
// Exponential Function
// =====================

// e raised to the power x
// Example: exp(1) returns Math.E
function exp(x) {
  return Math.exp(x);
}

// =====================
// Other Scientific Functions
// =====================

// Absolute value
function abs(x) {
  return Math.abs(x);
}

// Factorial (for non-negative integers)
// Example: factorial(5) returns 120
function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('Factorial is only defined for non-negative integers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Modulo operation
function mod(a, b) {
  return a % b;
}

// Floor - round down to nearest integer
function floor(x) {
  return Math.floor(x);
}

// Ceiling - round up to nearest integer
function ceil(x) {
  return Math.ceil(x);
}

// Round to nearest integer
function round(x) {
  return Math.round(x);
}

// =====================
// Constants
// =====================

const PI = Math.PI;
const E = Math.E;

module.exports = {
  // Basic operations
  add,
  subtract,
  multiply,
  divide,
  // Power & roots
  power,
  sqrt,
  cbrt,
  nthRoot,
  // Trigonometry
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  toRadians,
  toDegrees,
  // Logarithms
  ln,
  log10,
  logBase,
  exp,
  // Other functions
  abs,
  factorial,
  mod,
  floor,
  ceil,
  round,
  // Constants
  PI,
  E
};
