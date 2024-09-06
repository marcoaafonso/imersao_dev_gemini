// Função para pesquisar e exibir as rotas
function pesquisar() {
    // Obtém o elemento de entrada de texto (campo de pesquisa)
    var campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    // **Observação:** Atualmente, o valor do input não está sendo utilizado para a pesquisa.

    // Obtém a seção HTML onde os resultados serão exibidos
    const secao = document.querySelector('.resultados-pesquisa');

    if (campoPesquisa.trim() == "") {
        secao.innerHTML = "<p>Digite algo para ser pesquisado.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar o HTML a ser gerado
    var html = '';

    // Verifica se a seção de resultados foi encontrada
    if (secao !== null) {
        // Itera sobre cada rota no array
        rotas.forEach(rota => {
            
            // Se a rota tem o título igual ao digitado, inclui no resultado.
            if (rota.titulo.toLowerCase().includes(campoPesquisa) || rota.descricao.toLowerCase().includes(campoPesquisa)) {
                
                // Cria o HTML para cada rota, formatando as informações
                html += `<div class="item-resultado">
                    <h2 class="titulo">${rota.titulo}</h2>
                    <p class="descricao">${rota.descricao}</p>
                    <a href="${rota.localizacao}" class="localizacao" target="_blank">Localização</a>
                    </div>`;
            }

        });

        // Atualiza o conteúdo HTML da seção com os resultados gerados
        if (html != '') {
            secao.innerHTML = html;
        }
        else {
            secao.innerHTML = "<p>Nenhuma rota encontrada!</p>";
        }
        
    }
}