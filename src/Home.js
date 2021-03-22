import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'How to learn React', body: 'lorem....ipsum', author: 'James', id: 1},
        {title: 'God loves you', body: 'lorem....ipsum', author: 'Terrence', id: 2},
        {title: 'How to cook pancakes', body: 'lorem....ipsum', author: 'James', id: 3}
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log('Use effect run');
        console.log(blogs);
    }, []); //dependency arrays to run useEffect for certain kinds on renders only.

    return ( 
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />

        </div>
     );
}

export default Home;