'use client'
import Link from "next/link";
import useSWR from "swr";
import {getAllPosts} from "@/services/getPost";
// import {usePosts} from "@/store";
// import {shallow} from "zustand/vanilla/shallow";
//import {useEffect} from "react";


const Posts = () => {
    //inny wariant z swr query jak reactquery tylko w next
    const {data: posts, isLoading} = useSWR('posts', getAllPosts)

    //przez zustand wykorzystanie store/index
    // const [posts, loading, getAllPosts] = usePosts((state) => [
    //     state.posts, state.loading, state.getAllPosts
    // ], shallow);
    //
    // useEffect(() => {
    //     getAllPosts()
    // }, [getAllPosts]);

    //przez hooks w blog/page

    return isLoading?
    (<h3> "Loading..." </h3>
    ) : (
        <ul>
        {posts.map((post: any) => (
            <li key={post.id}>
                <h1>{post.id}</h1>
                <Link href={`blog/${post.id}`}>{post.title}</Link>
            </li>
        ))}
    </ul>)
}

export default Posts;