import "./App.css"
import contactsList from "./contacts.json"
import React, { useState } from "react"
import Button from "./assets/components/Button"

const contactsFive = contactsList.slice(0, 5)

function App() {
  const [contacts, setContacts] = useState(contactsFive)
  const handleAddRandomContact = () => {
    const randomContact =
      contactsList[Math.floor(Math.random() * contactsList.length)]
    setContacts([...contacts, randomContact])
  }
  const handleSortByName = () => {
    const copyContacts = [...contacts]
    copyContacts.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(copyContacts)
  }

  const handleSortByRating = () => {
    const copyContacts = [...contacts]

    copyContacts.sort((a, b) => b.popularity - a.popularity)
    setContacts(copyContacts)
  }
  const handleDeleteContact = (contactID) => {
    const newListContacts = contacts.filter(
      (contact) => contact.id !== contactID
    )
    setContacts(newListContacts)
  }

  const styleDiv = {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "20px",
    padding: "20px",
  }
  const h1 = {
    margin: "20px",
    padding: "20px",
  }

  return (
    <div className="App">
      <table>
        <thead>
          <th colSpan="6" style={h1}>
            IronContacts
          </th>
        </thead>

        <tbody>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
            <td>Actions</td>
          </tr>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td width="80px">
                <img src={contact.pictureUrl} alt="Contact" width="80px" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🌟</p>}</td>
              <td>
                <div>
                  <Button
                    btnColor={"violet"}
                    onHandle={() => handleDeleteContact(contact.id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styleDiv}>
        <Button btnColor={"gray"} onHandle={() => handleAddRandomContact()}>
          Add random contact
        </Button>
        <Button btnColor={"blue"} onHandle={() => handleSortByName()}>
          Sort by Name
        </Button>
        <Button btnColor={"green"} onHandle={() => handleSortByRating()}>
          Sort by Popularity
        </Button>{" "}
      </div>
    </div>
  )
}

export default App
