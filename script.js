const key = 'd7a8d944e376f6e9e6fd3af2bb39f6d9'
const input = document.getElementById('input_cidade')

function mudando()  {
    console.log('mudou')
    document.getElementById('escolha').textContent = `${document.getElementById('input_cidade').value}`;
    let cidade = document.getElementById('input_cidade').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`;
    busca(url)
}
input.addEventListener('input', () => {
    mudando()
})

function busca(url) {
    console.log(url)
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            console.log(data)
            document.getElementById('res_titulo').textContent=`Em ${data.name} ${data.weather[0].description}`
            document.getElementById('temperatura').textContent=`${data.main.temp.toFixed(1)} \u00B0C`
            document.getElementById('escolha').textContent = `${data.name}`;
            document.getElementById('icone').setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
                
            }

    )
}
