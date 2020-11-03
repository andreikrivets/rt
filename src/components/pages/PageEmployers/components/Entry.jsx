import React from 'react';

import './Entry.css'

const Entry = ({ data, deleteEntry }) => {
    const noImage = 'https://www.acsqatar.com/wp-content/uploads/2018/08/avatar.png';
    return (
        <>
        <section className="entry">
            <img src={data.avatar || noImage} alt="avatar"/>
            <div className="entry-wrapper"> 
                <h3>{`${data.first_name} ${data.last_name}`}</h3>
                <p>{data.email}</p>
            </div>
            <p className="close-button" onClick={() => deleteEntry(data.id)}>x</p>
        </section>
        </>
    )
}

export default Entry

