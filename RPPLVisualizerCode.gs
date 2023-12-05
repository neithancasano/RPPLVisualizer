function doGet() {
  return HtmlService.createHtmlOutputFromFile('Page')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getDataFromSheet() {
  // Use Google Apps Script to retrieve data from the Google Sheets spreadsheet.
  // You can use methods like getSheetByName, getRange, getValues, etc.
  
  // var sheet = SpreadsheetApp.openById('1fUkQJ5sFQaqxp4FzZErqHtxm75LyvGYnpptt_XDfjwk').getSheetByName('responses1');  
  var sheet = SpreadsheetApp.openById('1mk2W5gHQos_ewM1Oupu5iEcuqt9e6z8-YKOd6JcHfJk').getSheetByName('Master2');
  var data = sheet.getDataRange().getValues();
  Logger.log(data);

  return JSON.stringify(data);
}

getDataFromSheet();
