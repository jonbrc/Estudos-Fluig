//Esse script não precisa ser referenciado no HTML.
function validateForm(form) {
    var msg = "";
    //informações do usuário
    if (form.getValue("nome") == "") {
        msg += "Campo Nome é Obrigatório ";
    }
    if (form.getValue("email") == "") {
        msg += "Campo Email é Obrigatório ";
    }
    if (form.getValue("telefone") == "") {
        msg += "Campo Telefone é Obrigatório ";
    }
    if (form.getValue("identidade") == "") {
        msg += "Campo de Identidade é Obrigatório ";
    }
    if (form.getValue("nascimento") == "") {
        msg += "Campo Data de Nascimento é Obrigatório ";
    }
    //informações do ponto
    if (form.getValue("tipoPonto") == "") {
        msg += "Campo tipoPonto é Obrigatório ";
    }
    if (form.getValue("diasFuncionamento") == "") {
        msg += "Campo dias de funcionamento é Obrigatório ";
    }
    if (form.getValue("cep") == "") {
        msg += "Campo CEP é Obrigatório ";
    }
    if (form.getValue("numero") == "") {
        msg += "Campo Numero é Obrigatório ";
    }
    if (form.getValue("bairro") == "") {
        msg += "Campo Bairro é Obrigatório ";
    }
    if (form.getValue("cidade") == "") {
        msg += "Campo Cidade é Obrigatório ";
    }
    if (form.getValue("estado") == "") {
        msg += "Campo Estado é Obrigatório ";
    }
    //Para checkbox é valido usar o valor "on" (ela estando marcada).
    if (form.getValue("segunda" != "on") && form.getValue("terca" != "on") && form.getValue("quarta" != "on")
        && form.getValue("quinta" != "on") && form.getValue("sexta" != "on") && form.getValue("sabado" != "on")
        && form.getValue("domingo" != "on")) {
        msg += "É necessário escolher ao menos um dia de funcionamento";
    }

    //responsáveis
    //Esse método checa os indídces de uma tabela.
    var responsáveis = form.getChildrenIndexes("responsaveisTabela");
    if (responsáveis.length == 0) {
        msg += "o campo responsáveis é obrigatório"
    }
    // A função throw envia uma mensagem para o usuário e não executa nenhuma ordem depois de si.
    if (form.getValue("Valor") == "") {
        msg += "Campo Valor é Obrigatório ";
    }
    //Se todos os campos forem preenchidos o valor de "msg" vai ser nulo, caso contrário o formulário não vai ser salvo
    //por conta da função "throw".
    if (msg != "") {
        throw msg;
    }
}