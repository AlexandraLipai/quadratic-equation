module.exports = function solveEquation(equation) {
    // your implementation
        var arr = equation.split(" ");

        var a = arr[0];
        var b = arr[4];
        var c = arr[8];

        if (arr[3] == '-'){
            b = arr[3] + arr[4];
        }

        if (arr[7] == '-'){
            c = arr[7] + arr[8];
        }

        var D = b * b - 4 * a * c;

        var result = [];

        if (D > 0){

            result[0] = Math.round(- b + Math.sqrt(D))/(2 * a);
            result[1] =  Math.round(-b - Math.sqrt(D))/(2 * a);

        } else if (D == 0) {

            result[0] =  Math.round(-b/(2 * a));
            result[1] = result[0];

        }

      function compareNumeric(a, b) {
          return a - b;
      }

      result.sort(compareNumeric);


        return result;
    }
