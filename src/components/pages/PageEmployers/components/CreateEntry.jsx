import React from 'react';
import uniqid from 'uniqid';

import './CreateEntry.css'

const CreateEntry = ({ createEntry }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        object = {
            ...object,
            id: uniqid(),
        }
        createEntry(object)
    }
    return (
        <>
            <section className="create-entry">
                <form onSubmit={handleSubmit}>
                    <div className="create-entry-wrapper">
                        <label><input type="text" name="first_name" required></input>first name</label>
                        <label><input type="text" name="last_name" required></input>last name</label>
                        <label><input type="email" name="email"></input>email</label>
                    </div>
                    <label><input type="submit" value="add"></input></label>
                </form>
            </section>
        </>
    )
}

export default CreateEntry;

// <h3>{`${data.first_name} ${data.last_name}`}</h3>
// <p>{data.email}</p>