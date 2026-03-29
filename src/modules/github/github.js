import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setFilter, loadRepos } from './github.actions';

const Github = () => {
    const dispatch = useDispatch();
    const { username, repos, filter } = useSelector(state => state.github);

    const handleSearch = () => {
        dispatch(loadRepos(username));
    };

    const filteredRepos = repos.filter(repo =>
        repo.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <input
                placeholder="GitHub username"
                value={username}
                onChange={(e) => dispatch(setUsername(e.target.value))}
            />

            <button onClick={handleSearch}>
                Pobierz repozytoria
            </button>

            <br /><br />

            <input
                placeholder="Filtr repozytoriów"
                value={filter}
                onChange={(e) => dispatch(setFilter(e.target.value))}
            />

            <ul>
                {filteredRepos.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Github;