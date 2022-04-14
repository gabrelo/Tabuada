function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor digite um número')
    }
    else{
        let n = Number(num.value) /*número que a pessoa vai digitar*/
        let c = 1 /*é o contador vai de 1 a 10*/
        tab.innerHTML = '' /*pra resetar o select e aparecer apenas a tabuada atual*/
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` /*não faz sentido essa linha no JS, apenas para PHP*/
            tab.appendChild(item) /*para aparecer a tabuada*/
            c++ /*precisa incrementar o valor de c*/
        }
    }
}       

/*dá pra fazer a tabuada usando FOR, fica mais fácil do que com WHILE*/