"use client"
import useCart from "@/stores/useCart";
import usePost from "@/stores/usePost";


function PostDetail ({ params, searchParams }){

    const { postId } = params;
    const { posts } = usePost();

    const post = posts[posts.findIndex((item) => {
        return item.id === Number(postId);
    })];

    return (

        <div>{postId}, {JSON.stringify(post)}</div>
    )
}

export default PostDetail;
