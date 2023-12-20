import {create} from "zustand";

const usePost = create((set, get) => ({
    posts: [],
    currentPost: 0,
    addPost: (post /* 사용할때 받아오는 매개변수 */) => set((state /* 만약 콜백함수 내부에서 usePost 내의 다른 필드 값을 사용할때 사용*/) => (
        {
            posts: [
                ...state.posts,
                {
                    id: state.currentPost,
                    ...post
                }
            ],
            currentPost: state.currentPost + 1
        }
    )),
    setPost: (post /* 사용할때 받아오는 매개변수 */) => set((state /* 만약 콜백함수 내부에서 usePost 내의 다른 필드 값을 사용할때 사용*/) => (
        {
            
            //state.deletedArray();
        }
    )),
    editPost: (post /* 사용할때 받아오는 매개변수 */) => set((state /* 만약 콜백함수 내부에서 usePost 내의 다른 필드 값을 사용할때 사용*/) => (
        {
            
            //state.deletedArray();
        }
    ))
}));

export default usePost;
