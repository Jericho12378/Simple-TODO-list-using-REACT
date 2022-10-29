function lists({ lists }) {
  return (
    <div className="lists">
        <div className="list">
          <input type="checkbox" name="" id="checkbox" />
          <h4 className="todo">{lists}</h4>
        </div>
    </div>
  );
}

export default lists;
