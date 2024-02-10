let calculadora = {
  sumar: function (array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  },

  restar: function (a, b) {
    return a - b;
  },

  multiplicar: function (a, b) {
    return a * b;
  },

  dividir: function (a, b) {
    return a / b;
  },

  porcentaje: function (numero, porcentaje) {
    return (numero * porcentaje) / 100;
  },

  concatenar: function (a, b) {
    return a + b;
  },

  calcular: function () {
    alert("¡Empezemos a calcular!");

    while (true) {
      let operacion = prompt(
        "¿Cuál operación desea realizar? (sumar, restar, multiplicar, dividir, porcentaje, concatenar):"
      );
      if (!this[operacion]) {
        alert("Esta operación no es válida.");
        continue;
      }

      let numero1 = parseFloat(prompt("Ingrese el primer número:"));

      if (operacion === "porcentaje") {
        let porcentaje = parseFloat(prompt("Ingrese el porcentaje:"));
        let resultado = this.porcentaje(numero1, porcentaje);
        alert(numero1 + " es el " + porcentaje + "% de: " + resultado);
      } else {
        let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
        let resultado;
        if (operacion === "sumar") {
          resultado = this.sumar([numero1, numero2]);
        } else {
          resultado = this[operacion](numero1, numero2);
        }
        alert("Resultado de la " + operacion + ": " + resultado);
      }

      if (!confirm("¿Desea realizar otra operación?")) {
        break;
      }
    }
  },
};

calculadora.calcular();
