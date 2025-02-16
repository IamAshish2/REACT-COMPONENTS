const dummyApiResponse = {
    showImageSlider : false,
    showScrollIndicator : true,
    showStarRating : true,
    showTabs : true,
    showTreeView : true
}

function ResponseFromApi(){
    return new Promise((resolve,reject) => {
        if(dummyApiResponse){
            return setTimeout(resolve(dummyApiResponse),500);
        }else{
            reject('Error fetching response from api')
            throw new Error();
        }
    })
}

export default ResponseFromApi;