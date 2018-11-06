// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-mix-in-classes
// not very well documented, unfortunately

// it's not a typescript feature, but JS!
// MDN link:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Mix-ins

// this is not (!!!) multiple inheritance
// it's like default implementation in java, traits in php, etc

type ConstructorType<T> = new (...args: any[]) => T;

class Animal {}
class Mammal extends Animal {}
class Mouse extends Mammal {}

// https://i.kym-cdn.com/photos/images/original/001/421/956/4b8.png

// as plain js
function teachToFlyJavascript(classToTeach: any) {
  return class extends classToTeach {
    public ibelieveICanfly() {
      return "fly!";
    }
  };
}

function teachToFly<TC extends ConstructorType<{}>>(classToTeach: TC) {
  return class extends classToTeach {
    public ibelieveICanfly() {
      return "fly!";
    }
  };
}

const Bird = teachToFly(Animal);
const Bat = teachToFly(Mouse);

const bat = new Bat();
bat.ibelieveICanfly();

// it will look nicer with pipeline operator!
// const Bird = Animal -> teachToFly -> ...

export {};
