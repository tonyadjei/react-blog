import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'How to learn React', body: 'lorem....ipsum', author: 'James', id: 1},
        {title: 'God loves you', body: 'lorem....ipsum', author: 'Terrence', id: 2},
        {title: 'How to cook pancakes', body: 'lorem....ipsum', author: 'James', id: 3}
    ]);

    const [name, setName] = useState("tony");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log('Use effect run');
        console.log(name);
    }, [name]); //dependency arrays allow us to run useEffect for certain kinds on renders only.
    //an empty dependency array will cause useEffect to run only once(i.e. the component's initial render only)

    return ( 
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName("Elon Musk")}>change name</button>
            <p>{name}</p>

        </div>
     );
}

export default Home;