import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/features/test_store/testSlice';

export default function Info() {
    let mySid = "6410742313";
    let myFirstname = "Kanpitcha";
    let myLastname = "Hong-ek";
    let id_from_variable = 334;

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <main
            className='flex min-h-screen flex-col items-center justify-between'
        >
            <div style={{ fontSize: "64px" }}
                className="w-full h-screen flex flex-col justify-center items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
                <div>CN334 Frontend By {mySid} {myFirstname} {myLastname} </div>
                <Link href="/product/123">
                    <button className='m-1 p-4 bg-blue-400 rounded-3xl'>Product 123</button>
                </Link>
                <Link href={`/product/${id_from_variable}`}>
                    <button className='m-1 p-4 bg-blue-400 rounded-3xl'>Product {id_from_variable}</button>
                </Link>
                <div className='mt-5'>
                    <div>Count : {count}</div>
                    <button style={{ fontSize: "24px" }} className='m-1 p-4 bg-blue-400 rounded-lg' onClick={() => dispatch(increment())}>
                        Increment value
                    </button>
                    <button style={{ fontSize: "24px" }} className='m-1 p-4 bg-blue-400 rounded-lg' onClick={() => dispatch(decrement())}>
                        Decrement value
                    </button>
                </div>
            </div>
        </main>);
}