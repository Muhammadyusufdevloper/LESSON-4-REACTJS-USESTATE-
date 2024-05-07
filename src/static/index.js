import apple from"../assets/image/brend/apple.png"
import fitbit from"../assets/image/brend/FitBit.png"
import xiaomi from"../assets/image/brend/xiaomi.png"
import apple1 from"../assets/image/product/apple1.png"
import apple2 from"../assets/image/product/apple2.png"
import apple3 from"../assets/image/product/apple3.png"
import apple5 from"../assets/image/product/apple5.png"
import fitbit1 from"../assets/image/product/apple1.png"
import samaung from"../assets/image/product/samsung.png"
import star from"../assets/svg/product/start.svg"
import hamza from"../assets/image/about/hamza.png"
import hafiz from"../assets/image/about/hafiza.png"


export const headerListLink = [
    {
        id:1,
        title:"Home",
    },
    {
        id:2,
        title:"Brands",
    },
    {
        id:3,
        title:"Recent Products",
    },
    {
        id:4,
        title:"Contact",
    },
    {
        id:5,
        title:"About",
    }
]

export const brandData = [
    {
        id:1,
        title:"Apple",
        desc:"Apple is one of the most famous smart watches providing company.",
        img:apple
    },
    {
        id:2,
        title:"Xiaomi",
        desc:"Xiaomi smart watches are produced by MI company.",
        img:xiaomi
    },
    {
        id:3,
        title:"FitBit",
        desc:"FitBit smart watches are best for there health and fitness features.",
        img:fitbit
    },
]
export const productData = [
    {
      id:1,  
      img: apple1,
      title: "Apple Smart I",
      oldPrice: "$300",
      start:star,
      newPrice: 255.0,
    },
    {
      id:2,  
      img: apple2,
      title: "Apple Smart II",
      start:star,
      newPrice: 255.0,
    },
    {
      id:3,  
      img: apple3,
      title: "Apple Smart III",
      oldPrice: "$300",
      start:star,
      newPrice: 255.0
    },
    {
      id:4,  
      img: apple5,
      title: "Apple Smart IV",
      start:star,
      newPrice: 255.0
    },
    {
      id:5,  
      img: fitbit1,
      title: "Samsung Watch Pro",
      start:star,
      newPrice: 255.0
    },
    {
      id:6,  
      img: samaung,
      title: "Fitbit Max 1",
      oldPrice: "$300",
      start:star,
      newPrice: 255.0
    },
];

export const aboutData = [
    {
        id:1,
        title:"Hamza Faizi",
        desc:"Don’t waste time, just order! This is the best website to puschase smart watches.",
        star:star,
        img:hamza
    },
    {
        id:2,
        title:"Hafiz Huzaifa",
        desc:"I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.",
        star:star,
        img:hafiz
    }
]