import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setSort, loadQuestions } from './stackoverflow.actions';
const Stackoverflow = () => {
    const dispatch = useDispatch();
    const { query, questions, sort } = useSelector(
      (state) => state.stackoverflow,
    );

    const handleSearch = () => {
        dispatch(loadQuestions(query));
    };

    const sortedQuestions = [...questions].sort((a, b) => {
        if (sort === 'date') {
            return b.creation_date - a.creation_date;
        }

        if (sort === 'reputation') {
            return b.owner.reputation - a.owner.reputation;
        }

        return 0;
    });

    return (
        <div>
            <input
                placeholder="Szukaj..."
                value={query}
                onChange={(e) => dispatch(setQuery(e.target.value))}
            />

            <button onClick={handleSearch}>
                Szukaj
            </button>

            <br /><br />

            <select
                value={sort}
                onChange={(e) => dispatch(setSort(e.target.value))}
            >
                <option value="date">Sortuj po dacie</option>
                <option value="reputation">Sortuj po reputacji</option>
            </select>

            <ul>
                {sortedQuestions.map(q => (
                    <li key={q.question_id}>
                        {q.title} (rep: {q.owner.reputation})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stackoverflow;