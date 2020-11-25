
module.exports = {
    '@disabled': false,
    'AirBNB search'(browser) {
        const queries = [['Amsterdam',true],['Paris',true], ['Tel Aviv',true], ['xxyxcvvcd', false]];
        const firstItemResult = '#Koan-query__option-0';
        const checkoutDate = '[data-testid="structured-search-input-field-split-dates-1"]';
        const guestField = '[data-testid="structured-search-input-field-guests-button"]';
        const page = browser.page.airbnb();
        
        
        queries.forEach(query =>{
            let location = query[0];
            let isValid = query[1];
            page
            .navigate()
            .setLocation(location.substring(0, 3))
            .saveScreenshot('tests_output/airbnbPlaces.png')
            
            if(isValid){
                browser
                .assert.visible(firstItemResult)
                .assert.containsText(firstItemResult, location);
            } else {
                browser
                .expect.element(firstItemResult).to.not.be.present.after(3000)
                
            }
            
        })
       
    }
};

