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
      title: 'Diamond Necklace',
      price: 300,
      description: 'Diamond Necklace-Elegant-Women',
      category: 'accessories',
      image:
        'https://ion.bluenile.com/sets/Jewelry-bn/194174/NOP/Images/stage.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },


    {
      id: 2,
      title: "Leather Bracelet",
      price: 20,
      description: 'A classic and stylish bracelet for men.',
      category: 'asseccories',
      image:
        'https://i.pinimg.com/originals/76/05/82/7605827032655a581cc9abc57e05484e.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 3,
      title: "Denim Jacket",
      price: 42.5,
      description:
        'Classic denim jacket with a button-up front and chest pockets. A timeless wardrobe staple for layering',
      category: "women's clothing",
      image:
        'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/722562/1.jpg?9739',
      rating: {
        rate: 2.6,
        count: 235,
      },
    },

    {
      id: 4,
      title: "Casual Maxi Dress",
      price: 50.0,
      description:
        'Long maxi dress with a relaxed fit and soft fabric. Perfect for casual days or beach outings.',
      category: "women's clothing",
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41gpl70tusL._UL500_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 5,
      title: 'Khaki Chinos ',
      price: 38.0,
      description: 'Versatile and comfortable chinos for everyday wear.',
      category: "men's clothing",
      image:
        'https://www.cordings.co.uk/media/catalog/product/cache/e89452242e02ce17aec9919532009943/t/r/tr478stone.jpg',
      rating: {
        rate: 3.1,
        count: 259,
      },
    },

    {
      id: 6,
      title: 'Unisex Aviator Sunglasses',
      price: 50,
      description:
        'A timeless and stylish pair of sunglasses for both men and women',
      category: 'accessories',
      image:
        'https://th.bing.com/th?id=OIF.lyN41FD%2bBtTSHsQOXCYSdg&rs=1&pid=ImgDetMain',
      rating: {
        rate: 4.6,
        count: 400,
      },
    },

    {
      id: 7,
      title: "Cufflinks",
      price: 150,
      description:
        'A formal accessory for men to add a touch of sophistication to their dress shirts',
      category: 'accessories',
      image:
        'https://image.harrods.com/tateossian-square-cufflinks_14993064_25394599_2048.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 8,
      title: "Lightweight Cardigan",
      price: 28.0,
      description:
        'Soft and cozy cardigan with an open front design, perfect for layering during cooler months.',
      category: "women's clothing",
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81LlRQoAKyL._SL250_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 9,
      title: 'Crewneck Sweater',
      price: 65.0,
      description:
        'Relaxed-Fit Soft and cozy sweater for cool weather. Perfect for layering.',
      category: "men's clothing",
      image:
        'https://www.houseofblanks.com/cdn/shop/files/HOB-RelaxedCrew-Heather-Front.jpg?v=1707341201&width=533',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 10,
      title: 'Leather Strap Watch',
      price: 150,
      description: 'A timeless and elegant watch with a classic aesthetic.',
      category: 'accessories',
      image: 'https://i.ebayimg.com/images/g/CVYAAOSwaENj7A27/s-l500.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 11,
      title: "Chiffon Blouse",
      price: 30.0,
      description:
        'Elegant chiffon blouse with a relaxed fit, featuring delicate detailing on the neckline and sleeves..',
      category: "women's clothing",
      image:
        'https://cdn-img.prettylittlething.com/8/e/d/1/8ed19d6f6ba88357f41b3d2db157b6582314156f_CLV0472_3.JPG',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 12,
      title: "Midi Skirt",
      price: 35.0,
      description:
        'A-line midi skirt with a flowy design, perfect for casual wear or semi-formal occasions..',
      category: "women's clothing",
      image: 'https://m.media-amazon.com/images/I/51-wJ71RG+L._AC_SX385_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 13,
      title: 'Slim Fit T-Shirts ',
      price: 22.3,
      description:'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image: 'https://m.media-amazon.com/images/I/81MXgcHqBIL._AC_SL1500_.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    
    {
      id: 14,
      title: 'Silver Necklace',
      price: 100,
      description: 'A versatile piece that can be dressed up or down.',
      category: 'accessories',
      image:
        'https://content.thewosgroup.com/productimage/12040048/12040048_1.jpg?impolicy=zoom',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 15,
      title: "Pullover Hoodie",
      price: 35.0,
      description:
        'Fleece-lined hoodie with adjustable drawstrings and a front pocket. Soft fabric, suitable for layering in cold weather.',
      category: "men's clothing",
      image:
        'https://i.pinimg.com/originals/3b/f4/ad/3bf4ad1ad55d2302ab942396b94ee4f9.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 16,
      title: "Jumpsuit",
      price: 55.0,
      description:
        'Trendy jumpsuit with a cinched waist and wide-leg pants. Great for casual outings or summer nights.',
      category: "women's clothing",
      image:
        'https://i5.walmartimages.com/asr/2a5d37f4-ec43-43ec-80a9-7e8bb0c35e6a.7997b57df5cb9c0f1bf3a024702e9b77.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 17,
      title: "Shirt",
      price: 40.0,
      description: 'Cozy and soft.',
      category: "women's clothing",
      image:
        'https://ae01.alicdn.com/kf/HTB1v7YXSpXXXXXNaVXXq6xXFXXXq/2017-Women-Floral-Embroidery-White-Blouses-Roll-up-Long-Sleeve-V-Neck-Curved-Hem-Ladies-Office.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 18,
      title: 'Silver Earrings',
      price: 160,
      description: 'Simple and glowy',
      category: 'accessories',
      image:
        'https://www.rubyandoscar.com/media/catalog/product/r/1/r131245sa.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768&canvas=768:768',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 19,
      title: 'Durable Denim Jeans',
      price: 70.0,
      description: 'Classic straight-leg jeans made with high-quality denim.',
      category: "men's clothing",
      image:
        'https://th.bing.com/th/id/OIP.-Awebs3_y4N0vT-vv030IwAAAA?rs=1&pid=ImgDetMain',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 20,
      title: "Knit Sweater",
      price: 40.0,
      description:
        'Cozy and soft knit sweater, ideal for chilly days. Features a relaxed fit with ribbed cuffs and hem.',
      category: "women's clothing",
      image:
        'https://images-cdn.ubuy.co.in/654ec7dd9fb75b0f9d500283-aelfric-eden-cable-knit-sweater-women.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 21,
      title: "Leather Wallet",
      price: 100.0,
      description:
        'A classic and functional accessory for men to carry cash and cards.',
      category: 'accessories',
      image:
        'https://ae01.alicdn.com/kf/HTB1Y2c_aOnrK1Rjy1Xcq6yeDVXap/DIKEDAKU-Baellerry-Lucky-Box-Gift-Short-Wallet-Zipper-Multifunction-Wallet-Multicard-Zero-Wallet-Men-Purse.jpg',
      rating: {
        rate: 3,
        count: 400,
      },
    },

    {
      id: 22,
      title: "Slim Fit",
      price: 15.99,
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating: {
        rate: 2.1,
        count: 430,
      },
    },

    {
      id: 23,
      title: 'Oxford Button-Down Shirt ',
      price: 45.0,
      description:
        'A timeless wardrobe staple. Crisp cotton fabric and a clean',
      category: "men's clothing",
      image:
        'https://media.endclothing.com/media/catalog/product/2/9/29-05-2019_ami_heartlogooxfordshirt_white_a19c013-45-100_blr_1.jpg',
      rating: {
        rate: 5,
        count: 260,
      },
    },

    {
      id: 24,
      title: 'Silver Bracelet',
      price: 120,
      description: 'Silver Bracelet Lady women jewelry',
      category: 'accessories',
      image:
        'https://assets.anniehaakdesigns.co.uk/media/catalog/product/t/u/tumbnail_28ad8b45-da3d-4636-8a5e-c89e3e86e909.jpg?q=90&canvas.width=325&canvas.height=325&canvas.color=ffffff&w=325&h=325',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 25,
      title: "Summer Dress",
      price: 35.0,
      description:
        'Elegant floral dress with a flowy fit, perfect for summer outings and casual events. Lightweight fabric ensures comfort in warm weather.',
      category: "women's clothing",
      image:
        'https://cdn.shopify.com/s/files/1/0281/5757/5299/products/image_b8598dc7-741d-4f4b-b1ad-7b4f16b77f74_1445x.jpg?v=1675779170',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 26,
      title: 'Stainless Steel Watch',
      price: 150,
      description: 'A sleek and modern timepiece for everyday wear.',
      category: 'accessories',
      image:
        'https://i5.walmartimages.com/seo/Minimalist-Stainless-Steel-Quartz-Men-s-Watch-For-Men_0a4ecf12-aaa0-4614-af9a-b1aa40fd4a84.101672e262c7f6a51cc26815b3d9e45b.jpeg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 27,
      title: 'Bomber Jacket',
      price: 89.0,
      description: 'A trendy and functional jacket for colder days.',
      category: "men's clothing",
      image:
        'https://i.pinimg.com/736x/32/cb/6c/32cb6c465c8a3bfb080917c061f46237.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 28,
      title: 'Puffer Jacket',
      price: 120.0,
      description: 'A cozy and insulated jacket for winter weather.',
      category: "men's clothing",
      image:
        'https://lp.arket.com/app006prod?set%3Dsource[02_0644961_005_1]%2Ctype[PRODUCT]%2Cdevice[hdpi]%2Cquality[80]%2CImageVersion[201909111034]%26call%3Durl[file:%2Fproduct%2Fmain]',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 29,
      title: 'Simple Necklace',
      price: 200,
      description: 'A simple accessory for women',
      category: 'accessories',
      image:
        'https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/13464023_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 30,
      title: "Wool Peacoat",
      price: 110.0,
      description:
        'A classic wool peacoat featuring a double-breasted design and a tailored fit. Suitable for formal or casual occasions.',
      category: "women's clothing",
      image:
        'https://m.media-amazon.com/images/I/41j+MwlcWqL._QL92_SH45_SR240,220_.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 31,
      title: 'Basic T-Shirt',
      price: 15.0,
      description: 'A simple and affordable t-shirt for everyday wear.',
      category: "men's clothing",
      image:
        'https://th.bing.com/th/id/OIP.VHOryi2FL5ZI64oUFQNnxQAAAA?rs=1&pid=ImgDetMain',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 32,
      title: ' Leather Jacket',
      price: 29.95,
      description:
        '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      rating: {
        rate: 2.9,
        count: 340,
      },
    },

    {
      id: 33,
      title: 'Graphic Tee',
      price: 25.0,
      description: 'A fun and expressive trendy t-shirt with a unique graphic design.',
      category: "men's clothing",
      image:
        'https://cdn.shopify.com/s/files/1/1520/5960/files/NFTSFUTURE_SS_Creme_Front.jpg?v=1683927261&width=650',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ];
  searchText: string = '';

}
