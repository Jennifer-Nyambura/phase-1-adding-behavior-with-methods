class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    if (this.breed === "parrot") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}

// Exporting classes for tests
if (typeof module !== "undefined" && module.exports) {
  module.exports = { Cat, Dog, Bird };
}
