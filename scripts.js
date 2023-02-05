let chave = "63c7f871f585b62115f72cbd86a4d554"


function ColocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

    

async function BuscarCidade(cidade){
    let dados = await fetch
        ("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())

        ColocarNaTela(dados)
}

function cliqueiNoBotao (){
    let cidade = document.querySelector(".input-cidade").value

    BuscarCidade(cidade)
}
