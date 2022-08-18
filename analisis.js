
const arr = [];

//Analisis personal de juanita.

function encontrarPersona(personaEnBusqueda) {

    return salarios.find(persona => persona.name == personaEnBusqueda);

    /* const persona = salarios.find((persona) => {
        return persona.name == personaEnBusqueda;
     });
    return persona; */
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const medianaSalarios = platziMath.calculateMedian(salarios);

    console.log({trabajos ,salarios, medianaSalarios});
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    

    const medianaPorcentajeCrecimiento = platziMath.calculateMedian(porcentajesCrecimiento);

    
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
    
    const nuevoSalario = ultimoSalario + aumento;
    
    console.log({porcentajesCrecimiento, medianaPorcentajeCrecimiento, ultimoSalario, aumento, nuevoSalario});

    return nuevoSalario;
}

//analisis empresarial
/* {
Industrias mokepon: {
    2018: [salario, salario, salario]
    2019:
    2025:
    2026
},
Industrias mokepon: {},
Industrias mokepon: {},
Industrias mokepon: {},
}
}*/

const empresas = {};

for (persona of salarios) {

    for(trabajo of persona.trabajos) {

        if(!empresas[trabajo.empresa]) {
        empresas[trabajo.empresa] = {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }


        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    
    }

}

console.log({empresas});