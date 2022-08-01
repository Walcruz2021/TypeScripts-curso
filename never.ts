const withouEnd = () => {
  while (true) {
    console.log('hola');
  }
};

console.log(withouEnd);

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
};

console.log(example("hola"))
console.log(example([1,2,3,4]))
console.log(example(1123)) //aqui se detiene el programa
console.log(example("hola despues del fail"))
console.log(example("hola despues del fail"))