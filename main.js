

/*

Javier Iñiguez Quezada
Carlos Iraham Gardea Saucedo
Eduardo Alejandro De Hoyos Miloslavich
Lucas Alberto Alonso Cruz


*/

// Ejercicio 1


console.log('-----------------Ejercicio 01-------------------------');
console.log(' ');



var john = {
    firstName: 'John',
    lastName: 'Doe'
}
  

function deepEqual(a, b) {

    if(typeof(a) === 'object' && typeof(b) === 'object'){

        if(a === b) {
            return true;
        }else {

            var keysA = Object.keys(a);
            var keysB = Object.keys(b);
            var pairsA = [];
            var pairsB = [];

            if(keysA === keysB) {
                return true;
            }else {
                    
            for (var i = 0; i < keysA.length; i++) {
                pairsA.push([keysA[i], a[keysA[i]]]);
            } 
            for (var i = 0; i < keysB.length; i++) {
                pairsB.push([keysB[i], b[keysB[i]]]);
            } 
            for (var i = 0; i < keysA.length; i++) {
                if (keysA[i] !== keysB[i]) {
                return false;
                }
            }
            return true;

            }
        }

    }else{

        if (a === b) {
        return true;
        } else {
            return false;
        }

    }
} 


console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false



// Ejercicio 02



console.log('-----------------Ejercicio 02-------------------------');
console.log(' ');

function chunk(array, size) {
  var newArray = [];

  for(var i = 0; i<array.length;i+=size){
      newArray.push(array.slice(i,i+size));
  }
  return newArray;
};

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]




//   Ejercicio 03
console.log('---------------------Ejercicio 03----------------------');
console.log(' ');

function frequency(string) {
      let array = Array.from(string).sort();
      let unique = array.filter(function(element,index){
          return array.indexOf(element) === index;
      });

      let object = {};

      for(var i in unique){
          let contador = 0;

          for(var j in array){
              if(array[j]== unique[i]){
                  contador ++;
                  object[array[j]] = contador;
              }
          }
      }

      return object;
 }
 
 console.log('Test 1:', frequency('cccbbbaaa'))
 // {a: 3, b: 3, c: 3}
 console.log('Test 2:', frequency('www.bedu.org'))
 // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
 console.log('Test 3:', frequency('john.doe@domain.com'))
 // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}