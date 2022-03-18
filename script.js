  var pontos,tempo,timer;

  function dimTemp(){
    tempo--; 
    document.getElementById("tempo").textContent= tempo;
    if(tempo <= 0 ){
      clearInterval(timer);
      alert("Você conseguiu pegar " +pontos+ " bandeiras");
      iniciarJogo();
    }
  }

  function iniciarJogo(){
    var Num_Flag = prompt("Digite o numero de Bandeiras");
    var Tempo_inicial = prompt("Digite o tempo em segundos"); 
    pontos = 0;
    tempo = Tempo_inicial;
    var tela = document.getElementById("tela");
    tela.innerHTML = '';
    
    for(let i = 0; i < Num_Flag; i++){
      var flag = document.createElement("img"); 
      flag.src = "imgs/bandeirazul.png";
      flag.id = "f"+i;
      flag.onclick = function(){
        pegarBandeira(this);
      }
         tela.appendChild(flag);
      }
        timer = setInterval(dimTemp,1000);
      }

  function pegarBandeira(elemento){
    elemento.src = "imgs/bandeiravermelha.png";
    document.getElementById("pontos").textContent = ++pontos;
  }