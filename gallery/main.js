const thumbnails = document.querySelectorAll('img');
const outlet = document.querySelector('#outlet');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click',() => {
    const currentSource = thumbnail.src;
    const biggerPhotoSource = currentSource.replace("150/100","300/200");
    //console.log(biggerPhotoSource);
    //outlet.innerHTML = '<img src="'+biggerPhotoSource+'" alt=""/>';
    if(outlet){
        outlet.innerHTML = `<img src="${biggerPhotoSource}" alt=""/>`;
    }
   })
})