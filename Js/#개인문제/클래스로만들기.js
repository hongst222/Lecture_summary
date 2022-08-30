// function makeCar(color, speed) {
//     const car = {
//       color,
//       speed,
//       run() {
//         console.log(Runs at ${this.speed});
//       },
//     };
//     return car;
//   }
  
//   const car1 = makeCar('blue', '100km/h');
  
//   car1.run(); 
//   현재 코드잇 실행기에는 makeCar라는 Factory function이
// 있습니다. 이 코드를 class를 사용하는 코드로 변경해보세요.

class MakeCar {
    #color;
    #speed;

    constructor(color,speed){
        this.#color = color;
        this.#speed = speed;
    }
    get color() {
        return this.#color;
    }
    set color(pr) {
        this.#color = pr;
    }

    get speed() {
        return this.#speed;
    }
    set speed(pr){
        this.#speed = pr;
    }

    run() {
        console.log(`${this.color}_Car Runs at ${this.speed}`);
    }
}

const a = new MakeCar("Blue","100km/h");
a.run();