//otrzymalismy serwer component który włączy client components
import Posts from "@/components/Posts"
import PostSearch from "@/components/PostSearch"

// export const metadata: Metadata = {
//     title: "Blog | Next App"
// };

export default function Blog(){
    // dla zustand przenosimy do Posts

    // const [posts, setPosts] = useState<any[]>([]);
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    // getAllPosts().then(setPosts).finally(() => {setLoading(false)})
    // }, []);


    return (
        <>
            <h1 className="container">Page Blog</h1>
            <PostSearch />
            <Posts />
        </>
    )
}