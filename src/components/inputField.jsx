function inputField({buttonClicked}){
    return(
        <div>
            <input type="text" name="" id="input" />
            <button className="enterButton" onClick={buttonClicked}>Enter</button>
        </div>
    )
}
export default inputField