/*
import React, { useEffect, useMemo, useState } from 'react'

const useJazzNews = () => {

    const allPosts = ["aaa", "bbb", "ccc", "ddd"]

    const newPostChime = () => console.log("alert chime")

    const [_posts, setPosts] = useState([]);
    const addPost = post => setPosts(allPosts => [post, ...allPosts])

    const posts = useMemo(() => _posts,[_posts])

    useEffect(() => {
        newPostChime.play();
    },[posts])

    return (
        <div>useJazzNews</div>
    )
}

export default useJazzNews

*/
