import Head from "next/head";
import Pen from "../../public/asset/image/Pen.webp"
import Image from "next/image";
import Link from "next/link";

function Product({product}){
    console.log('- product -', product)
    return (<>
        <Head>
            <title>
                Product Page
            </title>
        </Head>
        <div
            style={{background: "linear-gradient(135deg, #FFC1CC, #FF9AA2, #FFDAC1, #B5EAD7, #C7CEEA)"}}
            className="min-h-screen justify-items-center"
        >
            <p className="text-black text-5xl font-bold text-center p-10 ">Welcome to the Stationery Shop! ✏️</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
                {product.map((item) => (
                    <Link
                        key={item.id}
                        href={`/product/${item.id}`}
                        // className="mix-blend-multiply"
                    >
                        <div className="justify-items-center bg-gray-700 p-5 rounded-xl">
                            <Image
                                className="w-[180px] h-[220px] rounded-xl hover:scale-105"
                                src={item.image}
                                width={180}
                                height={220}
                                alt="Pen"
                            />
                            <p className="text-white font-bold">{item.title}</p>
                            <p className="text-white font-bold">{item.price} Dollar</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>)
}

export default Product;

export async function getServerSideProps(context){
    const resp = await fetch("https://fakestoreapi.com/products");
    const product = await resp.json();
    return {
        props : { product }
    }
}