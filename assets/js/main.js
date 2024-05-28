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





document.addEventListener("DOMContentLoaded", function() {
    const customSelect = document.getElementById("customSelect");
    const selectSelected = customSelect.querySelector(".select-selected");
    const selectItems = customSelect.querySelector(".select-items");
    const options = Array.from(selectItems.querySelectorAll(".option"));
    const valorTotalInput = document.getElementById("valorTotal");
  
    // Atualizar a caixa de seleção com a contagem de itens selecionados
    function updateSelectedCount() {
      const selectedItems = selectItems.querySelectorAll("input[type='checkbox']:checked");
      selectSelected.textContent = selectedItems.length > 0 ? selectedItems.length + " selecionado(s)" : "Selecione uma opção";
    }
  
    // Função para calcular o valor total dos produtos selecionados
    function calcularValorTotal() {
      return options.map(option => {
        const checkbox = option.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
          return parseInt(option.dataset.value);
        }
        return 0;
      }).reduce((acc, curr) => acc + curr, 0);
    }
  
    // Atualiza o valor total quando uma opção é clicada
    function updateTotalValue() {
      const total = calcularValorTotal();
      valorTotalInput.value = total > 0 ? "Total: R$ " + total.toFixed(2) : "";
    }
  
    // Atualiza o valor total ao carregar a página
    updateTotalValue();
  
    // Atualiza o valor total quando uma opção é clicada
    options.forEach(option => {
      option.addEventListener("click", function() {
        updateSelectedCount();
        updateTotalValue();
      });
    });
  
    // Abrir/fechar a lista de opções
    selectSelected.addEventListener("click", function() {
      selectItems.classList.toggle("select-hide");
    });
  
    // Fechar a lista de opções ao clicar fora dela
    window.addEventListener("click", function(e) {
      if (!customSelect.contains(e.target)) {
        selectItems.classList.add("select-hide");
      }
    });
  });

