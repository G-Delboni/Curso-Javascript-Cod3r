// Callback -> passa a função como parâmetro para outra função

document.getElementsByTagName('body')[0].onclick = function e(){
    console.log('O evento ocorreu!')
}