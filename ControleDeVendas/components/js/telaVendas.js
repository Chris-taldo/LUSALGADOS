let menuMobile = document.getElementById('menu-mobile');
let menuBotao = document.getElementById('botao-abrir');
let abrirModal = document.getElementById('menu-modal');

/* menu mobile */
function menuShow() {
    if (menuMobile.classList.contains("active")) {
        menuMobile.classList.remove("active");
        document.body.style.overflow = "visible";
    } else {
        menuMobile.classList.add("active");
        menuBotao.classList.remove("active");
        document.body.style.overflow = "hidden";
    }
}

/* menu modal */
function modalShow() {
    if (!abrirModal.classList.contains("active")) {
        abrirModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function modalClose() {
    if (abrirModal.classList.contains("active")) {
        abrirModal.classList.remove("active");
        document.body.style.overflow = "visible";
    }
}

/* inputs modal */
function cestasChecked(e) {
    var show = document.getElementById('qntd-cestas');
    show.style.display = e ? "flex" : "none";
}

function garrafasChecked(e) {
    var show = document.getElementById('qntd-garrafas');
    show.style.display = e ? "flex" : "none";
}

function toalhasChecked(e) {
    var show = document.getElementById('qntd-toalhas');
    show.style.display = e ? "flex" : "none";
}

function recolhidoChecked(e) {
    var show = document.getElementById('nome-recolhido');
    show.style.display = e ? "flex" : "none";
}

function cancelarModal() {
    var cancelar = document.getElementById('menu-modal');
    cancelar.classList.remove('active');
    document.body.style.overflow = "visible";
    console.log("salve")
}






//Button Editar
        // Seleciona todos os botões de edição do código:
        let editButtons = document.querySelectorAll('.editButton');
        
        // Adiciona o evento de clique a cada botão do código:
        editButtons.forEach(function(button) {
          button.addEventListener('click', function() {
        // Pega o TD anterior ao botão (o TD do produto no caso é o do valor do produto):
            let productTd = this.parentElement.previousElementSibling;
        
            // Solicita um novo valor ao usuário do produto:
            let newValue = prompt('Digite o novo valor para o produto');
        
            // Atualiza o valor do TD do produto:
            productTd.textContent = newValue;
          });
        });

        
 //Button Excluir
           // Seleciona todos os botões de exclusão
            let deleteButtons = document.querySelectorAll('.deleteButton');

            // Adiciona um evento de clique a cada botão
                deleteButtons.forEach(function(button) {
                button.addEventListener('click', function() {
             // Pega a linha (tr) que contém o botão clicado
                let row = this.parentElement.parentElement;

                // Confirmação de exclusão permanente
                let confirmDelete = confirm("Tem certeza de que deseja excluir permanentemente este produto?");

                // Se o usuário confirmar, remove a linha da tabela
                if (confirmDelete) {
                row.remove();
                }
                });
                });
