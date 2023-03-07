//Inverter um vetor sem usar .reverse e sem usar outro vetor,apenas uma variável auxiliar
/*var n = [3, 4, 5, 1, 6]
for (let controle = 0; controle < (n.length / 2); controle++) {
    var aux = n[n.length - 1 - controle]
    n[n.length - 1 - controle] = n[controle]
    n[controle] = aux
   
}
console.log(n)*/

/*var num = [3, 6, 1, 7, 9, 4, 2]
var aux


for(j=0;j<num.length;j++){
for(i=0;i<(num.length-1);i++){
    if(num[i]>num[i+1]){
        aux = num[i]
        num[i]= num[i+1]
        num[i+1]= aux
    }
    
}
}
console.log(num)*/

var vetor = [4,6,99,21,9,0,68,12,31,21,289,2,2,0,656,1,2,0,6,6]

console.log(pesquisar(2))
// Pesquisar um número qualquer e se ele existir retornar todas as suas posições de ocorrencia caso contrário exibir " n não encontrado".

function pesquisar(n){
    let aux = [];

    for(let i=0;i<vetor.length;i++){
        if(vetor[i]==n)
            aux.push(i)
    }
    if(aux.length==0)
        return `O numero ${n} nao foi encontrado`
    return `O numero ${n} foi encontrado na(s) posição(ões) ${aux.join('-')}`
}