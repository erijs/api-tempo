const key = 'd7a8d944e376f6e9e6fd3af2bb39f6d9'
const input = document.getElementById('input_cidade')

function mudando()  {
    document.getElementById('escolha').textContent = `${document.getElementById('input_cidade').value}`;
    let cidade = document.getElementById('input_cidade').value;
    if (cidade == '') {
        document.getElementById('escolha').textContent = `Aguardando...`;
        document.getElementById('icone').setAttribute('src', ``);
        document.getElementById('res_titulo').textContent=``;
        document.getElementById('temperatura').textContent=``;
    } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`;
    busca(url)
    }
}
input.addEventListener('input', () => {
    mudando()
})

function busca(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            if (data.message == 'city not found') {
                document.getElementById('res_titulo').textContent = `Cidade não encontrada`;
                document.getElementById('temperatura').textContent = ``
                document.getElementById('icone').setAttribute('src', `https://png.pngtree.com/png-vector/20230426/ourlarge/pngtree-sad-emoji-dark-mode-glyph-ui-icon-displeased-dislike-negative-vector-png-image_51766110.jpg`);
            }else {
            console.log(data)
            document.getElementById('res_titulo').textContent=`Em ${data.name} ${data.weather[0].description}`
            document.getElementById('temperatura').textContent=`${data.main.temp.toFixed(1)} \u00B0C`
            document.getElementById('escolha').textContent = `${data.name}`;
            document.getElementById('icone').setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            }
        }
    )
}
