import React from "react";
import Contactcard from "./Contactcard";
const ContactList = (props) =>{
    //console.log(props);

    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) =>{
        return <Contactcard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
 });
    return <div className="ui celled list">{renderContactList}</div>
};
export default ContactList;