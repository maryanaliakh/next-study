'use client'

import {FormEventHandler, useState} from "react";
import {usePosts} from "@/store";
import { getPostBySearch } from '@/services/getPost';
import useSWR from "swr";

//dla hooks
// type Props = {
//     onSearch: (value: any[]) => void
// }

const PostSearch = () => {
    //inny wariant z swr query jak reactQuery tylko w next
    const { mutate } = useSWR('posts')
    const [search, setSearch] = useState('');
    //lub przez hooks
    //const [search, setSearch] = use State('');
    //const handleSubmit... onSearch(posts)

    //przez zustand
    //const getPostsBySearch = usePosts(state => state.getPostsBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostBySearch(search);
        await mutate(posts);
    }

    return(
<form onSubmit={handleSubmit}>
    <input type="search" placeholder="search" value={search}
           onChange={(event) => {setSearch(event.target.value)}}/>
    <button type="submit">Search</button>
</form>
    )
}

export default PostSearch;