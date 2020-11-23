import React from 'react';


const Result = (props) => {
    const { repos } = props;
    


    const listRepos = repos.length !== 0 ? (
        repos.data.map((item) => <li key={item.id}><a target="blank" href={item.html_url}>{item.name}</a></li>)
    ) : (
            <li>List of repos will show here</li>
        );

    return (
        <ul>
            {listRepos}
        </ul>
        
    );
}

export default Result; 