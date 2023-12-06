"use client"
import Link from "next/link";
import useCart from "@/stores/useCart";
import usePost from "@/stores/usePost";

const PostList = [
    {
        id: 1,
        title: "HELLO WORLD",
        content: "HELLO WORLD",
    },
    {
        id: 2,
        title: "WELCOME TO NEXTJS",
        content: "WELCOME TO NEXTJS",
    }
]

const Post = () => {

    const addToCart = useCart((state) => state.addToCart);
    const {count } = useCart();
    const { posts, addPost } = usePost();

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            POST
            <button
                onClick={() => {
                    // ADD HERE
                    // addToCart();
                    // form data를 생성해서 받아줘야합니다.
                    addPost({
                        id: 0,
                        title: "TEST"
                    })
                }}
            >
                Add to cart
            </button>

            {
                PostList.map((item, index) => {
                    return (
                        <Link href={`/post/${item.id}`}>
                            {item.title}
                        </Link>
                    )
                })
            }
            <div>{JSON.stringify(posts)}</div>
            <div>{count}</div>
        </div>
    )
}

export default Post;
