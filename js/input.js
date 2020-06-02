const input =  document.querySelector("#phone"); 
const form = document.querySelector(".input-list");


window.intlTelInput (input, {
    utilsScript: 'js/utils.js',
    defaultCountry: 'auto',
    separateDialCode: true,
    allowDropdown: false,
    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        return "";
    },
    geoIpLookup: function(callback) {
        $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    nationalMode: false,
    initialCountry: 'auto',
    
    preferredCountries: ['ua', 'ru', 'by', 'kz']

});

input.addEventListener('focus', codeCauntry)

function codeCauntry(e) {
    const countryData = document.querySelector('.iti__selected-dial-code').textContent;
    
    if(input.value !== "") return;
    input.value = countryData;
}
form.addEventListener('click', (e) => {
    e.target.style.color = "#000";
})


