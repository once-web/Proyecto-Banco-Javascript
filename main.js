
var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t'},
    { nombre: "Maui", saldo: 67, password: '123' }
];


const btnAgregarTarea=document.querySelector('#boton');
const db=window.localStorage;
var posicion=0;
db.setItem("usuarios",JSON.stringify(cuentas));


btnAgregarTarea.onclick=(event)=>{
    event.preventDefault();
   
    let usuario = document.getElementById("nombreusuario").value;
    let contrasena = document.getElementById("contra").value;
    for (var i = 0; i < cuentas.length; i++) {
        if (usuario === cuentas[i].nombre && contrasena === cuentas[i].password) {
             posicion = i;
            
switch(posicion){
    case 0:window.location.href="http://localhost:5500/cliente0.html";break;
    case 1: window.location.href="http://localhost:5500/cliente1.html";break;
    case 2:window.location.href="http://localhost:5500/cliente2.html";
    db.setItem("pos",JSON.stringify(posicion));break;
           }     
        }
    }


}

function csaldo(){

let pos2=parseInt(db.getItem("pos"));
let USUARIOS=JSON.parse(db.getItem("usuarios"));
    document.getElementById('calculadora').style.display='block';
    document.getElementById('historial').style.display='none';
    document.getElementById('pantalla2').value=("Saldo Actual:$"+USUARIOS[pos2].saldo);
    

}
 
function borrar(){
    document.getElementById('calculadora').style.display='none';
    document.getElementById('historial').style.display='block';
    document.getElementById('calculadora4').style.display='none';
    document.getElementById('historial').style.display='block';
    document.getElementById('calculadora7').style.display='none';
    document.getElementById('historial').style.display='block';
    document.getElementById('calculadora8').style.display='none';
    document.getElementById('historial').style.display='block';
   }


   
   console.log(personas[pos2].saldo);
  

    function entrarAingresarSaldo(){

        document.getElementById('calculadora4').style.display='block';
        document.getElementById('historial').style.display='none';
    }
function ingresarSaldo(){
    
    let pos2=parseInt(db.getItem("pos"));
    let saldo = Number(document.getElementById("pantalla5").value);
    let res=0;
    res=cuentas[pos2].saldo+saldo;
    if(res>990){
        return confirm("No se puede realizar el deposito una cuenta debe tener como maximo $990.");
    }else{
        
    
        cuentas[pos2].saldo=res;
      console.log(cuentas[pos2].saldo);
      db.setItem("usuarios",JSON.stringify(cuentas));
    }
    
     

}

function ingresarAretirar(){

    document.getElementById('calculadora7').style.display='block';
    document.getElementById('historial').style.display='none';
}

function retirarSaldo(){
    let pos2=parseInt(db.getItem("pos"));
    let saldo = Number(document.getElementById("pantalla6").value);
    let res=0;
    res=cuentas[pos2].saldo-saldo;
    if(res<10){
        return confirm("No se puede realizar el retiro una cuenta debe tener como minimo $10.");
    }else{
        
    
        cuentas[pos2].saldo=res;
      console.log(cuentas[pos2].saldo);
      db.setItem("usuarios",JSON.stringify(cuentas));
    }

}

function entrarAtransferirSaldo(){

    document.getElementById('calculadora8').style.display='block';
    document.getElementById('historial').style.display='none';

}

function transferirSaldo(){
    let pos2=parseInt(db.getItem("pos"));
    let saldo = Number(document.getElementById("pantalla8").value);
    let codigocliente = Number(document.getElementById("pantalla9").value);
    let res=0;
    let res2=0;
res=cuentas[codigocliente].saldo+saldo;
res2=cuentas[pos2].saldo-saldo;
        cuentas[codigocliente].saldo=res;
        cuentas[pos2].saldo=res2;
      console.log(cuentas[codigocliente].saldo);
      db.setItem("usuarios",JSON.stringify(cuentas));
}

function cerrar(event){
    event.preventDefault();
    window.location.href="http://localhost:5500/index.html";
}