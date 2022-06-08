function validarSenhaForca(){

 var senhaForca = document.getElementById("senhaForca").value;
 // alert(senhaForca) Caixa apenas para teste
var forca = 0
//Imprimir a senha
//document.getElementById("impsenha").innerHTML = `Senha ${senhaForca}`

if((senhaForca.length >= 4) && (senhaForca.length <= 7 )){

  forca += 10;

}else if(senhaForca.length > 7) {



  forca += 25

}

if((senhaForca.length >= 5) && (senhaForca.match(/[a-z]+/) )){ //Indica que ele deve ter letra de A até Z 

   forca += 10;
 
 }

 if((senhaForca.length >= 6) && (senhaForca.match(/[A-Z]+/))){ //Indica que ele deve ter letra de A até Z 

   forca += 20;
 
 }

 if((senhaForca.length >= 7) && (senhaForca.match(/[@;*%!&]/))){

   forca += 25

 }


 mostrarForca(forca) 



}

function mostrarForca(forca){ // para o método ser mostrado dentro de outra function deve-se declarar o parâmetro no parênteses dessa função também
    // Imprimir Força da Senha.
   // document.getElementById("impForcaSenha").innerHTML = `Força ${forca} `

   if(forca < 30){

    document.getElementById("erroSenhaForca").innerHTML = `<div class="progress"><div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>`

   }else if(forca >= 30 && forca < 50) {

      document.getElementById("erroSenhaForca").innerHTML = `<div class="progress"><div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>`



}  else if(forca >= 50 && forca < 70) {

  document.getElementById("erroSenhaForca").innerHTML = `<div class="progress"><div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>`



}else if(forca >= 70 && forca < 100) {

  document.getElementById("erroSenhaForca").innerHTML = `<div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>`



}
}






   



