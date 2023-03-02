function createForm() {
  // Spécify ID of the sheet with questions
  var sheetId = "SPREADSHEET_ID";
  
  // Get the questions
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName("SHEET_NAME");
  var data = sheet.getDataRange().getValues();
  
  // Create a form
  var form = FormApp.create('new survey');
  
  // Create questions
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var question = row[0];    

    var item = form.addScaleItem();
    item.setTitle(question)
      .setBounds(0, 5);
  }
  Logger.log(form.getPublishedUrl())
}
