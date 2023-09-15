document.getElementById("buscarButton").addEventListener("click", function() {
    const cep = document.getElementById("cepInput").value;
    buscarCEP(cep);
  });
  function buscarCEP(cep) {
    cep = cep.replace(/\D/g, '');
  }

    function fetchClima() {
    const cidade = getElementById;
    const alterar = 'https://api.openweathermap.org/data/2.5/weather?q='+ cidade + '&units=metric&appid=';

    fetch(alterar)
        .then(response => response.json())
        .then(data => {
            // Exibir as informações do clima
            const info = document.getElementById('info');
            info.innerHTML = `
                <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
                <p><strong>Umidade:</strong> ${data.main.humidity}%</p>
                <p><strong>Descrição:</strong> ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar informações do clima:');
        });
}

// Chamar a função de busca quando a página carregar
window.onload = fetchClima;