import React, { useState } from 'react';
import axios from 'axios';
import Result from './result'



const Searchbar = () => {

    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);
    const [img, setImg] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleClick = async () => {

        try {
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
            setRepos(result);
            setImg(result.data[0].owner.avatar_url);
        } catch (err) {
            alert("invalid username");
            setSearchInput(" ");
        }

    };

    return (
        <>
            <div className="search" >
                <input type="text" placeholder="Enter Github Username" value={searchInput} onChange={handleChange} />
                <button onClick={handleClick}>search</button>
            </div>

            <Result repos={repos} image={img} />
        </>
    );
}

export default Searchbar;