let popArtists = ['usmonova', 'morgenshtern', 'baskov', 
'eldzhey', '50cent', 'eminem', 'oxy'];

let shortestName = popArtists.filter(function(artist) {
  return artist.length === Math.min(...popArtists.map
    (artist => artist.length));
});
d
console.log("Самое короткое имя:", shortestName[0]);


let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "santafe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
];

let totalVasya = cars.reduce(function(sum, car) {
    return sum + car.price;
}, 0);

let obshietkoroche = totalVasya / cars.length;

console.log("Средняя цена всех машин:", obshietkoroche);
