const common = require('./common');

module.exports = {
    '@disabled': false,
    'AirBNB dates'(browser) {
    
        const checkoutDate = '[data-testid="structured-search-input-field-split-dates-1"]';
        const guestField = '[data-testid="structured-search-input-field-guests-button"]';
        const page = browser.page.airbnb();
  
        const d = new Date();
        page
            .navigate()
            .setDate(`${d.getFullYear()}-${common.pad(d.getMonth()+1,2)}-${common.pad(d.getDate(),2)}` ,
             `${d.getFullYear()}-${common.pad(d.getMonth()+1,2)}-${common.pad(d.getDate()+1,2)}`)
        
        browser
            .assert.containsText(checkoutDate, `${common.monthNames[d.getMonth()]} ${d.getDate()+1}`)
            .saveScreenshot('tests_output/airbnbDate.png')
           
    }
};

