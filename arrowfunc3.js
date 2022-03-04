let compara = function (param) {
  console.log(this === param);
};

compara(global);
compara(this);

console.log("----------------------------------");

const obj = {};

compara = compara.bind(obj);
compara(global);
compara(this);
compara(obj);

console.log("----------------------------------");

let comparaComArrow = (param) => console.log(this === param);

comparaComArrow(global); // this global 
comparaComArrow(module.exports) //arrow funcion 
comparaComArrow(this);

console.log("----------------------------------");