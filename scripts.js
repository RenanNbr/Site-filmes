const filmes = [];

function showForm() {
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('search-section').classList.add('hidden');
    document.getElementById('all-films-section').classList.add('hidden');
}

function showSearch() {
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('search-section').classList.remove('hidden');
    document.getElementById('all-films-section').classList.add('hidden');
}

function showAll() {
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('search-section').classList.add('hidden');
    document.getElementById('all-films-section').classList.remove('hidden');
    displayFilms(filmes, document.getElementById('film-list'));
}

function addFilm() {
    const nome = document.getElementById('nome').value;
    const classificacao = document.getElementById('classificacao').value;
    const duracao = parseInt(document.getElementById('duracao').value);
    const genero = document.getElementById('genero').value;
    const ano = parseInt(document.getElementById('ano').value);
    const sinopse = document.getElementById('sinopse').value;

    const filme = { nome, classificacao, duracao, genero, ano, sinopse };
    filmes.push(filme);

    document.getElementById('film-form').reset();
    alert('Filme adicionado com sucesso!');
}

function searchFilm() {
    const searchName = document.getElementById('search-name').value.toLowerCase();
    const result = filmes.find(filme => filme.nome.toLowerCase() === searchName);
    const searchResultDiv = document.getElementById('search-result');

    if (result) {
        searchResultDiv.innerHTML = `
            <h3>${result.nome}</h3>
            <p><strong>Classificação:</strong> ${result.classificacao}</p>
            <p><strong>Duração:</strong> ${result.duracao} minutos</p>
            <p><strong>Gênero:</strong> ${result.genero}</p>
            <p><strong>Ano:</strong> ${result.ano}</p>
            <p><strong>Sinopse:</strong> ${result.sinopse}</p>
        `;
    } else {
        searchResultDiv.innerHTML = '<p>Filme não encontrado.</p>';
    }
}

function displayFilms(filmes, container) {
    container.innerHTML = filmes.map(filme => `
        <div class="film">
            <h3>${filme.nome}</h3>
            <p><strong>Classificação:</strong> ${filme.classificacao}</p>
            <p><strong>Duração:</strong> ${filme.duracao} minutos</p>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <p><strong>Ano:</strong> ${filme.ano}</p>
            <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
        </div>
    `).join('');
}
