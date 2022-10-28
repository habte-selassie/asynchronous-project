

const whereAmI = function(lat,lng){
fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
.then(res=>{
    //console.log(res);
    if(!res.ok)
    throw new Error(`problem with geocoding ${res.status}`)
    return res.json()}
    )
.then(data=>{
    console.log(data );
    console.log(`you are in ${data.city}
    ,${data.country}`);

    return fetch(`https://restcountries.eu/rest/v2/
    name/${data.country}`)
})
.then(res=>{

    if (!res.ok)
    throw new Error(`Country not found($
        {response.status})`)
        return response.json()
    })
    .then(data=>renderCountry(data[0]))
   .catch(err => console.error(`${err.message}`))
  }
whereAmI(52.508, 13.381)


// whereAmI( 19.037, 72.873)
// whereAmI(-33.933, 18.474)
// Test data:
// §Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// §Coordinates 2: 19.037, 72.873
// §Coordinates 3: -33.933, 18.474
// GOOD LUCK 😀