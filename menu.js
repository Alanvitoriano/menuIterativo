 let senhaCerta = 27
 
var botao = document.getElementById("menu")
var botao1 = document.getElementById("acesso")
botao.onmouseover = function() {
    var senha = document.getElementById('senha').value 
    if(senha == senhaCerta){   
        botao.style.float = ''
        botao1.onclick = function(){
            alert('parabens!!!! senha certa')
        }          
    }else if(senha != senhaCerta && botao.style.float === 'left' ){
        botao.style.float = 'right'
    } 
    else{
        botao.style.float = 'left'      
       
      
    }}
   

