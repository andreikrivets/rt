const getUsersData = async () => {
    const url = 'https://reqres.in/api/users?per_page=12';
    const res = await fetch(url);
    const json = await res.json();
    return json.data
}

export default getUsersData;