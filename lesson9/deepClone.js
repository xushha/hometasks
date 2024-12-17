function deepClone(data){
    if (data === null || typeof(data) !== 'object'){ //гвард
        return data; //база
    }
    if (Array.isArray(data)){
        const arrayClone = [];
        for ( let i = 0; i < data.length; i++){
            arrayClone[i] = deepClone(data[i]);
        }
        return arrayClone;
    }
}