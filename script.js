var btn = document.querySelector('input#btn')

btn.onclick = function () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
       window.alert('[ERROR] Verifique os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' /*usar vazio para ser preenchido conforme o checked*/
        var img = document.createElement('img') /*criando uma tag*/
        img.setAttribute('id', 'foto')/* criando id para tag*/
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criança-m.jpg')
            }else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-h.jpg')
            }else if (idade < 50) {
                img.setAttribute('src', 'img/adulto h.jpg')
            }else {
                img.setAttribute('src', 'img/idoso-m.jpg')
                
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criança f.jpg')
            }else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-f.jpg')
            }else if (idade < 50) {
                img.setAttribute('src', 'img/Sem título.png')
                
            }else {
                img.setAttribute('src', 'img/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) /*cria um <img> */
    }


}

