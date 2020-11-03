import React from 'react';
import uniqid from 'uniqid';

import CreateEntry from './components/CreateEntry';
import Entry from './components/Entry';

const PageEmployers = ({ data, deleteEntry, createEntry }) => (
        <>
            <CreateEntry createEntry={createEntry} />
            {data.map(el => <Entry data={el} key={uniqid()} deleteEntry={deleteEntry}/>)}
        </>
)

export default PageEmployers 