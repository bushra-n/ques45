"use strict";
function creatCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const mycar = creatCar("toyota", "corolla", { color: "silver", year: 2024 });
console.log(mycar);
