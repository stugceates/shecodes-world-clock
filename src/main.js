updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement){
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format('MMMM Do YYYY')

        let losAngelesTimeElement = document.querySelector("#los-angeles-time");
        losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("LTS")
    }
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement){
        
        let sydneyDateElement = sydneyElement.querySelector(".date");
        sydneyDateElement.innerHTML = moment().tz("Australia/Sydney").format('MMMM Do YYYY')

        let sydneyTimeElement = document.querySelector("#sydney-time");
        sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("LTS")
    }
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement){
        
        let tokyoDateElement = tokyoElement.querySelector(".date");
        tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format('MMMM Do YYYY')

        let tokyoTimeElement = document.querySelector("#tokyo-time");
        tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("LTS")
    }
    let amsterdamElement = document.querySelector("#amsterdam");
    if (amsterdamElement){
        
        let amsterdamDateElement = amsterdamElement.querySelector(".date");
        amsterdamDateElement.innerHTML = moment().tz("Europe/Amsterdam").format('MMMM Do YYYY')

        let amsterdamTimeElement = document.querySelector("#amsterdam-time");
        amsterdamTimeElement.innerHTML = moment().tz("Europe/Amsterdam").format("LTS")
    }
}

function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    } 
    
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="row city-info">
          <div class="col-md-8 city-name">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format('MMMM Do YYYY')}</div>
          </div>
          <div class="col-md-4 time">${cityTime.format("LTS")}</div>
    </div>   
    <a href="https://selina-world-clock.netlify.app/">All cities</a>   
  `;

}

