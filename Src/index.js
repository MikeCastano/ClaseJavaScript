//Clase variables
let string = "Aria";
let number = 5;
let boolean = true;
let array = [
  "a",
  "b",
  2,
  3,
  4,
  false,
  "string",
  { nombre: "Miguel", edad: 28 },
  [],
];
let estudiante = {
  nombre: "Miguel",
  edad: 28,
  estatura: 1.78,
  estudios: {
    primaria: "5to grado",
    bachillerato: "",
  },
};

let vehiculo = {
  matricula: 12456,
  marca: "Mazda",
  colores: ["Gris", "Negro"],
  caracteristicas: {
    velMax: 120,
    cilindraje: 1600,
  },
  autorizado: true,
  getName: function (name) {
    console.log("llamaron la función getName " + name);
  },
};

let sacarAlerta = function (mensaje, tiempo) {
  if (tiempo < 5) {
    alert(mensaje);
  } else {
    document.getElementById("body").style.background = "black";
  }
}

sacarAlerta = function (a) {
    alert(a)
}

// sacarAlerta(4);
