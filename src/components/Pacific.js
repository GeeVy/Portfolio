const Pacific = (props)=>{
    console.log(props)
    return (
        <div>
            <h2> { props.pacificData.country } </h2>
            <p> { "capital: "+ props.pacificData.capital } </p>
            <p> { "population: " +props.pacificData.population } </p>
        </div>
    )
}


export default Pacific;
