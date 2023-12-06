"use client"
import useCart from "@/stores/useCart";


function PostDetail ({ params, searchParams }){
    // const router = useRouter();
    const { postId } = params;

    const {count } = useCart();


    return (
        <div>{postId}, {count}</div>
    )
}

export default PostDetail;
