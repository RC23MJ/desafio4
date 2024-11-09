const propiedades_venta = [
    {
        id: 1,
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: "4 habitaciones",
        baños: "4 baños",
        costo: "5.000",
        smoke: false,
        pets: false
    },

    {
        id: 2,
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: "2 habitaciones",
        baños: "1 baños",
        costo: "200",
        smoke: true,
        pets: true
    },

    {
        id: 3,
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: "3 habitaciones",
        baños: "3 baños",
        costo: "4.500",
        smoke: false,
        pets: true
    },

    {
        id: 4,
        nombre: 'Apartamento en la periferia de la ciudad',
        src: 'https://cache.enlaceinmobiliario.cl/cdn-cgi/image/format=webp,width=auto,height=293/CasaAcopia-5fa3f129a63948.webp',
        descripcion: 'Este apartamento de 5 habitaciones está ubicado en la periferia de la ciudad.',
        ubicacion: '123 Orange street, Toronto, CA 91234',
        habitaciones: "5 habitaciones",
        baños: "4 baños",
        costo: "6.000",
        smoke: true,
        pets: true
    },

    {
        id: 5,
        nombre: 'Apartamento en zona residencial',
        src: 'https://www.ceciliagimeno.cl/files/8467/imagenes/01728503107.jpg?v=1728503114',
        descripcion: 'Este elegante apartamento moderno está ubicado una zona residencial',
        ubicacion: '897 Apple Street, New York, CA 25638',
        habitaciones: "3 habitaciones",
        baños: "2 baños",
        costo: "2.500",
        smoke: true,
        pets: false
    },
    ];

    const ventaProp = document.querySelector(".venta")

    let html = ""

    for (let propVenta of propiedades_venta) {

        let smokeColor = propVenta.smoke ? 'style="color: green;"' : 'style="color: red;"';
        let petsColor = propVenta.pets ? 'style="color: green;"' : 'style="color: red;"';
        
        html += `
        <div class="ventas">
            <img src = "${propVenta.src}" alt="${propVenta.nombre}">
            <h5>${propVenta.nombre}</h5>
            <p>${propVenta.descripcion}</p>
            <p><i class="fa-solid fa-location-dot"></i> ${propVenta.ubicacion}</p>
            <p><i class="fa-solid fa-bed"></i> ${propVenta.habitaciones} | <i class="fa-solid fa-bath"></i> ${propVenta.baños}</p>            
            <p><i class="fa-solid fa-dollar-sign"></i> ${propVenta.costo}</p>
            <p ${smokeColor}>${propVenta.smoke ? '<i class="fa-solid fa-smoking"></i> Se permite fumar' :'<i class="fa-solid fa-ban-smoking"></i> No se permite fumar'}</p>
            <p ${petsColor}>${propVenta.pets ? '<i class="fa-solid fa-paw"></i> Mascotas permitidas' : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}</p>
            
        </div>       

        `;
    }

    ventaProp.innerHTML = html