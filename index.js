 const Tabletop = require('tabletop');

 var publicSpreadsheetUrl = 'URL OF SPREADSHEET AS YOU FIND IN THE BROWSER ADDRESS BAR';

function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: false } )
  }

 function showInfo(data, tabletop) {
  // do something with the data
  console.log(JSON.stringify(data, null, 2));
}

//initialise and kickstart the whole thing.
init()
