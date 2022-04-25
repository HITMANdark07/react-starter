const Card = ({name, url}) => {
    return(
        <div style={{
            border:'2px solid green',
            borderRadius:5
        }}>
          <h1>{name}</h1>
          <p>{url}</p>
        </div>
    )
}

export default Card;