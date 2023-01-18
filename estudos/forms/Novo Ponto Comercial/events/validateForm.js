function validateForm(form) {
    var msg = "";
    //informações do usuário
    if (form.getValue("Nome") == "") {
        msg += "Campo Nome é Obrigatório ";
    }
    if (form.getValue("Email") == "") {
        msg += "Campo Email é Obrigatório ";
    }
    if (form.getValue("Telefone") == "") {
        msg += "Campo Telefone é Obrigatório ";
    }
    if (form.getValue("Identidade") == "") {
        msg += "Campo de Identidade é Obrigatório ";
    }
    if (form.getValue("Nascimento") == "") {
        msg += "Campo Data de Nascimento é Obrigatório ";
    }
    //informações do ponto
    if (form.getValue("tipoPonto") == "") {
        msg += "Campo tipoPonto é Obrigatório ";
    }
    if (form.getValue("diasFuncionamento") == "") {
        msg += "Campo dias de funcionamento é Obrigatório ";
    }
    if (form.getValue("CEP") == "") {
        msg += "Campo CEP é Obrigatório ";
    }
    if (form.getValue("Numero") == "") {
        msg += "Campo Numero é Obrigatório ";
    }
    if (form.getValue("Bairro") == "") {
        msg += "Campo Bairro é Obrigatório ";
    }
    if (form.getValue("Cidade") == "") {
        msg += "Campo Cidade é Obrigatório ";
    }
    if (form.getValue("Estado") == "") {
        msg += "Campo Estado é Obrigatório ";
    }
    //Para checkbox é valido usar o valor "on" (ela estando marcada).
    if (form.getValue("segunda" != "on") && form.getValue("terca" != "on") && form.getValue("quarta" != "on")
        && form.getValue("quinta" != "on") && form.getValue("sexta" != "on") && form.getValue("sabado" != "on")
        && form.getValue("domingo" != "on")) {
        msg += "É necessário escolher ao menos um dia de funcionamento";
    }

    //responsáveis
    var responsáveis = form.getChildrenIndexes("responsaveisTabela");
    if (responsáveis.length == 0) {
        msg += "o campo responsáveis é obrigatório"
    }
    // A função throw envia uma mensagem para o usuário e não executa nenhuma ordem depois de si.
    if (form.getValue("Valor") == "") {
        msg += "Campo Valor é Obrigatório ";
    }
    if (msg != "") {
        throw msg;
    }
}