import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent {
  // title = 'product-listing';
  products = [
    {
      id: 1,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      // category: "Mens > Clothing > Suits",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Suits',
      image: 'https://m.media-amazon.com/images/I/81MXgcHqBIL._AC_SL1500_.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 2,
      title: "Boys' Suit Jacket and Pants Set",
      price: 45.0,
      description:
        'Stylish suit for boys, perfect for formal occasions, weddings, or school events. The set includes a tailored jacket with matching pants, offering a sharp and polished look.',
      // category: "kids > Clothing > Suits",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Suits',

      image: 'https://m.media-amazon.com/images/I/71V-TH85HSL._AC_SX522_.jpg',
      rating: {
        rate: 4.7,
        count: 850,
      },
    },

    {
      id: 3,
      title: "Women's Denim Jacket",
      price: 42.5,
      description:
        'Classic denim jacket with a button-up front and chest pockets. A timeless wardrobe staple for layering',
      // category: "women > clothing > jackets",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'jackets',
      image:
        'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/722562/1.jpg?9739',
      rating: {
        rate: 2.6,
        count: 235,
      },
    },

    {
      id: 4,
      title: "Women's Casual Maxi Dress",
      price: 50.0,
      description:
        'Long maxi dress with a relaxed fit and soft fabric. Perfect for casual days or beach outings.',
      // category: "women > clothing > jackets",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'jackets',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41gpl70tusL._UL500_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 5,
      title: 'Comfortable Khaki Chinos ',
      price: 38.0,
      description: 'Versatile and comfortable chinos for everyday wear.',
      // category: "Mens > Clothing > Suits",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Suits',

      image:
        'https://www.cordings.co.uk/media/catalog/product/cache/e89452242e02ce17aec9919532009943/t/r/tr478stone.jpg',
      rating: {
        rate: 3.1,
        count: 259,
      },
    },

    {
      id: 6,
      title: "Boys' 3-Piece Suit Set",
      price: 60.0,
      description:
        'This 3-piece suit set for boys includes a vest, jacket, and pants, perfect for any formal or semi-formal occasion. The premium fabric ensures comfort while maintaining a sophisticated look.',
      // category: "kids > Clothing > Suits",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Suits',

      image:
        'https://i5.walmartimages.com/asr/2b848245-b2bb-4ac3-ba91-e8c0d1792ad7.b782838f9bf50104e17b640bb3afd1ef.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      rating: {
        rate: 4.8,
        count: 1200,
      },
    },

    {
      id: 7,
      title: "Boys' Classic Blazer Jacket",
      price: 55.0,
      description:
        'A timeless blazer jacket for boys, perfect for both formal and casual settings. Designed with soft fabric and a comfortable fit, it is suitable for school events, family gatherings, and more.',
      // category: "kids > Clothing > Blazers",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Blazers',

      image:
        'https://cdn-images.farfetch-contents.com/22/00/06/25/22000625_52344241_300.jpg',
      rating: {
        rate: 4.6,
        count: 950,
      },
    },

    {
      id: 8,
      title: "Women's Lightweight Cardigan",
      price: 28.0,
      description:
        'Soft and cozy cardigan with an open front design, perfect for layering during cooler months.',
      // category: "womens > clothing > Coats",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Coats',

      image:
        'https://images-na.ssl-images-amazon.com/images/I/81LlRQoAKyL._SL250_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 9,
      title: 'Relaxed-Fit Crewneck Sweater',
      price: 65.0,
      description:
        'Soft and cozy sweater for cool weather. Perfect for layering.',
      // category: "Mens > Clothing > Blazers",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Blazers',

      image:
        'https://www.houseofblanks.com/cdn/shop/files/HOB-RelaxedCrew-Heather-Front.jpg?v=1707341201&width=533',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 10,
      title: "Girls' Elegant Blazer with Peplum",
      price: 48.0,
      description:
        'An elegant blazer with peplum detailing, ideal for girls attending formal occasions or school events. The lightweight fabric provides comfort and style in one piece.',
      // category: "kids > Clothing > Blazers",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Blazers',
      image:
        'https://cdn.fcglcdn.com/brainbees/images/products/300x364/15242425a.webp',
      rating: {
        rate: 4.5,
        count: 720,
      },
    },

    {
      id: 11,
      title: "Women's Casual Chiffon Blouse",
      price: 30.0,
      description:
        'Elegant chiffon blouse with a relaxed fit, featuring delicate detailing on the neckline and sleeves..',
      // category: "womens > clothing > Coats",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Coats',
      image:
        'https://cdn-img.prettylittlething.com/8/e/d/1/8ed19d6f6ba88357f41b3d2db157b6582314156f_CLV0472_3.JPG',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 12,
      title: "Women's Midi Skirt",
      price: 35.0,
      description:
        'A-line midi skirt with a flowy design, perfect for casual wear or semi-formal occasions..',
      // category: "womens > clothing > Dresses",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Skirts',
      image: 'https://m.media-amazon.com/images/I/51-wJ71RG+L._AC_SX385_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 13,
      title: 'Diamond',
      price: 300,
      description: 'Diamond Necklace-Elegant-Women',
      // category: "womens > Accessories",
      category: 'Women',
      subcategory: 'Accessories',
      image:
        'https://ion.bluenile.com/sets/Jewelry-bn/194174/NOP/Images/stage.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 14,
      title: 'Classic Silver Chain Necklace',
      price: 100,
      description: 'A versatile piece that can be dressed up or down.',
      // category: "womens > Accessories",
      category: 'Women',
      subcategory: 'Accessories',
      image:
        'https://content.thewosgroup.com/productimage/12040048/12040048_1.jpg?impolicy=zoom',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 15,
      title: "Men's Fleece Pullover Hoodie",
      price: 35.0,
      description:
        'Fleece-lined hoodie with adjustable drawstrings and a front pocket. Soft fabric, suitable for layering in cold weather.',
      // category: "Mens > Clothing > Blazers",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Blazers',
      image:
        'https://i.pinimg.com/originals/3b/f4/ad/3bf4ad1ad55d2302ab942396b94ee4f9.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 16,
      title: "Women's Casual Jumpsuit",
      price: 55.0,
      description:
        'Trendy jumpsuit with a cinched waist and wide-leg pants. Great for casual outings or summer nights.',
      // category: "womens > clothing > Dresses",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Dresses',

      image:
        'https://i5.walmartimages.com/asr/2a5d37f4-ec43-43ec-80a9-7e8bb0c35e6a.7997b57df5cb9c0f1bf3a024702e9b77.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 17,
      title: "Women's Shirt",
      price: 40.0,
      description: 'Cozy and soft.',
      // category: "womens > clothing > Shirts & Blouses",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Shirts & Blouses',
      image:
        'https://ae01.alicdn.com/kf/HTB1v7YXSpXXXXXNaVXXq6xXFXXXq/2017-Women-Floral-Embroidery-White-Blouses-Roll-up-Long-Sleeve-V-Neck-Curved-Hem-Ladies-Office.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 18,
      title: "Boys' Casual Button-Up Shirt",
      price: 25.0,
      description:
        'A comfortable and stylish button-up shirt for boys, perfect for casual outings or school events. Made with soft cotton fabric for all-day comfort.',
      // category: "kids > Clothing > Shirts",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Shirts',

      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41cW7B7QTKjcxz3Qozs0Vyesv6MvQjKGq9g&s',
      rating: {
        rate: 4.4,
        count: 500,
      },
    },

    {
      id: 19,
      title: 'Durable Denim Jeans',
      price: 70.0,
      description: 'Classic straight-leg jeans made with high-quality denim.',
      // category: "Mens > Clothing > Shirts",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Shirts',
      image:
        'https://th.bing.com/th/id/OIP.-Awebs3_y4N0vT-vv030IwAAAA?rs=1&pid=ImgDetMain',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 20,
      title: "Women's Knit Sweater",
      price: 40.0,
      description:
        'Cozy and soft knit sweater, ideal for chilly days. Features a relaxed fit with ribbed cuffs and hem.',
      // category: "womens > clothing > Shirts & Blouses",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Shirts & Blouses',
      image:
        'https://images-cdn.ubuy.co.in/654ec7dd9fb75b0f9d500283-aelfric-eden-cable-knit-sweater-women.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 21,
      title: "Men's Leather Wallet",
      price: 100.0,
      description:
        'A classic and functional accessory for men to carry cash and cards.',
      // category: 'Womens > Bags > Clutch Bags',
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Clutch Bags',

      image:
        'https://ae01.alicdn.com/kf/HTB1Y2c_aOnrK1Rjy1Xcq6yeDVXap/DIKEDAKU-Baellerry-Lucky-Box-Gift-Short-Wallet-Zipper-Multifunction-Wallet-Multicard-Zero-Wallet-Men-Purse.jpg',
      rating: {
        rate: 3,
        count: 400,
      },
    },

    {
      id: 22,
      title: "Men's Casual Slim Fit",
      price: 15.99,
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      // category: "Mens > Clothing > Shirts",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Shirts',

      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating: {
        rate: 2.1,
        count: 430,
      },
    },

    {
      id: 23,
      title: 'Classic Oxford Button-Down Shirt ',
      price: 45.0,
      description:
        'A timeless wardrobe staple. Crisp cotton fabric and a clean',
      // category: "Mens > Clothing > Pants",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Pants',

      image:
        'https://media.endclothing.com/media/catalog/product/2/9/29-05-2019_ami_heartlogooxfordshirt_white_a19c013-45-100_blr_1.jpg',
      rating: {
        rate: 5,
        count: 260,
      },
    },

    {
      id: 24,
      title: "Girls' Ruffled Sleeve Shirt",
      price: 22.0,
      description:
        'A cute and trendy shirt for girls, featuring ruffled sleeves and a soft, breathable fabric. Ideal for casual wear or layering with jackets for cooler days.',
      // category: "kids > Clothing > Shirts",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Shirts',

      image:
        'https://shop.marigoldmodern.com/cdn/shop/files/B224AC023_1_600x.jpg?v=1720551622',
      rating: {
        rate: 4.7,
        count: 620,
      },
    },

    {
      id: 25,
      title: "Women's Floral Summer Dress",
      price: 35.0,
      description:
        'Elegant floral dress with a flowy fit, perfect for summer outings and casual events. Lightweight fabric ensures comfort in warm weather.',
      // category: "womens > clothing > Tops",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Tops',

      image:
        'https://cdn.shopify.com/s/files/1/0281/5757/5299/products/image_b8598dc7-741d-4f4b-b1ad-7b4f16b77f74_1445x.jpg?v=1675779170',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 26,
      title: "Boys' Stretch Denim Pants",
      price: 30.0,
      description:
        'Comfortable stretch denim pants for boys, offering a perfect fit and flexibility. Ideal for everyday wear or casual outings.',
      // category: "kids > Clothing > Pants",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Pants',

      image:
        'https://www.pinkylollypop.com/wp-content/uploads/2024/03/32400004-tod-32400008-1.jpg',
      rating: {
        rate: 4.5,
        count: 430,
      },
    },

    {
      id: 27,
      title: 'Stylish Bomber Jacket',
      price: 89.0,
      description: 'A trendy and functional jacket for colder days.',
      // category: "Mens > Clothing > Pants",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Pants',

      image:
        'https://i.pinimg.com/736x/32/cb/6c/32cb6c465c8a3bfb080917c061f46237.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 28,
      title: 'Warm Down Puffer Jacket',
      price: 120.0,
      description: 'A cozy and insulated jacket for winter weather.',
      // category: "Mens > Clothing > shorts & Swimwear",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men shorts & Swimwear',

      image:
        'https://lp.arket.com/app006prod?set%3Dsource[02_0644961_005_1]%2Ctype[PRODUCT]%2Cdevice[hdpi]%2Cquality[80]%2CImageVersion[201909111034]%26call%3Durl[file:%2Fproduct%2Fmain]',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 29,
      title: "Girls' Floral Print Leggings",
      price: 18.0,
      description:
        "Trendy and comfortable leggings with a beautiful floral print, perfect for girls' casual wear. Made from soft cotton fabric for ultimate comfort.",
      // category: "kids > Clothing > Pants",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Pants',
      image:
        'https://carrotegypt.com/wp-content/uploads/2024/03/2414921%D8%A3%D8%B2%D8%B1%D9%8206.jpg',
      rating: {
        rate: 4.6,
        count: 540,
      },
    },

    {
      id: 30,
      title: "Women's Wool Peacoat",
      price: 110.0,
      description:
        'A classic wool peacoat featuring a double-breasted design and a tailored fit. Suitable for formal or casual occasions.',
      // category: "womens > clothing > Tops",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Tops',

      image:
        'https://m.media-amazon.com/images/I/41j+MwlcWqL._QL92_SH45_SR240,220_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 31,
      title: 'Comfortable Crewneck T-Shirt (Basic)',
      price: 15.0,
      description: 'A simple and affordable t-shirt for everyday wear.',
      // category: "Mens > Clothing > shorts & Swimwear",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men shorts & Swimwear',

      image:
        'https://th.bing.com/th/id/OIP.VHOryi2FL5ZI64oUFQNnxQAAAA?rs=1&pid=ImgDetMain',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 32,
      title: ' Leather Moto Biker Jacket',
      price: 29.95,
      description:
        '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
      // category: "womens > clothing > Skirts",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Dresses',

      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      rating: {
        rate: 2.9,
        count: 340,
      },
    },

    {
      id: 33,
      title: 'Trendy Graphic Tee',
      price: 25.0,
      description: 'A fun and expressive t-shirt with a unique graphic design.',
      // category: "Mens > Clothing > Sweaters & Hoodies",
      category: 'Men',
      subcategory: 'Clothing',
      supsupcategory: 'Men Sweaters & Hoodies',

      image:
        'https://cdn.shopify.com/s/files/1/1520/5960/files/NFTSFUTURE_SS_Creme_Front.jpg?v=1683927261&width=650',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 34,
      title: ' Leather Moto Biker Jacket',
      price: 29.95,
      description:
        '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
      // category: "womens > clothing > Skirts",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'Skirts',

      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      rating: {
        rate: 2.9,
        count: 340,
      },
    },

    {
      id: 35,
      title: "Women's Lightweight Cardigan",
      price: 28.0,
      description:
        'Soft and cozy cardigan with an open front design, perfect for layering during cooler months.',
      // category: "womens > clothing > jeans",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'jeans',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81LlRQoAKyL._SL250_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 36,
      title: "Women's Floral Summer Dress",
      price: 35.0,
      description:
        'Elegant floral dress with a flowy fit, perfect for summer outings and casual events. Lightweight fabric ensures comfort in warm weather.',
      // category: "womens > clothing > jeans",
      category: 'Women',
      subcategory: 'Clothing',
      supsupcategory: 'jeans',
      image:
        'https://cdn.shopify.com/s/files/1/0281/5757/5299/products/image_b8598dc7-741d-4f4b-b1ad-7b4f16b77f74_1445x.jpg?v=1675779170',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 37,
      title: "Women's Floral Summer Bag",
      price: 35.0,
      description:
        'Elegant floral dress with a flowy fit, perfect for summer outings and casual events. Lightweight fabric ensures comfort in warm weather.',
      // category: "womens > Bags > Shoulder Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'Shoulder Bags',
      image: 'https://m.media-amazon.com/images/I/61UDx9jF0mL._AC_SL1315_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 38,
      title: "Women's Floral Summer Bag",
      price: 35.0,
      description:
        'Elegant floral dress with a flowy fit, perfect for summer outings and casual events. Lightweight fabric ensures comfort in warm weather.',
      // category: "womens > Bags > Shoulder Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'Shoulder Bags',

      image: 'https://m.media-amazon.com/images/I/71Z2rgjGGPS._AC_UL1500_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 39,
      title: "Women's Canvas Tote Bag",
      price: 28.0,
      description:
        'Spacious and sturdy canvas tote bag, perfect for carrying groceries, books, or beach essentials. Simple yet stylish design suitable for everyday use.',
      // category: "womens > Bags > Tote Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'STote Bags',

      image:
        'https://cdn.thewirecutter.com/wp-content/media/2023/11/totebags-2048px-cuyanabagexterior.jpg?auto=webp&quality=75&width=1024',
      rating: {
        rate: 4.2,
        count: 523,
      },
    },

    {
      id: 40,
      title: 'Eco-Friendly Reusable Tote Bag',
      price: 22.5,
      description:
        'Environmentally-friendly tote bag made from recycled materials. Perfect for grocery shopping or as a lightweight daily carry-all.',
      // category: "womens > Bags > Tote Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'Tote Bags',

      image: 'https://m.media-amazon.com/images/I/61501FzWidL._AC_SL1001_.jpg',
      rating: {
        rate: 4.5,
        count: 412,
      },
    },

    {
      id: 41,
      title: "Women's Satin Evening Clutch Bag",
      price: 40.0,
      description:
        'Elegant satin clutch bag with a sleek design, perfect for evening events and formal occasions. Features a detachable chain strap for versatility.',
      // category: "womens > Bags > Clutch Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'Tote Bags',

      image:
        'https://cdn-images.farfetch-contents.com/25/15/75/55/25157555_55232211_1000.jpg',
      rating: {
        rate: 4.7,
        count: 301,
      },
    },

    {
      id: 42,
      title: 'Luxury Leather Clutch Bag',
      price: 65.0,
      description:
        'Sophisticated leather clutch bag with a minimalist design. Ideal for both formal events and casual evenings out. Features an interior pocket for small essentials.',
      // category: "womens > Bags > Clutch Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'Clutch Bags',

      image:
        'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tclutch-on-a-chain-73473764_1070829_ED.jpg?&op_usm=2.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&',
      rating: {
        rate: 4.3,
        count: 250,
      },
    },

    {
      id: 43,
      title: 'Casual Canvas Backpack',
      price: 50.0,
      description:
        'Durable canvas backpack with multiple compartments, perfect for everyday use and travel. Features padded straps for extra comfort.',
      // category: "womens > Bags > BackPacks Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'BackPacks Bags',

      image:
        'https://antitheftbags.co.uk/wp-content/uploads/2021/04/Oxford-Women-s-Backpack-Large-Capacity-Anti-Theft-Backpack-Woman-s-Bag-2022-Trend-Travel-Backpacks.jpg_Q90.jpg_-1.jpg',
      rating: {
        rate: 4.5,
        count: 420,
      },
    },

    {
      id: 44,
      title: 'Leather Fashion Backpack',
      price: 85.0,
      description:
        'Stylish leather backpack with a sleek and compact design. Ideal for both casual and formal outfits. Includes interior pockets for organization.',
      // category: "womens > Bags > BackPacks Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'BackPacks Bags',

      image:
        'https://i.pinimg.com/564x/b1/8a/ab/b18aabc51ef4ac4461d0a1f0af6b160d.jpg',
      rating: {
        rate: 4.8,
        count: 312,
      },
    },

    {
      id: 45,
      title: 'Leather Belt Bag',
      price: 40.0,
      description:
        'Compact leather belt bag, perfect for hands-free convenience. Features a sleek design with multiple compartments for essentials.',
      // category: "womens > Bags > Belt Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'Belt Bags',

      image:
        'https://nypost.com/wp-content/uploads/sites/2/2022/04/Screen-Shot-2022-04-04-at-9.50.41-AM.png',
      rating: {
        rate: 4.2,
        count: 512,
      },
    },

    {
      id: 46,
      title: 'Sporty Nylon Belt Bag',
      price: 30.0,
      description:
        'Lightweight and durable nylon belt bag, ideal for outdoor activities and travel. Adjustable strap for a comfortable fit.',
      // category: "womens > Bags > Belt Bags",
      category: 'Women',
      subcategory: 'Bags',
      supsupcategory: 'Belt Bags',

      image:
        'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/265025/1.jpg?6281',
      rating: {
        rate: 4.7,
        count: 378,
      },
    },

    {
      id: 47,
      title: 'Adidas Ultraboost Running Shoes',
      price: 180.0,
      description:
        'High-performance running shoes designed with responsive cushioning and a flexible Primeknit upper for ultimate comfort. Perfect for long-distance runs and daily wear.',
      // category: "mens > Shoes > Adidas",
      category: 'Men',
      subcategory: 'Shoes',
      supsupcategory: 'Adidas',

      image:
        'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_530,w_530/shoes_men_tcc_d_44a809233a.jpg',
      rating: {
        rate: 4.8,
        count: 1200,
      },
    },

    {
      id: 48,
      title: 'Adidas Superstar Classic Sneakers',
      price: 85.0,
      description:
        'Iconic Adidas Superstar sneakers with a leather upper and signature rubber shell toe. A timeless style suitable for casual wear.',
      // category: "mens > Shoes > Adidas",
      category: 'Men',
      subcategory: 'Shoes',
      supsupcategory: 'Adidas',

      image:
        'https://www.famousfootwear.com/blob/product-images/20000/31/41/7/31417_pair_feed1000.jpg',
      rating: {
        rate: 4.5,
        count: 900,
      },
    },

    {
      id: 49,
      title: 'Nike Air Zoom Pegasus 38',
      price: 120.0,
      description:
        "Nike's signature running shoes with responsive cushioning and breathable mesh. Designed for everyday runs and long-distance training.",
      // category: "mens > Shoes > Nike",
      category: 'Men',
      subcategory: 'Shoes',
      supsupcategory: 'Nike',

      image:
        'https://w7.pngwing.com/pngs/809/934/png-transparent-nike-free-sneakers-shoe-running-shose-white-sport-outdoor-shoe-thumbnail.png',
      rating: {
        rate: 4.7,
        count: 950,
      },
    },

    {
      id: 50,
      title: "Nike Air Force 1 '07",
      price: 90.0,
      description:
        'Classic Nike Air Force 1 sneakers with a leather upper and durable rubber outsole. A streetwear staple for decades, offering comfort and timeless style.',
      // category: "mens > Shoes > Nike",
      category: 'Men',
      subcategory: 'Shoes',
      supsupcategory: 'Nike',

      image:
        'https://cdn.salla.sa/pQxaGw/e65ef962-c5b1-4eaf-9f03-db46a1f362a6-1000x1000-pWp6abQQpjqGUQYHfQda6PeHm7ofKvjTXYpoCR7I.jpg',
      rating: {
        rate: 4.6,
        count: 1100,
      },
    },

    {
      id: 51,
      title: 'New Balance Fresh Foam 1080v11',
      price: 150.0,
      description:
        'High-performance running shoes with Fresh Foam cushioning for an ultra-smooth and comfortable ride. Designed for long runs with breathable mesh and a snug fit.',
      // category: "mens > Shoes > New Balance",
      category: 'Men',
      subcategory: 'Shoes',
      supsupcategory: 'New Balance',

      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsE0YFk2TcMbxO1W5ZTWiXRA0fpWmOS9E-g&s',
      rating: {
        rate: 4.8,
        count: 800,
      },
    },

    {
      id: 52,
      title: 'New Balance 574 Core',
      price: 85.0,
      description:
        'Classic retro-inspired sneakers with durable suede and mesh upper, providing comfort and style for everyday wear. Features ENCAP midsole cushioning for added support.',
      // category: "mens > Shoes > New Balance",
      category: 'Men',
      subcategory: 'Shoes',
      supsupcategory: 'New Balance',

      image:
        'https://www.jdsports.cy/2735718-product_horizontal/new-balance-9060-papoutsi-classics.jpg',
      rating: {
        rate: 4.7,
        count: 900,
      },
    },

    {
      id: 53,
      title: 'Vans Old Skool',
      price: 60.0,
      description:
        'Iconic skate shoes with the classic Vans side stripe, featuring a durable canvas and suede upper. Offers padded collars for support and flexibility, making it perfect for both skating and everyday wear.',
      // category: "mens > Shoes > Vanss",
      category: 'Men',
      subcategory: 'Shoes',
      supsupcategory: 'Vanss',

      image:
        'https://www.sneaker10.gr/2890415-product_medium/vans-old-skool-black-gum.jpg',
      rating: {
        rate: 4.9,
        count: 1500,
      },
    },

    {
      id: 54,
      title: 'Vans Authentic',
      price: 50.0,
      description:
        'Low-top skate shoes featuring a simple design with a sturdy canvas upper and signature waffle rubber outsoles. Offers a timeless look for casual wear with a snug fit for comfort.',
      // category: "mens > Shoes > Vanss",
      category: 'Men',
      subcategory: 'Shoes',
      supsupcategory: 'Vanss',

      image:
        'https://daklinic.com/cdn/shop/products/vn005uf6qu_grn_05_clipped_rev_1.jpg?v=1679891906',
      rating: {
        rate: 4.6,
        count: 1300,
      },
    },

    {
      id: 55,
      title: "Boys' Quick-Dry Swim Trunks",
      price: 22.0,
      description:
        'Lightweight and quick-drying swim trunks for boys, perfect for beach days or poolside fun. Features a comfortable elastic waistband and vibrant patterns.',
      // category: "kids > Clothing > Shorts & Swimwear",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Shorts & Swimwear',

      image:
        'https://assets.adidas.com/images/w_1880,f_auto,q_auto/a53bd0b81fae420ca45b694f4842d942_9366/IP1583_01_laydown.jpg',
      rating: {
        rate: 4.7,
        count: 390,
      },
    },

    {
      id: 56,
      title: "Girls' Floral Swimwear Set",
      price: 28.0,
      description:
        'Cute floral swimwear set for girls, including a top and bottom. Made from soft, stretchy fabric for ultimate comfort during swimming or beach activities.',
      // category: "kids > Clothing > Shorts & Swimwear",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Shorts & Swimwear',

      image:
        'https://www.surfstitch.com/on/demandware.static/-/Sites-ss-master-catalog/default/dw34e43494/images/ERGBS03117-MEQ0/PRISM-PINK-KIDS-YOUTH-GIRLS-ROXY-SWIMWEAR-ERGBS03117-MEQ0_1.JPG',
      rating: {
        rate: 4.6,
        count: 450,
      },
    },

    {
      id: 57,
      title: "Boys' Quick-Dry Swim Trunks",
      price: 22.0,
      description:
        'Lightweight and quick-drying swim trunks for boys, perfect for beach days or poolside fun. Features a comfortable elastic waistband and vibrant patterns.',
      // category: "kids > Clothing > Sweaters & Hoodies",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Sweaters & Hoodies',
      image:
        'https://www.yoox.com/images/items/10/10039481GQ_14_f.jpg?impolicy=crop&width=387&height=490',
      rating: {
        rate: 4.7,
        count: 390,
      },
    },

    {
      id: 58,
      title: "Girls' Floral Swimwear Set",
      price: 28.0,
      description:
        'Cute floral swimwear set for girls, including a top and bottom. Made from soft, stretchy fabric for ultimate comfort during swimming or beach activities.',
      // category: "kids > Clothing > Sweaters & Hoodies",
      category: 'kids',
      subcategory: 'Clothing',
      supsupcategory: 'kids Sweaters & Hoodies',

      image:
        'https://i5.walmartimages.com/seo/Hoodies-Letter-Kids-Tie-Sweatshirts-Tops-Clothes-Sleeve-Dyed-Girls-Short-Teen-Long-Pullover-Girls-Tops-Teenager-Sweaters-Tween-Girls_a63180f9-5352-4479-87b9-41a57ffd69b1.7cca67cd562366cbcfe0e60661e12cae.jpeg',
      rating: {
        rate: 4.6,
        count: 450,
      },
    },
  ];

  filteredProducts = [...this.products];

  onCategorySelected(event: {
    category: string;
    subcategory?: string;
    supsupcategory?: string;
  }) {
    const { category, subcategory, supsupcategory } = event;

    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory = category
        ? product.category.toLowerCase() === category.toLowerCase()
        : true;
      const matchesSubCategory = subcategory
        ? product.subcategory?.toLowerCase() === subcategory.toLowerCase()
        : true;
      const matchesSupSubCategory = supsupcategory
        ? product.supsupcategory?.toLowerCase() === supsupcategory.toLowerCase()
        : true;

      return matchesCategory || matchesSubCategory || matchesSupSubCategory;
    });
  }
}
