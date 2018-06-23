// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-mix-in-classes
// not very well documented, unfortunately

// it's not a typescript feature, but JS!
// MDN link:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Mix-ins

// it's like default implementation in java, traits in php, etc

type ConstructorType<T> = new (...args: any[]) => T;

class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}

function teachToFly<TC extends ConstructorType<{}>>(classToTeach: TC) {
  return class extends classToTeach {
    public ibelieveICanfly() {
      return "fly!";
    }
  };
}

const Bat = teachToFly(
  class extends Mammal {
    public confuseRay() {}
  }
);

const bat = new Bat();
bat.ibelieveICanfly();

export {};
