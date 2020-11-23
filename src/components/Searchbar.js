import React, { useState } from 'react';
import axios from 'axios';
import Result from './result'



const Searchbar = () => {

    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleClick = async () => {
        console.log(searchInput);

        try {
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
            console.log(result);
            setRepos(result);
        } catch (err) {
            console.log(err);
            alert("invalid username");
            setSearchInput(" ");
        }

    };

    return (
        <>
            <div className="search" >
                <input type="text" placeholder="Github Username" value={searchInput} onChange={handleChange} />
                <button onClick={handleClick}>search</button>
            </div>

            <Result repos={repos} />
        </>
    );
}

export default Searchbar;