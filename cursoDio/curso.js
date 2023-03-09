//Conta Bancária
class ContaBancaria{
    constructor(agencia,numero,tipo ){
        this.Agencia = agencia
        this.Numero = numero
        this.Tipo = tipo
        this._saldo = 0
    }
    
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor>this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo = valor;

        return this._saldo
    } 
    depositar(valor){
        this._saldo = this._saldo = valor;
        return this._saldo
    }
}
class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero, cartaoCredito){
       super(agencia,numero);
       this.tipo= 'corrente';
       this.cartaoCredito = cartaoCredito

    }
    get cartaoCredito(){
        return this.cartaoCredito
    }
    set cartaoCredito(valor){
        return this.cartaoCredito = valor
    }
}
    class Poupanca extends ContaBancaria{
        constructor(agencia,numero){
           super(agencia,numero);
           this.tipo= 'poupança';
        }}
        class ContaUniversitaria extends ContaBancaria{
            constructor(agencia,numero){
               super(agencia,numero);
               this.tipo= 'universitaria';
            }
    sacar(valor){
        if(valor>500){
            return "Operação Negada"
        }
        this._saldo = this._saldo-valor
    }
}