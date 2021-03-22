import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    // if(res.ok){}
                    console.log(res);
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }, 1000);
    }, []); 
    //dependency arrays allow us to run useEffect for certain kinds of renders only.
    //an empty dependency array will cause useEffect to run only once(i.e. the component's initial render only)

    return ( 
        <div className="Home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
     );
}

export default Home;