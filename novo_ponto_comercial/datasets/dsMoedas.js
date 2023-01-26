function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
   //função que cria o datasetas
    var ds = DatasetBuilder.newDataset();
   //função que adciona colunas ao dataset
    ds.addColumn("simbolo");
    ds.addColumn("nomeMoeda");
  //função que adcionalinhas ao dataset
    ds.addRow(new Array("R$", "Real"));
    ds.addRow(new Array("US$", "Dólar Americano"));
    ds.addRow(new Array("U$", "Peso Uruguaio"));
    ds.addRow(new Array("€", "Euro"));
    ds.addRow(new Array("£", "Libra Esterlina"));
    ds.addRow(new Array("C$", "Dólar Canadense"));
    //Essencial retornar o dataset (nome da variável criada)
    return ds;

}
function onMobileSync(user) {

}