const botaoCadastro = document.getElementById("button-cadastrar");

// Adiciona um ouvinte de eventos ao botão de cadastro
botaoCadastro.addEventListener('click', adicionarUsuario);

// Função para buscar todos os cadastros do Firebase e atualizar a tabela
function buscarCadastrosNoFirebase() {
    // Consultar os dados do Firebase
    firebase.firestore().collection('vendas').get().then(snapshot => {
        const tbody = document.getElementById('lista-usuarios');
        tbody.innerHTML = ''; // Limpar os dados existentes na tabela

        snapshot.docs.forEach(doc => {
            const userData = doc.data();
            const newRow = `
                <tr>
                    <td>${userData.nomeCompleto}</td>
                    <td>${userData.celular}</td>
                    <td>${userData.endereco}</td>
                    <td>${userData.data}</td>
                    <td>${userData.horario}</td>
                    <td>${userData.tipo}</td>
                    <td>${userData.quantidade}</td>
                    <td>${userData.cafe}</td>
                    <td>${userData.bebida}</td>
                    <td>${userData.salgadosFritos}</td>
                    <td>${userData.salgadosAssados}</td>
                </tr>
            `;
            tbody.innerHTML += newRow;
        });
        // Adiciona um ouvinte de eventos a todos os ícones de exclusão
        const iconsDelete = document.querySelectorAll('.delete');
        iconsDelete.forEach(icon => {
            icon.addEventListener('click', () => {
                const userId = icon.dataset.id; // Obtém o ID do usuário associado ao ícone de exclusão
                deletarCadastro(userId); // Chama a função para deletar o usuário com o ID correspondente
            });
        });
    }).catch(error => {
        console.error("Erro ao recuperar documentos:", error);
    });
}

// Função para adicionar um novo usuário
function adicionarUsuario(e) {
    e.preventDefault();
    const data = document.querySelector('#input-data').value;
    const horario = document.querySelector('#input-hr').value;
    const telefone = document.querySelector('#input-number').value;
    const nome = document.querySelector('#input-nome').value;
    const endereco = document.querySelector('#input-endereco').value;
    const tipo = document.querySelector('#input-tipo').value;
    const quantidade = document.querySelector('#input-quantidade').value;
    const cafe = document.querySelector('#input-cafe').value;
    const bebida = document.querySelector('#input-bebida').value;
    const salgadosFritos = document.querySelector('#input-salg-frito').value;
    const salgadosAssados = document.querySelector('#input-salg-assado').value;
    const doces = document.querySelector('#input-doces').value;
    
    firebase.firestore().collection('vendas').add({
        nomeCompleto: nome,
        endereco: endereco,
        celular: telefone,
        data: data,
        horario: horario,
        tipo: tipo,
        quantidade: quantidade,
        cafe: cafe,
        bebida: bebida,
        salgadosFritos: salgadosFritos,
        salgadosAssados: salgadosAssados,
        doces: doces,
    })
    .then(() => {
    console.log("Venda adicionada com sucesso");
    // Limpa os campos de entrada após adicionar a venda
    document.getElementById('form-venda').reset();
    buscarVendasNoFirebase();
})
.catch((error) => {
    console.error("Erro ao adicionar venda: ", error);
    // Lidar com o erro adequadamente
});

}


// Função para deletar um cadastro do Firebase e da tabela
function deletarCadastro(id) {
    firebase.firestore().collection('vendas').doc(id).delete()
    .then(() => {
        console.log("Cadastro deletado com sucesso");
        // Atualiza a tabela com os novos dados do Firebase após a exclusão
        buscarCadastrosNoFirebase();
    })
    .catch(error => {
        console.error("Erro ao deletar cadastro:", error);
    });
}

// Chama a função para buscar e exibir os cadastros do Firebase ao carregar a página
buscarCadastrosNoFirebase();

// Função para buscar os dados de um usuário específico no Firebase
function buscarUsuario(id) {
    return firebase.firestore().collection('vendas').doc(id).get();
}

// Função para preencher os campos do modal com os dados do usuário
function preencherCamposModal(userData) {
    document.getElementById('input-data').value = userData.data;
    document.getElementById('input-hr').value = userData.horario;
    document.getElementById('input-number').value = userData.celular;
    document.getElementById('input-nome').value = userData.nomeCompleto;
    document.getElementById('input-endereco').value = userData.endereco;
    document.getElementById('input-tipo').value = userData.tipo;
    document.getElementById('input-quantidade').value = userData.quantidade;
    document.getElementById('input-cafe').value = userData.cafe;
    document.getElementById('input-bebida').value = userData.bebida;
    document.getElementById('input-salg-frito').value = userData.salgadosFritos;
    document.getElementById('input-salg-assado').value = userData.salgadosAssados;
    document.getElementById('input-doces').value = userData.doces;
}


// Função para abrir o modal com as informações do usuário para edição
function abrirModalEditar(id) {
    console.log("Abrindo modal de edição para o usuário com ID:", id);

    // Buscar os dados do usuário no Firebase
    buscarUsuario(id).then(snapshot => {
        const userData = snapshot.data();
        // Preencher os campos do modal com os dados do usuário
        preencherCamposModal(userData);
    }).catch(error => {
        console.error("Erro ao buscar usuário:", error);
    });
}

// Adiciona um ouvinte de eventos aos ícones de edição
const iconsEdit = document.querySelectorAll('.edit');
iconsEdit.forEach(icon => {
    icon.addEventListener('click', () => {
        const userId = icon.dataset.id; // Obtém o ID do usuário associado ao ícone de edição
        abrirModalEditar(userId); // Chama a função para abrir o modal com as informações do usuário
    });
});

// Adiciona um ouvinte de eventos ao botão de cadastro
document.getElementById("button-cadastrar").addEventListener('click', adicionarUsuario);
