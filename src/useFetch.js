import { useState, useEffect } from 'react';

const useFetch = (url) => { //custom hooks must begin with 'use'
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource.');
                    }
                    return res.json();
                })
                .then((data) => {
                    setError(null);
                    setData(data);
                    setIsPending(false);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url]);
    //dependency arrays allow us to run useEffect for certain kinds of renders only.
    //an empty dependency array will cause useEffect to run only once(i.e. the component's initial render only)


    return { data, isPending, error }
}

export default useFetch;