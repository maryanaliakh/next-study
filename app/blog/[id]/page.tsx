import {Metadata} from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60, //кожних 60 сек перевіряє чи нема нових постів
        }
    })
    return response.json()
}

type Props = {
    params: {
        id: string;
    }
}


export async function generateMetadata({params}: Promise<Props["params"]>): Promise<Metadata> {
    const resolvedParams = await params;

    const {id} = resolvedParams;
    const post = await getData(id);

    return {
        title: post.title,
    }
}

export default async function Post({ params }: Promise<Props["params"]>) {
    const resolvedParams = await params;
    console.log("PARAMS:", resolvedParams);
    console.log("ID:", resolvedParams?.id);

    const { id } = resolvedParams;

    const post = await getData(id);

    if (!post) return <div>Post not found: {id}</div>;

    return (
        <>
            <h1 className="container">{post.title}</h1>
            <p>{post.body}</p>
        </>
        )
}
