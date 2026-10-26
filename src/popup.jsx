import "./popup.css";
function Popup() {
  return (
    <>
      <div className="POPUP">
        <h2>Contant Us</h2>
        <div className="POPUPBOX">
          <label className="lable">FULL NAME</label>
          <input className="GRID" type="text" />
        </div>
        <div className="GRID grid grid-cols-2">
          <div>
            <label> FULL NAME</label>
            <input className="GRID" type="name" />
          </div>
          <div>
            <label>EMAIL</label>
            <input className="GRID" type="email" />
          </div>
        </div>
        <div>
          <label>SUBJECT</label>
          <input className="GRID" type="text" />
        </div>
        <div>
          <label>DISCRIPITION</label>
          <input className="GRID" type="text" />
        </div>
        <div>
          <button className="POPUPBTN  btn-solid theme-inverse">Submit</button>
          <button className="POPUPBTN btn-solid theme-inverse">Cancel</button>
        </div>
      </div>
    </>
  );
}
export default Popup;
