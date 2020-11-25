module.exports = {
    '@disabled': false,
    'AirBNB dates'(browser) {
    
        const checkoutDate = '[data-testid="structured-search-input-field-split-dates-1"]';
        const guestField = '[data-testid="structured-search-input-field-guests-button"]';
        const page = browser.page.airbnb();
  
        page
            .navigate()
             .addAdultGuest()
             .addInfantGuest()
        
        browser
            .assert.containsText(guestField, '1 guest, 1 infant')
            .saveScreenshot('tests_output/airBNBGuestsAdultAndInfant.png')
           
    }
};

