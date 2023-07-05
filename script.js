function multiply(){
    let n1 = document.querySelector('#n1')
    let operation = document.querySelector('#operation')
    let n2 = document.querySelector('#n2')
    let div = document.querySelector('div')
    n1 = n1.value
    operation = operation.value
    n2 = n2.value
    
    // Verificando qual a operação requerida
    if(operation == '-'){
        result = parseInt(n1) - parseInt(n2) 
    }
    else if(operation == '+'){
        result = parseInt(n1) + parseInt(n2) 
    }
    else if(operation == '*'){
        result = parseInt(n1) * parseInt(n2)
    }
    else if(operation == '/'){
        result = parseInt(n1) / parseInt(n2)
    }
    else{
        result = 'Inválido'
    }

    console.log(result)
    div.innerHTML = result
}