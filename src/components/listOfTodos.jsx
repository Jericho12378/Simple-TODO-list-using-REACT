
function lists({lists}) {
 
  return (
    <div className="lists">
      
      {lists == 0 ? 
        <div className="list">
        <h4 className="todo"></h4>
      </div> :
      <div className="list">
      <input type="checkbox" name="" id="checkbox" />
      <h4 className="todo">{lists}</h4>
      </div>}
      
    </div>
  );

}


export default lists;
