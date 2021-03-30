function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idadee = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idadee >=0 && idadee < 10){
                //criança
                img.setAttribute('src', 'nenem-m.png')
            } else if (idadee < 21){
                //jovem
                img.setAttribute('src','jovem-m.png')

            } else if (idadee < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idadee >=0 && idadee < 10){
                img.setAttribute('src', 'nenem-f.png')
                //criança
            } else if (idadee < 21){
                //jovem
                img.setAttribute('src','jovem-f.png')
            } else if (idadee < 50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
       res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idadee} anos.`
         res.appendChild(img)
    }
}