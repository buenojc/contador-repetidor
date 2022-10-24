const setTime = document.getElementById('set-time');
const setRepetition = document.getElementById('set-repetition')
const buttonAddTime = document.getElementById('add-time');
const buttonAddRepetition = document.getElementById('add-repetition')
const buttonRemoveRepetition = document.getElementById('remove-repetition')

// setTime.value = '00:00'
setRepetition.value = 1

buttonAddRepetition.addEventListener('click', (e) => {
    e.preventDefault();
    setRepetition.value = parseInt(setRepetition.value) + 1;

})


buttonRemoveRepetition.addEventListener('click', (e) => {
    e.preventDefault();
    if(setRepetition.value > 1){
        setRepetition.value = parseInt(setRepetition.value) - 1;
    }
})


setRepetition.addEventListener('input', e => {
    let novaString = setRepetition.value.replace(/\D+/g, '')
    setRepetition.value = novaString;
    console.log(novaString)
})


setTime.addEventListener('input', e => {
    let novaString = setTime.value.replace(/\D+/g, '')
    console.log(novaString.length)


    switch(novaString.length){

        case 1 || 2:
            setTime.value = novaString;
            break;

        case 2:
            let mascara = setTime.value.replace(':' ,'')
            setTime.value = mascara;
            console.log(mascara)
            console.log('Pegou')
            break;


        case 3:
            let mascara3Digitos = novaString.replace(/(\d)(\d{2})/, '$1:$2')
            setTime.value = mascara3Digitos;
            break;


        case 4:
            let mascara4Digitos = novaString.replace(/(\d{2})(\d{2})/, '$1:$2')
            setTime.value = mascara4Digitos;
            break;

        case 5:
            let mascara5Digitos = novaString.replace(/(\d{2})(\d{2})(\d{1})/, '$1:$2:$3')
            setTime.value = mascara5Digitos;
            break;

        case 6:
            let mascara6Digitos = novaString.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3')
            setTime.value = mascara6Digitos;
            break;


        case 8:
            let mascara7Digitos = novaString.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3')
            setTime.value = mascara7Digitos;
            break;
        
        
        default:
            break;

    }

    // if(setTime.value.length > 6 ){
    //     let adicionaFormato = novaString.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3')
    //     setTime.value = adicionaFormato;
    // }
        
    // if(setTime.value.length > 5 && setTime.value.length <= 5 ){
    //     console.log('Chegou')
    //     let adicionaFormato = novaString.replace(/(\d)(\d{2})(\d)/, '$1:$2:$3')
    //     setTime.value = adicionaFormato;
    // }
    
    // if(setTime.value.length > 2 && setTime.value.length < 5){
    //     let adicionaFormato = novaString.replace(/(\d{2})(\d{2})/, '$1:$2')
    //     setTime.value = adicionaFormato;
    // }

    // if(setTime.value.length > 3 && setTime.value.length < 4){
    //     let adicionaFormato = novaString.replace(/(\d{2})(\d{2})/, '$1:$2')
    //     setTime.value = adicionaFormato;
    // }


    // if(setTime.value.length > 2 && setTime.value.length < 4){
    //     let adicionaFormato = novaString.replace(/(\d)(\d{2})/, '$1:$2')
    //     setTime.value = adicionaFormato;
    // }


})