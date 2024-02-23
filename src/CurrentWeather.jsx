function CurrentWeather(props){
    return (<div>
        <img src = {props.img} ></img>
        <div>{props.temp}°C</div>
        <div>{props.description}</div>
        <div>{props.name}</div>
    </div>)

    
  
};

export default CurrentWeather