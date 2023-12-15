"use client"
import Link from "next/link";
import useCart from "@/stores/useCart";
import usePost from "@/stores/usePost";
import Count from "@/app/post/component/count";
import {useState} from "react";

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

    const { posts, addPost } = usePost();
    const [title, setTitle] = useState("");

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', border: "1px solid", padding: 12, flexDirection: 'row'}}>
                <input value={title} onChange={(e) =>  setTitle(e.target.value)}/>
                <button
                    onClick={() => {
                        addPost({
                            title: title
                        })
                        setTitle("");
                    }}
                >
                    ADD POST
                </button>
            </div>

            {
                posts.map((item, index) => {
                    return (
                        <Link href={`/post/${item.id}`}>
                            [{item.id}] {item.title}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Post;
