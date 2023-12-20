"use client"
import useCart from "@/stores/useCart";
import usePost from "@/stores/usePost";


function PostDetail ({ params, searchParams }){

    const { postId } = params;
    const { posts, setPost } = usePost();
    const { postsedit, editPost } = usePost();

    const post = posts[posts.findIndex((item) => {
        return item.id === Number(postId);
    })];

    // setEdit([...posts, {
    //     postId: postId,
    //     title: content,
    //     content: Calendarinstance
    // }]);

    
    const onEdit = (index) => {
        let temptList = [...postsedit];
        const deletedArray = temptList.splice(index,1);
        console.log(temptList);
        console.log(deletedArray);
        editPost(temptList)
    }
    
    const onDelete = (index) => {
        let temptList = [...posts];
        const deletedArray = temptList.splice(index,1);
        console.log(temptList)
        console.log(deletedArray)
        setPost(temptList)
    }

    return (
        <div>
            <div>
                글 번호 : {postId}
            </div>
            {/* <div>
                {(JSON.stringify(post))}
            </div> */}
            <div>
                글 제목 : {post.title}
            </div>
            <div>
                글 내목 : {post.content}
            </div>
            <div>
                <button onClick={() => onEdit(postId)}>수정</button>
                <button onClick={() => onDelete(postId)}>삭제</button>
            </div>
        </div>
    )
}

export default PostDetail;
