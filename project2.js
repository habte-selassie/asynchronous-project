
// const wait = function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve,seconds*1000)
//     });
//     };

// const imgContainer = document.querySelector('.images')

// const createImage = function(imgPath){
//     return new Promise(function(resolve,reject){
//         const img = document.createElement('img')
//         img.src = imgPath
           
//         img.addEventListener('load',function(){
//             imgContainer.append(img)
//             resolve(img)  
//         })

//     img.addEventListener('error',function(){
//          reject(new Error('imge not foundinga'))
//       }) 
//     })
//   }

// let currentImage

//   createImage('img/img-1.jpg').then(img=>{
//    currentImage=img
//    console.log('image 1 loadinga');
//   return wait(2)
//   }).then(()=>{
//      createImage.style.display = none;
//      return createImage('img/img-2/jpg')
//   })
//   .then(img=>{
//    currentImage=img
//     console.log('image 2 loadinga');
//    return wait(2)
//   })
//   .then(()=>{
//     createImage.style.display=none;
//   })
//   .catch(err=>console.error(err))
