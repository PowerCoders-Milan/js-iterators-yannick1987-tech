// define an array of fruits
const array = ['melon','banana','mangoes','oranges']
// .forEach((fruit, index) => {
    // console.log() a message interpolating the name of the fruit and it's position in the array (index increased by 1);
// })
array.forEach( (fruit,index)=> {
    console.log(`${index+1} - ${fruit} `)
    }
);