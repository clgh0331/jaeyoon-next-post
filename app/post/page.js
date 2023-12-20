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
    const [content, setcontect] = useState("");

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', border: "1px solid", padding: 12, flexDirection: 'row'}}>
                제목 <input value={title} onChange={(e) =>  setTitle(e.target.value)}/>
                내용 <input value={content} onChange={(e) =>  setcontect(e.target.value)}/>
                <button
                    onClick={() => {
                        addPost({
                            title: title,
                            content: content
                        })
                        setTitle("");
                        setcontect("");
                    }}
                >
                    글쓰기
                </button>
            </div>

            {
                posts.map((item, index) => {
                    return (
                        <Link href={`/post/${item.id}`}>
                            게시글번호 : [{item.id}] / 제목 : {item.title} / 내용 : {item.content}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Post;
