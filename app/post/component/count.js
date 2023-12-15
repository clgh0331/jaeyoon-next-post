import useCart from "@/stores/useCart";

const Count = () => {

    const {count} = useCart();

    return (<div>COUNT : {count}</div>)
}

export default Count;
