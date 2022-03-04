let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};
dobro = (a) => 2 * a; //return esta implicito

console.log(dobro(Math.PI));
console.log(2 * Math.PI);

let ola = function () {
  return "Ola";
};

ola = () => "Ola";
console.log(ola())