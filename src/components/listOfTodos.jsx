import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function lists({ lists, deleteButton }) {
  return (
    <div className="lists">
        <div className="list">
          <input type="checkbox" name="" id="checkbox" />
          <h4 className="todo">{lists}</h4>
          <FontAwesomeIcon onClick={deleteButton} className="trashCan" icon={ faTrash }/>
        </div>
    </div>
  );
}

export default lists;
