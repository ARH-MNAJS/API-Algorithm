function doGet(e){
  const strOutput = JSON.stringify(getSheetInfo());
  Logger.log(strOutput)
  return ContentService.createTextOutput(strOutput).setMimeType(ContentService.MimeType.JSON);
}

function getSheetInfo() {
  const id = '1bHhCA4BiDtSwjEB-Gv0fSFX7IuEFTmyRyhXASfajHZc'
  const ss = SpreadsheetApp.openById(id);
  //console.log(ss)
  //Logger.log(ss);
  const sheet = ss.getSheetByName('live-Grid view')
  //Logger.log(sheet);
  const range = sheet.getDataRange();
  //Logger.log(range)
  const data = range.getValues()
  //Logger.log(data)
  data.forEach(row =>{
    //Logger.log(row)
  })
  return data
}
