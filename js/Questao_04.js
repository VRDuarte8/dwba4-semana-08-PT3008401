class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota; 
  }

  nomeCompleto(){
    return (this.primeiroNome + " " + this.segundoNome);
  }

  media(){
    return (this.primeiraNota*0.6)+(this.segundaNota*0.4);
  }

  situacao(){
    if(this.media() > 6){
      return "Aprovado";
    }
    return "Reprovado";
  }
}

function guardaAlunos(){
  var alunos = [new Aluno('João','da Silva', 7, 9.5),
                new Aluno('Vinicius','Duarte', 10, 10),
                new Aluno('Vitor','Valentim', 1, 0),
                new Aluno('Giovanna','Rodrigues', 5, 4),
                new Aluno('Matheus','Rezende', 10, 1)];
  
  alunos.forEach(mostraAlunos);
}

function mostraAlunos(caso){
  alert("Nome completo: " + caso.nomeCompleto() + 
        "\nMédia: " + caso.media() +
        "\nSituação: " + caso.situacao());
}

guardaAlunos();

