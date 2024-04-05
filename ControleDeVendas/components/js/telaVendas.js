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
// ----------- FIM VALIDAÇÕES MENU MODAL------------------- 



//Validação para o botão Excluir

let deleteButtons = document.querySelectorAll('.deleteButton');
deleteButtons.forEach(function (button) {
    button.addEventListener('click', function () {

        let row = this.parentElement.parentElement;
        let confirmDelete = confirm("Tem certeza de que deseja excluir permanentemente este produto?");

        if (confirmDelete) {
            row.remove();
        }

    });
});
// ----------- FIM ------------------- 





// PROCURAR POR ID

//PRECISA FAZER UMA VALIDAÇÃO AINDA

// ----------- FIM ------------------- 


// FUNÇÃO DE PESQUISAR ITENS NA BARRA DE PESQUISA

function searchTable() {
    var input = document.getElementById('inputSearch').value.toUpperCase();
    var table = document.getElementById('tabela-produtos');
    var tr = table.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName('td');
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                if (td[j].innerHTML.toUpperCase().indexOf(input) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}
// ----------- FIM ------------------- 

//FUNÇÃO BOTÃO FILTRAR

function openFilterMenu() {
    var menu = document.getElementById("filterMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function sortTable(column, ascending) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tabela-produtos");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[column];
            y = rows[i + 1].getElementsByTagName("TD")[column];
            if (ascending ? (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) : (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    openFilterMenu();
}
// ----------- FIM ------------------- 