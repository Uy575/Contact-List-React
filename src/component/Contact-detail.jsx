import Deletecontact from "./Delete-contact";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editable from "./Editable";
function Contactdetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const goingToContactList = () => {
    navigate("/");
  };

  const [edit, setEdit] = useState(false);
  const editingItem = () => {
    setEdit(true);
  };

  const deletingItem = () => {
    const filtering = gettingDataForDetail.filter((f) => {
      return f.email !== id;
    });

    localStorage.setItem("contactlist", JSON.stringify(filtering));
    navigate(-1);
    setTimeout(() => {
      alert("contact has been deleted");
    }, 100);
  };

  const [gettingDataForDetail, setgettingDataForDetsil] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("contactlist"))
      setgettingDataForDetsil(JSON.parse(localStorage.getItem("contactlist")));
  }, []);

  const goingBackToContacts = () => {
    goingToContactList();
  };

  return (
    <>
      {gettingDataForDetail.map((m) =>
        m.email === id ? (
          edit === true ? (
            <Editable data={m} />
          ) : (
            <>
              <h1 key={m.email}>Contact Detail</h1>
              <div className="detail">
                <div>
                  <h3>name: {m.fname + " " + m.lname}</h3>
                  <h3>number: {m.number}</h3>
                  <h3>email: {m.email}</h3>
                </div>
              </div>

              <button onClick={editingItem}>Edit me</button>
              {/* <Editcontact onClickHandler = {editingItem} /> */}

              <Deletecontact onClickHandler={deletingItem} />
              <button onClick={goingBackToContacts}>back to contacts</button>
            </>
          )
        ) : (
          ""
        )
      )}
    </>
  );
}

export default Contactdetail;
