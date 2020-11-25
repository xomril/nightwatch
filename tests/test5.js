const common = require('./common');
const fetch = require('node-fetch');

module.exports = {
    '@disabled': false,
    'AirBNB search'(browser) {
        const firstItemResult = '#Koan-query__option-0';
        const checkoutDate = '[data-testid="structured-search-input-field-split-dates-1"]';
        const guestField = '[data-testid="structured-search-input-field-guests-button"]';
        const searchBtn = '[data-testid="structured-search-input-search-button"]';

        const page = browser.page.airbnb();
        const d = new Date();
            page
            .navigate()
            
            .setDate(`${d.getFullYear()}-${common.pad(d.getMonth()+1,2)}-${common.pad(d.getDate(),2)}` ,
             `${d.getFullYear()}-${common.pad(d.getMonth()+1,2)}-${common.pad(d.getDate()+1,2)}`)
            .setLocation('Amsterdam')
            .click(firstItemResult)
            .addAdultGuest()
            .click(searchBtn)

            browser.expect.element('#ExploreLayoutController').to.be.present.after(10000);
            
            browser    
                .assert.urlContains('s/Amsterdam')
                .assert.containsText('h1','Stays in Amsterdam')
                .saveScreenshot('tests_output/airbnbComplete.png');
            
                //TODO: verify request?!
                fetch("https://www.airbnb.com/api/v3/ExploreSearch?operationName=ExploreSearch&locale=en&currency=ILS&_cb=1ytnjlhynjv95&variables=%7B%22request%22%3A%7B%22metadataOnly%22%3Afalse%2C%22version%22%3A%221.7.9%22%2C%22itemsPerGrid%22%3A20%2C%22tabId%22%3A%22home_tab%22%2C%22refinementPaths%22%3A%5B%22%2Fhomes%22%5D%2C%22placeId%22%3A%22ChIJVXealLU_xkcRja_At0z9AGY%22%2C%22checkin%22%3A%222020-11-25%22%2C%22checkout%22%3A%222020-11-27%22%2C%22adults%22%3A1%2C%22source%22%3A%22structured_search_input_header%22%2C%22searchType%22%3A%22autocomplete_click%22%2C%22query%22%3A%22Amsterdam%2C%20Netherlands%22%2C%22cdnCacheSafe%22%3Afalse%2C%22simpleSearchTreatment%22%3A%22simple_search_only%22%2C%22treatmentFlags%22%3A%5B%22simple_search_1_1%22%2C%22simple_search_desktop_v3_full_bleed%22%2C%22flexible_dates_options_extend_one_three_seven_days%22%5D%2C%22screenSize%22%3A%22large%22%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2293e49d497c9528e32600a69dbf8d3abd204573354d8925905b153957d4fbe1f5%22%7D%7D", {
                    "headers": {
                      "accept": "*/*",
                      "accept-language": "en-US,en;q=0.9,he;q=0.8",
                      "content-type": "application/json",
                      "device-memory": "8",
                      "dpr": "1",
                      "ect": "4g",
                      "sec-fetch-dest": "empty",
                      "sec-fetch-mode": "cors",
                      "sec-fetch-site": "same-origin",
                      "viewport-width": "830",
                      "x-airbnb-api-key": "d306zoyjsyarp7ifhu67rjxn52tv0t20",
                      "x-airbnb-graphql-platform": "web",
                      "x-airbnb-graphql-platform-client": "apollo-niobe",
                      "x-csrf-token": "V4$.airbnb.com$sDD0XQrV6M4$YL7HhZ58P55p3cgWd69LN_3NVZAHwgZCkE0c6_Pv0kU=",
                      "x-csrf-without-token": "1",
                      "cookie": "bev=1606222101_ZjM1YTZlNDBjMTJl; cdn_exp_da1663c66e2988797=control; tzo=120; sdid=; frmfctr=wide; __ssid=e00bba9c82cfaee031955d11cc82e56; _gcl_au=1.1.1961206722.1606222104; _ga=GA1.2.1243061777.1606227580; _gid=GA1.2.15430304.1606227580; country=IL; ak_bmsc=4EE8ECCB2D995CAAAB5FA7C6109A493ED41945A11C0E0000D1E6BD5FB9513464~plet2ao0a5kILu3luQtTk17nNR78xfFmv/uTco5SWweaA/1LGlATBRDnReVJM2YL0jmt2r4nUGQaEtZkUFVTBwXYszjub4XEP3WKNlVYmmaqL3VHjSpCb3+DKb48YRAtwfAjfTk4/alTVh6XXjysW9iVJdW1YbpHv85k1b0qakHd8EyTU9BqaJ01xDAhZxoweA87ASDlxaIn7PJ3BAgkj0tHZYzsKpNwCb/XEYqYuZiPEhQmcaR9iYVra9Y1PeqL2i; _csrf_token=V4%24.airbnb.com%24sDD0XQrV6M4%24YL7HhZ58P55p3cgWd69LN_3NVZAHwgZCkE0c6_Pv0kU%3D; jitney_client_session_id=3a090a97-0bd9-4c3f-b3c0-a012629be21b; jitney_client_session_created_at=1606281084; flags=0; OptanonAlertBoxClosed=NR; __svt=252; _user_attributes=%7B%22curr%22%3A%22ILS%22%2C%22guest_exchange%22%3A3.341275%2C%22device_profiling_session_id%22%3A%221606222102--bd66b6de830b5d4d7e4e3346%22%2C%22giftcard_profiling_session_id%22%3A%221606281084--36047a377c824cbb0bc8b366%22%2C%22reservation_profiling_session_id%22%3A%221606281084--4171c1ed58651c36e391969a%22%7D; AMP_TOKEN=%24NOT_FOUND; _gat=1; jitney_client_session_updated_at=1606281105; cfrmfctr=DESKTOP; cbkp=4; _uetsid=56b628d02e5311eb812d19d355637c33; _uetvid=56b673802e5311eb811227f2800e8097; previousTab=%7B%22id%22%3A%221bc92870-7b36-4cb2-8fcf-e6c7a4be8038%22%2C%22url%22%3A%22https%3A%2F%2Fwww.airbnb.com%2F%22%7D; bm_sv=A367AFE73D5FA55F40547CA0D96A739B~dM6eT5GN0+StD7mZtPA8PE5aytv1+eS36myi0gdvz07DOHrmSfb47PSB/AVA0VcRmOI0iCwZWu6/O6PAe1BovCdYDdWGQocwwVQDbvGpPGmTbDVoGnWriqDzI2veWId9BFJthFdnm237KDa4O/cwsIYmuiPNS2Mt7AcWcvtqNgQ="
                    },
                    "referrer": "https://www.airbnb.com/s/Amsterdam--Netherlands/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&query=Amsterdam%2C%20Netherlands&place_id=ChIJVXealLU_xkcRja_At0z9AGY&checkin=2020-11-25&checkout=2020-11-27&adults=1&source=structured_search_input_header&search_type=autocomplete_click",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": null,
                    "method": "GET",
                    "mode": "cors"
                  }).then(res => res.text())
                  .then(body => console.log(body));
                 
            
        }
       
    };

