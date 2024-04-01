import { useRouter } from "next/router";

export async function getServerSideProps(context) {
    let product_id = context.query.product_id;
    const res = await fetch(`https://dog.ceo/api/breed/${product_id}/images/random`);
    const dog = await res.json();
    return { props: { dog } }
}

export default function Product({ dog }) {
    const router = useRouter();
    let product_id = router.query.product_id; return (
        <main
            className='flex min-h-screen flex-col items-center justify-between' >
            <div style={{ fontSize: "64px" }}
                className="w-full h-screen flex flex-col justify-center items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
                    <div>Welcome to Product {product_id} info. </div>
                    <div className="px-3">
                        <img className="rounded-2xl" src={dog.message} />
                    </div>
            </div> </main>);
}