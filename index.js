/* tasas de cambio a peso chileno */
const dolarus = {nombre: "Dolares US", valor: 882.51};
const euro = {nombre: "Euros", valor: 882.35};
const pesomex = {nombre: "Pesos Mexicanos", valor: 44.06};
const pesoarg = {nombre: "Pesos Argentinos", valor: 6.38};   
const pesocol = {nombre: "Pesos Colombianos", valor: 0.20};
const sol = {nombre: "Soles Peruanos", valor: 230.29};
let costo = 0;

/* funcion para calcular precio en pesos chilenos */
const precioClp = (cambio, cantidad) => {
    let precio = cambio*cantidad;
    return precio;
}

/* funcion para calcular precio en otras divisas */
const precioDiv = (divCom, divPag, cantidad) => {
    let precio = (cantidad*divCom)/divPag;
    return precio;
}

/*divisa que desea comprar */
let divisacom = prompt("Por favor seleccione la divisa que desea adquirir: 1-Dolar US / 2-Euro / 3-Peso Mex / 4-Peso Arg / 5-Peso Col / 6-Sol");
divisacom = parseInt(divisacom);
switch (divisacom) {
    case 1:
        divisacom = dolarus;      
        break;

    case 2:
        divisacom = euro;      
        break;

    case 3:
        divisacom = pesomex;      
        break;    
    
    case 4:
        divisacom = pesoarg;      
        break; 
        
    case 5:
        divisacom = pesocol;      
        break;   
        
    case 6:
        divisacom = sol;      
        break;

    default:
        alert("La opcion seleccionada es invalida")
        break;
}

/* cantidad a comprar */
let cantidad = prompt("Ingrese la cantidad que desea comprar: ");

/* divica con la que va a pagar y costo */
let divisapag = prompt("Por favor seleccione la divisa con la que paga: 1-Peso CLP / 2-Dolar US / 3-Euro / 4-Peso Mex / 5-Peso Arg / 6-Peso Col / 7-Sol");
divisapag = parseInt(divisapag);
switch (divisapag) {
    
    case 1:
        costo = precioClp(divisacom.valor, cantidad);
        alert (`Por la compra de ${cantidad} ${divisacom.nombre} debe pagar ${costo} Pesos Chilenos.`);
        break;
    
    case 2:
        divisapag = dolarus;   
        costo = precioDiv(divisacom.valor, divisapag.valor ,cantidad);
        alert (`Por la compra de ${cantidad} ${divisacom.nombre} debe pagar ${costo} ${divisapag.nombre}`);   
        break;

    case 3:
        divisapag = euro;  
        costo = precioDiv(divisacom.valor, divisapag.valor ,cantidad);
        alert (`Por la compra de ${cantidad} ${divisacom.nombre} debe pagar ${costo} ${divisapag.nombre}`);      
        break;

    case 4:
        divisapag = pesomex;  
        costo = precioDiv(divisacom.valor, divisapag.valor ,cantidad);
        alert (`Por la compra de ${cantidad} ${divisacom.nombre} debe pagar ${costo} ${divisapag.nombre}`);      
        break;    
    
    case 5:
        divisapag = pesoarg;  
        costo = precioDiv(divisacom.valor, divisapag.valor ,cantidad);
        alert (`Por la compra de ${cantidad} ${divisacom.nombre} debe pagar ${costo} ${divisapag.nombre}`);      
        break; 
        
    case 6:
        divisapag = pesocol;
        costo = precioDiv(divisacom.valor, divisapag.valor ,cantidad);
        alert (`Por la compra de ${cantidad} ${divisacom.nombre} debe pagar ${costo} ${divisapag.nombre}`);        
        break;   
        
    case 7:
        divisapag = sol;     
        costo = precioDiv(divisacom.valor, divisapag.valor ,cantidad);
        alert (`Por la compra de ${cantidad} ${divisacom.nombre} debe pagar ${costo} ${divisapag.nombre}`); 
        break;

    default:
        alert("La opcion seleccionada es invalida")
        break;
}