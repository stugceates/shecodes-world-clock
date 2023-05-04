function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format('MMMM Do YYYY')

    let losAngelesTimeElement = document.querySelector("#los-angeles-time");
    losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("LTS")
  
    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    sydneyDateElement.innerHTML = moment().tz("Australia/Sydney").format('MMMM Do YYYY')

    let sydneyTimeElement = document.querySelector("#sydney-time");
    sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("LTS")
}

updateTime();
setInterval(updateTime, 1000);

