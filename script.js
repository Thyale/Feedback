var notaDada = 0

function notas(n){
    if(n == 1){
      notaDada = 1
    }

    if(n == 2){
      notaDada = 2
    }

    if(n == 3){
      notaDada = 3
    }

    if(n == 4){
      notaDada = 4
    }

    if(n == 5){
      notaDada = 5
    }
}

function EnviarNota(){
    let parte1 = window.document.querySelector("section.Avaliacao1-2")
    let parte2 = window.document.querySelector("section.Avaliacao2-2")
    parte1.style.display = "none"
    parte2.style.display = "flex"

    let TextoFinalAvaliacao = window.document.querySelector("p.TextoFinalAvaliacao")
    TextoFinalAvaliacao.innerHTML = `Voçê selecionou ${notaDada} de 5`
}
