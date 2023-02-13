//Carregar o formulário com os campos em questão escondidos
$(document).ready(function () {
    $(txtnometerceiro).hide();
    $(txtempresa).hide();
    $(tabeladep).hide();
});


//função para zerar o valor dos campos
function esvaziar() {
    document.getElementById("txtmatricula").value = "";
    document.getElementById("txtcpf").value = "";
    document.getElementById("txtcargo").value = "";
    document.getElementById("txtsetor").value = "";
    document.getElementById("txtsexo").value = "";
}
//função para travar os campos
function travar() {
    $('input[name="txtsetor"]').attr('readonly', true);
    $('input[name="txtcargo"]').attr('readonly', true);
    $('input[name="txtsexo"]').attr('readonly', true);
    $('input[name="txtcpf"]').attr('readonly', true);
    $('input[name="txtempresa"]').attr('readonly', true);
    $('input[name="txtmatricula"]').attr('readonly', true);
}
//função para liberar os campos
function liberar() {
    $('input[name="txtsetor"]').removeAttr('readonly');
    $('input[name="txtcargo"]').removeAttr('readonly');
    $('input[name="txtsexo"]').removeAttr('readonly');
    $('input[name="txtcpf"]').removeAttr('readonly');
    $('input[name="txtempresa"]').removeAttr('readonly');
    $('input[name="txtmatricula"]').removeAttr('readonly');
}


//Preencher campos em função do valor escolhido no zoom
function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputId == "txtnome") {

        document.getElementById("txtmatricula").value = selectedItem["txtMatricula"]
        document.getElementById("txtcpf").value = selectedItem["CPF"];
        document.getElementById("txtcargo").value = selectedItem["txtCargo"];
        document.getElementById("txtsetor").value = selectedItem["txtSetor"];
        document.getElementById("txtsexo").value = selectedItem["txtSexo"];
    }
}
//Excluir campos caso o zoom seja excluído
function removedZoomItem(removedItem) {
    if (removedItem.inputId == "txtnome") {
        document.getElementById("txtmatricula").value = "";
        document.getElementById("txtcpf").value = "";
        document.getElementById("txtcargo").value = "";
        document.getElementById("txtsetor").value = "";
        document.getElementById("txtsexo").value = "";
    }
}

//função para liberar/bloquear campos em função do vínculo impregatício 
function terceiro() {
    var select = document.getElementById("txtvinculo");
    var opcaoTexto = select.options[select.selectedIndex].text;
    if (opcaoTexto == 'Terceiro') {
        esvaziar();
        $("#tabeladep").hide();
        $("#campoNome").hide();
        $("#txtnometerceiro").show();
        $("#txtempresa").show();
        liberar();

    } else {
        if (opcaoTexto == "Diretor" || opcaoTexto == "Cedido" || opcaoTexto == "Empregado") {
            $("#tabeladep").show();
            $("#campoNome").show()
            $("#txtnometerceiro").hide();
            travar();
        } else {
            $("#tabeladep").hide();
            $("#campoNome").show();
            $("#txtnometerceiro").hide();
            $("#txtempresa").hide();
            travar();
        }
    }
}

