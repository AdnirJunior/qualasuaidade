function verificar() {
    let data= new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("txtano");
    var res = document.getElementById("res");

    if(fano.value.length == 0 || fano.nodeValue > ano){
        alert("Verifique os dados e tente novamente!")
    } else {
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        
        let genero = '';
        let img = document.createElement("img")
        img.setAttribute("id", "foto");
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <=10) {
                img.setAttribute("src", "menino.png")
            } else if (idade < 21){
                img.setAttribute("src", "ojovem.png")
            } else if (idade >=21 && idade <= 50){
                img.setAttribute("src", "homem.png")
            } else {
                img.setAttribute("src", "idoso.png")
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <=10) {
                img.setAttribute("src", "menina.png")
            } else if (idade < 21){
                img.setAttribute("src", "ajovem.png")
            } else if (idade >=21 && idade <= 50){
                img.setAttribute("src", "mulher.png")
            } else {
                img.setAttribute("src", "idosa.png")
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.alignItems = "center"
        res.appendChild(img);
    }
}