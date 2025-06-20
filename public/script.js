

var keys = []
// verificar se o usuario já está logado neste dispositivo
var rep = localStorage.getItem('log_dev_sistem')
console.log(rep)
if(rep=='log'){
    document.getElementById('area_inicio').remove()

            document.body.style.overflowY='scroll'

}


// sistem de notificação toda vez que der erro ou der certo notificar
// para usar é chmar alertar(' {mensagem} ' , [1 ou 2 ou 3] )
// 1 > notificação verde 
// 2 > notifição de erro (vermelha)
// sem > notificação de atenção (roxo)
function alertar(msg,n){
    var ele = document.createElement('section')
    ele.id='alert'
    if(n==2){
        ele.style.backgroundColor='red'
    }else if(n==1){
        ele.style.backgroundColor='green'
    }
    ele.innerHTML=`<h1 id="mgs_alert">${msg}</h1>`
    document.body.appendChild(ele)
    setTimeout(()=>{
        ele.remove()
    },4000)
}

function entrar(){
    // quando o banco tiver pronto fazer a parte de login
    // por enquanto só capturar os valores e retornar no console log
    var email= document.getElementById('email_login').value
    var senha= document.getElementById('senha_login').value
    console.log('senha: '+senha+' email: '+email)
    // fazer verificação com o banco sobre se está logado ou não

    // fazer if com essa verificação 
        // SE ESTIVER LOGADO ENTRAR PARA A AUTENTIFICAÇÃO DE EMAIL
            document.getElementById('area_inicio').remove()
            alertar('Bem vindo ao connect dev',1)
            document.body.style.overflowY='scroll'
            localStorage.setItem('log_dev_sistem','log')
        // SE NÃO ESTIVER NOTIFICAR SOBRE 
            alertar('Usuario não encontrado',2)


}