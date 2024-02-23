function Forecast(props){
    console.log(props)
    console.log(props.temp)
    return (
    <div>
        <p>{props.hours}:00</p>
        <img src = {props.img} ></img>
        {props.temp !== NaN ? (<p>{props.temp}°C</p>):(<p></p>)}
    </div>
    )
}

export default Forecast;