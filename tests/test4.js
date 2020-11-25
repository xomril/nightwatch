module.exports = {
    '@disabled': false,
    'AirBNB dates'(browser) {
    
        const checkoutDate = '[data-testid="structured-search-input-field-split-dates-1"]';
        const guestField = '[data-testid="structured-search-input-field-guests-button"]';
        const page = browser.page.airbnb();
  
        page
            .navigate()
             .addAdultGuest()
        
        browser
            .assert.containsText(guestField, '1 guest')
            .saveScreenshot('tests_output/airBNBGuestsAdultOnly.png')
           
    }
};

