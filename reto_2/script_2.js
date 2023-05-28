alert("Escoje un Numero de la semana");

let numWeek = parseInt(prompt("Ingrese un numero de 1 a 7 para selecionar un dia de la semana"));
let dayWeek = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado", "Domingo"];



///////////////OPCION 1:
// if (numWeek === 1) {
//     alert("Lunes")
// } else {
//     if (numWeek === 2) {
//         alert("Martes")
//     } else {
//         if (numWeek === 3) {
//             alert("Miercoles")
//         } else {
//             if (numWeek === 4) {
//                 alert("Jueves")
//             } else {
//                 if (numWeek === 5) {
//                     alert("viuernes")
//                 } else {
//                     if (numWeek === 6) {
//                         alert("Sabado")
//                     } else {
//                         if(numWeek === 7){
//                             alert("Domingo")
//                         }else{
//                             if(numWeek > 7){
//                                 alert("Estás ingresando un Número inválido, intentalo de nuevo")
//                             }
//                         };
//                     };
//                 };
//             };
//         };
//     };
// };

/////////////////////////////////////
///////////// OPCION 2

// if (numWeek === 1) {
//     alert(dayWeek[0]);
// } else {
//     if (numWeek === 2) {
//         alert(dayWeek[1]);
//     } else {
//     if (numWeek === 3) {
//         alert(dayWeek[2])
//     } else {
//         if (numWeek === 3) {
//             alert(dayWeek[3])
//         } else {
//             if (numWeek === 4) {
//                 alert(dayWeek[4])
//             } else {
//                 if (numWeek === 5) {
//                     alert(dayWeek[5])
//                 } else {
//                     if (numWeek === 6) {
//                         alert(dayWeek[6])
//                     } else {
//                         if (numWeek === 7) {
//                             alert(dayWeek[7])
//                         } else {
//                             if(numWeek > 7){
//                                 alert("Estás ingresando un Número inválido, inténtalo de nuevo")
//                             };
//                         };
//                     };
//                 };
//             };
//         };
//     };
//     };
// };

/////////////////////// OPCION 3:

if (numWeek >= 1 && numWeek <= 7) {
    alert(dayWeek[numWeek - 1]);
} else {
    alert("Estás ingresando un número inválido, inténtalo de nuevo");
}










