/* GET about page. */
const about = (req, res) => {
    res.render('about', { 
        title: 'Sobre nosotros' ,
        description: 'Conoce mas sobre ByE',
        about_img: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/120504052_2209107295900331_1553419044402864033_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=84a396&_nc_ohc=MRO1cyi_bZMAX98Hs7Q&_nc_ht=scontent.fuio1-2.fna&oh=fe694f2460911b45fadddfc3e950c69e&oe=61925E57',
        texto: 'ByE Bonitos y Esponjositos es una tienda online ecuatoriana, fundada por dos hermanas que disfrutan del arte, la comida y la salud. La tienda fue fundada en el año 2020 con el objetivo de aprovechar el conocimiento del tejido de estos peluches ',
       
        title2: 'Nuestros Productos',
        description2:'Conoce cuales son nuestros productos',
        image_product: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/145956349_355288232169020_8931413860964012625_n.png?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=7zMXqBP8TVwAX9hbfcp&_nc_ht=scontent.fuio1-2.fna&oh=aa19fe6345b8b2f81f92d3972717ef93&oe=6190A262',
        'productos' : [{
         nombre_producto: 'Peluches crochet personalizados, por stock o bajo pedido'
          },{
        nombre_producto: 'Corazones Diamante de Chocolate ByE'
          },{
        nombre_producto: 'Bear Bomb ByE'
          },{
        nombre_producto: 'Bombones de chocolate rellenos'
          },{
        nombre_producto: 'Productos para Skincare'      
          }],
        
        title3: 'Redes sociales',
        'redes' : [{
            imagen: (src = '/images/facebook.png'),
            nombre: 'Facebook',
            link: 'https://www.facebook.com/354656622232181/posts/355289528835557/?sfnsn=mo',
        },{
            imagen: (src = '/images/insta.png'),
            nombre: 'Instagram',
            link:'https://www.instagram.com/bye_ec/',
        },{
            imagen: (src = '/images/wpp.png'),
            nombre: 'WhatsApp',
            link:'https://api.whatsapp.com/send?phone=+593 98 743 3794',
        }
    
    
         ]

        
});
};


module.exports = {
    about
};