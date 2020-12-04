import React from 'react';


const Result = (props) => {
    const { repos, image } = props;
    let avt = " ";

    if (repos.data) {
        avt = <img src={image} alt="avatar" />;
    }


    const listRepos = repos.length !== 0 ? (
        repos.data.map((item, k) => {
            return (
                <div key={k}>
                    <div className="repo-data">
                        <a target="blank" href={item.html_url} style={{ color: "blue" }}>Repos_name :-{item.name}</a>
                        <br /><p><span style={{ color: "red", fontWeight: "bold", display: "inline" }}>Branch_name-</span>{item.default_branch}</p>
                        <br />Language_used-{item.language} <br />

                    </div>
                </div>);
        }
        )
    ) : (
           " "
        );

    return (
        <>
            {avt}
            {listRepos}
        </>
    );
}

export default Result; 