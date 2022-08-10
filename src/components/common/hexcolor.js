const hexColor = () => {
    let string = "0123456789abcdef";
    let color = '';

    for (let index = 0; index < 6; index++){
        let code = Math.floor(Math.random() * string.length)
        color += string[code]
    }

    return '#'+color
}


export const HexColor = () => {
    const bgColor = hexColor();
    const style = {
        height: '100px',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        fontFamily: 'Montserrat',
        margin: '2px auto',
        borderRadius: '5px',
        width: '75%',
        border: '2px solid black',
    }
    return(
        <div style={style}>
            <h1>{bgColor}</h1>
        </div>
    )
}







