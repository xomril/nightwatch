module.exports = {
    url: 'http://www.airbnb.com/',
    elements: {
        mainQueryInput: '#bigsearch-query-detached-query',
        guestPopup: '#searchFlow-title-label-stepper-adults',
        addGuests: '[data-testid="structured-search-input-field-guests-button"]',
        addAdultBtn: '[data-testid="stepper-adults-increase-button"]',
        addInfantBtn: '[data-testid="stepper-infants-increase-button"]'

    },
    commands: [{
        setLocation(location) {
            return this
            .click('@mainQueryInput')
            .setValue('@mainQueryInput', location)                
        },
        setDate(date1, date2) {
            return this
            .click('[data-testid="structured-search-input-field-split-dates-0"]')
            .waitForElementVisible(`[data-testid="datepicker-day-${date1}"]`)
            .click(`[data-testid="datepicker-day-${date1}"]`)
            .click(`[data-testid="datepicker-day-${date2}"]`)
           
        },
        addAdultGuest(){
            return this
                .click('@addGuests')
                .waitForElementVisible('@guestPopup')
                .click('@addAdultBtn')
        },
        addInfantGuest(){
            return this
                .click('@addInfantBtn')
        }
    }]
};
