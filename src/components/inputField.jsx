
function inputField({ButtonClicked}){
   
    return(
        <div>
            <input onKeyPress={(e) => {
                if(e.key === "Enter"){
                    document.getElementById("enterButt").click()
                }
            }}
            type="text" name="" id="input" />
            <button id="enterButt" className="enterButton" onClick={ButtonClicked}>Enter</button>
        </div>
    )
}
export default inputField