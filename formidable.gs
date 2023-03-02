function createForm() {
  // Spécifiez l'ID de la feuille de calcul contenant les questions
  var sheetId = "SPREADSHEET_ID";
  
  // Ouvrez la feuille de calcul et récupérez les données
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName("SHEET_NAME");
  var data = sheet.getDataRange().getValues();
  
  // Create a form
  var form = FormApp.create('new survey');
  
  // Pour chaque question dans la feuille de calcul, créez une question dans le formulaire
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var question = row[0];    

    var item = form.addScaleItem();
    item.setTitle(question)
      .setBounds(0, 5);
  }
  Logger.log(form.getPublishedUrl())
}
