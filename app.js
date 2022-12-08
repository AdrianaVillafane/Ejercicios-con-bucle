//let $parrafo = document.getElementById("parrafo");

//console.log($parrafo);

/*let anioNacimiento = Number(prompt('En que año nacio usted?'));

const obtenerGeneracion = function (anioNacimiento) {
    if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
        return (`Eres de la generación Baby Boomer`)
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
        return (`Eres de la  Generación X`)
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
        return (`Eres de la generación Millenials`)
    } else (anioNacimiento >= 1994 && anioNacimiento <= 2010); {
        return (`Eres de la Generacion Z`)
    }
}
obtenerGeneracion(anioNacimiento);

console.log(obtenerGeneracion(anioNacimiento));

$parrafo.textContent = obtenerGeneracion(anioNacimiento);
//ahi se ve en el body el resultado de la funcion*/


/*let temperatura = Number(prompt('Indique la temperatura'));

 const obtenerSensacion = function (temperatura) {
         if ( temperatura < 0 ) {
                 return (`¡Está helando!`)
         } else if (temperatura >= 0 && temperatura < 15) {
                 return (`¡Hace frío!`)
         } else if (temperatura >= 15 && temperatura < 25) {
                 return (`Está lindo`)
         } else if (temperatura >= 25 && temperatura <= 30) {
                 return (`Hace calor`)
         } else if ( temperatura >= 30) {
                 return (`¡Hace mucho calor!`)
         }
 }
 obtenerSensacion(temperatura);

 $parrafo.textContent = obtenerSensacion(temperatura);
 
 

// for (let i = 10; i >= 0; i--) aca resta 1 al indice
//for (let i = 10; i >= 0; i++)aca suma 1 al indice
/*for (let i = 10; i >= 0; i = i - 1) {
        console.log(`Vuelta numero ${i}`);
}*/

//let $parrafo = document.getElementById("parrafo");
/*let $div = document.getElementById("cont-main");

const verTabla= (multiplicador)=> {
for (let i = 1; i <= 10; i++) {
//$parrafo.innerHTML+= ``
$div.innerHTML+=`
<div>
<h1>Estamos multiplicando</h1>
<p class= "text">${multiplicador}x${i} es igual a: ${i * multiplicador} </p>
</div>`;
}
}
verTabla(6); */

let $div = document.getElementById("cont-main");

const mostrarNumerosPar = (cantidad) => {
        for (let i = 0; i <= cantidad; i++) {
                if (i % 2 == 0) {
                        $div.innerHTML += `
                        <div>
                        <p>El número ${i} es par.</p>
                        </div>
                        `;
                } else {
                        $div.innerHTML+=`
                        <div>
                        <p>El numero ${i} es impar.</p>
                        </div>
                        `;
                }
        }
}
mostrarNumerosPar(80);