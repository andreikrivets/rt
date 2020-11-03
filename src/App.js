import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import PageMain from './components/pages/PageMain/PageMain';
import PageEmployers from './components/pages/PageEmployers/PageEmployers';
import getUserData from './data/getUsersData';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const req = await getUserData();
      setData(req);
    }
    fetchData()
  }, [])
  const handleDelete = id => setData((prev) => prev.filter(el => el.id !== id));
  const handleCreate = info => setData((prev) => [...prev, info]);
  console.log(data);
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/employers">Сотрудники</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/employers">
            {data.length ? <PageEmployers data={data} deleteEntry={handleDelete} createEntry={handleCreate}/> : null}
          </Route>
          <Route path="/">
            <PageMain />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App