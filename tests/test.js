const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]; 

const pad = (num, size) => {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
  }
module.exports = {
    'AirBNB search'(browser) {
        const queries = ['Amsterdam','Paris', 'Tel Aviv'];
        const firstItemResult = '#Koan-query__option-0';
        const checkoutDate = '[data-testid="structured-search-input-field-split-dates-1"]';
        const guestField = '[data-testid="structured-search-input-field-guests-button"]';
        const page = browser.page.airbnb();

        /*
        queries.forEach(query =>{
            page
            .navigate()
            .setLocation(query.substring(0, 3))
            .saveScreenshot('tests_output/airbnb.png')
            
            browser
                .assert.visible(firstItemResult)
                .assert.containsText(firstItemResult, query);
        })
       */
        const d = new Date();
        page
            .navigate()
            .setDate(`${d.getFullYear()}-${pad(d.getMonth()+1,2)}-${pad(d.dayOfMonth()+1,2)}` , `${d.getFullYear()}-${pad(d.getMonth()+1,2)}-${pad(d.getDay()+3,2)}`)
            // .addAdultGuest()
            // .addInfantGuest()
        
        browser
            
            .assert.containsText(checkoutDate, `${monthNames[d.getMonth()]} ${d.dayOfMonth()+1}`)
            .assert.containsText(guestField, '1 guest, 1 infant')
            .saveScreenshot('tests_output/airbnbDate.png')
           
    }
};

