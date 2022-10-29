'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
 
};
const renderError= function(err){
  countriesContainer.insertAdjacentText('beforeend',msg)
}
const getJSON = function(url,errorMsg = "Something Went Wrong"){
  return fetch(url).then(response=>{
    if (!response.ok)
    throw new Error(`${errorMsg}
    (${response.status})`) 
      
    return response.json()
  })
}

/* 
 const getPosition = function(){
    return new Promise(function(resolve,reject){
     navigator.geolocation.getCurrentPosition(resolve, reject)
    })
 }   

const whereAmI = function(){

getPosition().then(pos=>{
    const {latitude:lat,longitude:lng} = 
    pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}
    ?geoit=json`)
   })
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
   
      
    btn.addEventListener('click',whereAmI)
// const getCountryData = function (country) { */
//   Country 1
//   fetch(` https://restcountries.com/v2/name/${country}`)
//   .then((response) => {
//     console.log(response);

//     if(!response.ok)
//     throw new Error(`country not found ${response.status}`)
     
//     return response.json()

//   .then((data) => 
//   {
//       renderCountry(data[0]);
  
//        const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(` https://restcountries.com/v2/alpha/${neighbour}`);
//     }).then((response) => {
//       return response.json()  
//     })
//     .then((data) => 
//     renderCountry(data, 'neighbour'))
//     .catch((err)=> {
//      console.error(`${err} ***`)
//       renderError(`something went wrong ${err.message}
//       .try again!`)
//     })
    
//     .finally(()=>{
//       countriesContainer.style.opacity = 1
//     })
//   })
    
//   btn.addEventListener('click',function(){
//     getCountryData('portugal');
//     getCountryData('habuysrel')
//   })

//   }


// // const whereAmI = function(lat,lng){
// // 
// // .then(res=>{
// //     //console.log(res);
// //     if(!res.ok)
// //     throw new Error(`problem with geocoding ${res.status}`)
// //     return res.json()}
// //     )
// // .then(data=>{
// //     console.log(data );
// //     console.log(`you are in ${data.city}
// //     ,${data.country}`);

// //     return fetch(`https://restcountries.eu/rest/v2/
// //     name/${data.country}`)
// // })
// // .then(res=>{

// //     if (!res.ok)
// //     throw new Error(`Country not found($
// //         {response.status})`)
// //         return response.json()
// //     })
// //     .then(data=>renderCountry(data[0]))
// //    .catch(err => console.error(`${err.message}`))
// //   }
// // whereAmI(51.508, 13.381)
// // whereAmI( 19.037, 72.873)
// // whereAmI(-33.933, 18.474)
// // // Test data:
// // // §Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// // // §Coordinates 2: 19.037, 72.873
// // // §Coordinates 3: -33.933, 18.474
// // // GOOD LUCK 😀
// console.log('test start');
// setTimeout(()=>console.log('o sec later'),);
// Promise.resolve('resolv promise 1')
// .then(res=>console.log(res));

// Promise.resolve('resolv promise 2').then(res=>{
//     for(let i=0 ;i<100; i++){
//         console.log(res);
//     }
   
// })
// console.log('test final');
// console.log('lotery srawing is happening brother');
// const lotteryPromise = new Promise(function(resolve,reject){

// setTimeout(function(){
//     if(Math.random() >=0.5 ){
//         resolve('you win')
//     } else{
//         reject(new Error('you lost your money brother'))
//     }
// },2000)
 
// })

// lotteryPromise.then(res=>console.log(res))
// .catch(err=>console.error(err))


// ////////////promifiysing
// const wait = function(seconds){
// return new Promise(function(resolve){
//     setTimeout(resolve,seconds*1000)
// });
// };

// wait(1).then(()=>{
//     console.log('i waitin for 1 seconds');
//     return wait(1)
// }).then(()=>{
//     console.log('i waitin for 2 seconds');
//     return wait(1)
// }).then(()=>{
//     console.log('i waitin for 3 seconds');
//     return wait(1)
// }).then(()=>console.log('i waitn for 8 secons'))

// Promise.resolve('you win').then(x=>console.log(x));

// Promise.reject(new Error('you loses')).catch(x=>console.error(x));

// //console.log(x);







const getPosition = function(){
  return new Promise(function(resolve,reject){
   navigator.geolocation.getCurrentPosition(resolve, reject)
  });
};


   

const WhereAmI = async function(){

///////////// geolocation
try{
const pos = await getPosition();

const { latitude:lat , longitude:lng } = pos.coords

/////////////// reverse geocoding

    const resgeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`)

      if (!resgeo.ok)
       throw new Error('Problem finding location')
        
      
         const datageo =  await resgeo.json()
        console.log(datageo);

////////// country database

       const res = await fetch
         (`https://restcountries.eu/rest/v2/name/${datageo.country}`);
         if (!res.ok)
       throw new Error('Problem getting countryia')

    const adata = await res.json()
      console.log(adata);
       renderCountry(adata[0]) 
  }catch(err){
      console.error(`${err}`)
      renderError(`something went wrong ${err.message}`)
  }
}
WhereAmI()
WhereAmI()
WhereAmI()
WhereAmI()
WhereAmI()
console.log('brotherly');


// try{
//   let y =1
//   const x = 2
//   x=3;
// } catch(err){
//   alert(err.message)
// }


 const get3Countries = async function(c1,c2,c3){
  try{
       const [data1] = await getJSON(`https://restcountries.eu/
       rest/v2/name/${c1}`)
       const [data2] = await getJSON(`https://restcountries.eu/
       rest/v2/name/${c2}`)
       const [data3] = await getJSON(`https://restcountries.eu/
       rest/v2/name/${c3}`)
       console.log([data1.capital,
      data2.capital,
      data3.capital]);
 

       const data = await Promise.all(
       getJSON(`https://restcountries.eu/rest/v2/name/
       ${c1}`),
       getJSON(`https://restcountries.eu/rest/v2/name/
       ${c2}`),
       getJSON(`https://restcountries.eu/rest/v2/name/
       ${c3}`))

       console.log(data[0]);
console.log(data.map(d=>d[0].capital))
   

     }catch(err){
       console.error(err);
    }
  }  
 get3Countries('portugal','germany','wales')
 (async function(){
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/
    ${c1}`),
    getJSON(`https://restcountries.eu/rest/v2/name/
    ${c2}`),
    getJSON(`https://restcountries.eu/rest/v2/name/
    ${c3}`)
  ])

  console.log(res[0])
 })();

const timealkual = function(sec){
  return new Promise(function(__,reject){
    setTimeout(function(){
      reject(new Error('Request Tooks Longer')
      ,sec*1000)
    })
  })
}

 Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timealkual(10),
 ])
 .then(res=>console.log(res))
 .catch(err=>console.error(err))

////////////////promise allsetller


 



















