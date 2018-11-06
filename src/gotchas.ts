interface A {
  a: number;
  b: string;
}

function foo1(p: A): A {
  return {
    a: 1,
    b: "1",
    // error?
    c: ""
  };
}

foo1({
  a: 1,
  b: "1",
  // error ?
  c: ""
});

const fooObject = {
  a: 1,
  b: "1",
  c: ""
};

// no error ?!?! even thu we have extra prop.
foo1(fooObject);
