
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