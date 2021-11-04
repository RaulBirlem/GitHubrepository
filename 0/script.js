function verificar() {
    var data = new Date()
    var ano =data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Dados incorretos')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
    res.innerHTML = `  ${gênero} com ${idade} anos !` 
    }
}
