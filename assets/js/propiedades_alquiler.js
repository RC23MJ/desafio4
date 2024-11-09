const propiedades_alquiler = [
    {
        id: 1,
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "2 Habitaciones",
        baños: "2 Baños",
        costo: "2.000",
        smoke: false,
        pets: true
    },

    {
        id: 2,
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: "3 Habitaciones",
        baños: "3 Baños",
        costo: "2.500",
        smoke: true,
        pets: true
    },

    {
        id: 3,
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '5123 Main Street, Anytown, CA 91234',
        habitaciones: "2 habitaciones",
        baños: "2 baños",
        costo: "2.200",
        smoke: false,
        pets: false
    },

    {
        id: 4,
        nombre: 'Apartamento en la periferia de la ciudad',
        src: 'https://pics.nuroa.com/casa_en_arriendo_en_huinganal_2190012706209798451.jpg',
        descripcion: 'Este apartamento de 5 habitaciones está ubicado en la periferia de la ciudad.',
        ubicacion: '123 Orange street, Toronto, CA 91234',
        habitaciones: "5 Habitaciones",
        baños: "4 Baños",
        costo: "8.000",
        smoke: true,
        pets: true
    },

    {
        id: 5,
        nombre: 'Apartamento en zona residencial',
        src: 'https://fotoalquiler.com/imagenes-filtros/alquiler-casas-lujo.jpg',
        descripcion: 'Este elegante apartamento moderno está ubicado una zona residencial',
        ubicacion: '897 Apple Street, New York, CA 25638',
        habitaciones: "3 habitaciones",
        baños: "2 baños",
        costo: "3.500",
        smoke: true,
        pets: false
    },
    ];

    const alquilerProp = document.querySelector(".alquiler")

    let html = ""

    for (let propAlquiler of propiedades_alquiler) {

        let smokeColor = propAlquiler.smoke ? 'style="color: green;"' : 'style="color: red;"';
        let petsColor = propAlquiler.pets ? 'style="color: green;"' : 'style="color: red;"';
        
        html += `
        <div class="alquileres">
            <img src = "${propAlquiler.src}" alt="${propAlquiler.nombre}">
            <h5>${propAlquiler.nombre}</h5>
            <p>${propAlquiler.descripcion}</p>
            <p><i class="fa-solid fa-location-dot"></i> ${propAlquiler.ubicacion}</p>
            <p><i class="fa-solid fa-bed"></i> ${propAlquiler.habitaciones} | <i class="fa-solid fa-bath"></i> ${propAlquiler.baños}</p>            
            <p><i class="fa-solid fa-dollar-sign"></i> ${propAlquiler.costo}</p>
            <p ${smokeColor}>${propAlquiler.smoke ? '<i class="fa-solid fa-smoking"></i> Se permite fumar' :'<i class="fa-solid fa-ban-smoking"></i> No se permite fumar'}</p>
            <p ${petsColor}>${propAlquiler.pets ? '<i class="fa-solid fa-paw"></i> Mascotas permitidas' : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}</p>
            
        </div>       

        `;
    }

    alquilerProp.innerHTML = html