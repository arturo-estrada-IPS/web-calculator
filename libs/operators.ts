export function sum(a: number, b: number) {
  return a + b;
}

export function subtract(a: number, b: number) {
  return a - b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(a: number, b: number) {
  return a / b;
}

export function pow(a: number, b: number) {
  return Math.pow(a, b);
}

export function max(a: number, b: number) {
  return Math.max(a, b);
}

export function min(a: number, b: number) {
  return Math.min(a, b);
}

export function sqrt(a: number) {
  return Math.sqrt(a);
}

export function trig(name: string, value: number) {
  const trigonometry: { [key: string]: (v: number) => number } = {
    sin: (n) => Math.sin(n),
    cos: (n) => Math.cos(n),
    tan: (n) => Math.tan(n),
  };

  if (trigonometry[name]) {
    return trigonometry[name](value);
  }

  throw new Error("function not found");
}
