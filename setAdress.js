Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "CHECKOUT_ADDRESS") {
      
      Ecwid.Cart.setAddress(
        {
        // preset country US and state Alaska
        "countryName": "United States",
        "stateOrProvinceCode": "AK",
        },

        function()
        {
          console.log('Address successfully set')
        },
        function()
        {
          console.log('Error setting the address');
        }
      );
    var state = document.querySelector('div .ec-form__cell.ec-form__cell--state');
    state.style.display = none;    
    }
});
