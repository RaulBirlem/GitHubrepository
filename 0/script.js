function Check() {
    var data = new Date()
    var year =data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > year) {
        window.alert('Incorrect data!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var years = year - Number(fano.value)
        var gender = ''
        if (fsex[0].checked) {
            gender = 'Men'
        }else if (fsex[1].checked) {
            gender = 'Woman'
        }
    res.innerHTML = `  ${gender} with ${years} years !` 
    }
}
