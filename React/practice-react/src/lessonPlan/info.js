
function Info(props){

    console.log(props)
    
    
    return(
        <div className="info">
            <h3>About {props.name}</h3>
            <p>fake para</p>
            <h3>{props.name}'s Interests</h3>
            <p>fake para</p>
        </div>
    )
}

export default Info