export const fetchQuestions = async (query) => {
    const res = await fetch(
        `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`
    );

    const data = await res.json();
    return data.items;
};