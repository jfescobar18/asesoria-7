// Key - Value
var persona = {
    nombre: "Pau",
    apellido: "Escobar",
    edad: 23,
}

var arreglo = ["val", "val2", 25, true]

var personas = [
    {
        nombre: "Fran",
        apellido: "Escobar",
        edad: 27,
    },
    {
        nombre: "Persona 2",
        apellido: "Apellido 2",
        edad: 27,
    },
    {
        nombre: "Persona 3",
        apellido: "Apellido 3",
        edad: 27,
    },
]

// Agregamos un elemento al final del arreglo
personas.push(persona)

// console.log("Este es el nombre completo: " + persona.nombre + " " + persona.apellido);

// console.log("El nombre de la persona 1 es: " + personas[2].nombre)

// Recorremos el arreglo con un índice
for (var i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre)
}

// Recorremos cada objeto del arreglo
personas.forEach((persona) => {
    console.log(persona.nombre)
})

// Recorremos el arreglo, agregamos propiedades nuevas y guardamos el resultado
// en un arreglo nuevo
var personasConInicial = personas.map((persona) => {
    var inicial = persona.nombre.slice(0, 1) + persona.apellido.slice(0, 1)
    // console.log(inicial)
    persona.inicial = inicial
    persona.anioDeNacimiento = 2023 - persona.edad

    return persona
})

console.log(personasConInicial)

// ----------------------------------------------------------
;(function () {
    // De una lista de alumnos separa los que reprobaron y los que aprobaron
    // Imprime su promedio con sus iniciales
    // FE - Aprobado - 6

    var alumnos = [
        {
            nombre: "Fran",
            apellido: "Escobar",
            calificaciones: [7, 5, 4],
        },
        {
            nombre: "Paulina",
            apellido: "Cruz",
            calificaciones: [10, 6, 8],
        },
        {
            nombre: "Andrea",
            apellido: "Jasso",
            calificaciones: [7, 5, 4],
        },
        {
            nombre: "Pedro",
            apellido: "Paramo",
            calificaciones: [9, 5, 4],
        },
        {
            nombre: "Gabriel",
            apellido: "Garcia",
            calificaciones: [10, 8, 1],
        },
    ]

    // Agrega el promedio, estatus e iniciales
    alumnos = alumnos.map((alumno) => {
        var inicial = alumno.nombre.slice(0, 1) + alumno.apellido.slice(0, 1)
        var promedio = 0

        for (var i = 0; i < alumno.calificaciones.length; i++) {
            // se va sumando la calificacion con cada iteracion
            promedio += alumno.calificaciones[i]
        }
        promedio = promedio / alumno.calificaciones.length

        alumno.promedio = promedio
        alumno.inicial = inicial

        if (promedio > 5.99) {
            alumno.estatus = "Aprobado"
        } else {
            alumno.estatus = "Reprobado"
        }

        return alumno
    })

    var alumnosAprobados = alumnos.filter((alumno) => {
        // 2 == "2" -> verdadero
        // 2 === "2" -> falso
        return alumno.estatus == "Aprobado"
    })

    var alumnosReprobados = alumnos.filter((alumno) => {
        // 2 == "2" -> verdadero
        // 2 === "2" -> falso
        return alumno.estatus == "Reprobado"
    })

    // Imprimos resultado con formato requerido
    console.log("Alumnos Aprobados")
    alumnosAprobados.forEach((alumnoAprobado) => {
        console.log(`${alumnoAprobado.inicial} - ${alumnoAprobado.estatus} - ${alumnoAprobado.promedio}`)
    });

    console.log("Alumnos Reprobados")
    alumnosReprobados.forEach((alumnoReprobado) => {
        console.log(
            `${alumnoReprobado.inicial} - ${alumnoReprobado.estatus} - ${alumnoReprobado.promedio}`
        )
    });
})()
