console.log(`Turtle race`);

class Turtle {
  constructor(name, colors) {
    this.name = name;
    this.colors = colors;
    this.distance = 0;
  }

  greet() {
    console.log(
      `Hi! My name is ${this.name} and my colors are : ${this.getColorScheme}` );
  }
  move() {
      const round = Math.floor(Math.random() * 10);
      this.distance += round;
      console.log(`${this.name} moves ${round} steps. Total distance is  ${this.distance}`);
  }
 getColorScheme() {
    return this.colors.join(" | ");
  }
}


const p1 = new Turtle("Ferencz", ['Burgundy']);
const p2 = new Turtle("Otto", ['White', 'Black']);
