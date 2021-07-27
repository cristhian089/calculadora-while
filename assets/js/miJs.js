let boton=document.getElementById("operacion");

const operacion=()=>{
    
        let op = prompt("Escribe: \n 1 - Suma \n 2 -resta \n 3 - Multiplicacion \n 4 - Division \n 5 - Salir");
        while (op !=="5") {
            if (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op !== "5") {
                alert("favor ingresar una opcion valida de 1 a 5");
            } else {
                let num1 = parseFloat(prompt("Ingrese numero 1"));
                let num2 = parseFloat(prompt("Ingrese numero 2"));
                let resultado =0; //null -undefine - NaN
                if (op === "1") {
                    resultado = num1 + num2;
            
                } 
                if (op === "2") {
                    resultado = num1 - num2;
            
                } 
                if (op === "3") {
                    resultado = num1 * num2;
            
                } 
                if (op === "4") {
                    if (num2 ===0) {
                        return alert("no se puede dividir por cero");
            
                    }else{
                        resultado = num1 / num2;
                    }
                    
            
                } 
                alert("El resultado es : " + resultado)
            }
            op = prompt("Escribe: \n 1 - Suma \n 2 -resta \n 3 - Multiplicacion \n 4 - Division \n 5 - Salir");
        }

          
};

//evento
boton.onclick=function () {
    operacion();
}