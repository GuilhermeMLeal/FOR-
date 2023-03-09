
/*class Animal {
    constructor(cor, idade) {
        this.corDePelo = cor
    }
}

var cachorro = new Animal("branco", 5)

console.log(cachorro.corDePelo)*/

/*class Animal{
    constructor(cor, tamanho , raca){
        this.Cor = cor
        this.Tamanho = tamanho
        this.raca = raca
    }
    chama(){
        console.log("A cor deste animal é " + this.Cor+ " seu tamanho é " +this.Tamanho )
    }
}
 
const cachorro ={
   Bulldog :  new Animal(preto,grande,Bulldog),
   Puddle : new Animal(branco, pequeno, puddle),
}
cachorro(Bulldog).chama()*/
class Aluno {
    constructor(nome, curso, semestre) {
        this.nome = nome,
            this.curso = curso,
            this.semestre = semestre
    }
    get cursoAluno() {
        return this.curso
    }
    set nomeAluno(nomeAluno) {
        this.nome = nomeAluno
    }

}

let lucas = new Aluno('', 'Engenharia', 5)
lucas.nomeAluno = "Guilherme"
console.log(lucas.cursoAluno)
console.log(lucas.nome)