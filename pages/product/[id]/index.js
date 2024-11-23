import Head from "next/head";
import Image from "next/image";
function ProductDetail({product}){
    console.log('- product -', product)
    return (<>
        <Head>
            <title>Product Detail Page</title>
        </Head>
        <div style={{background: "linear-gradient(135deg, #FFC1CC, #FF9AA2, #FFDAC1, #B5EAD7, #C7CEEA)"}}
            className="min-h-screen justify-items-center"
            >
                <div className="w-full md:w-1/2" >
                    <p className="text-black text-5xl font-bold text-center p-10 ">Product Detail </p>
                </div>
                <Image
                    className="w-[180px] h-[220px] rounded-xl hover:scale-105"
                    src={product.image}
                    width={180}
                    height={220}
                    alt="Pen"
                />
                <p className="text-2xl text-black font-bold p-2">{product.title}</p>
                <p className="text-xl text-black font-bold p-2">Category {product.category}</p>
                <p className="text-l text-black font-bold p-5">Description</p>
                <p className="text-m text-black font-normal bg-white mr-10 ml-10 rounded-xl p-2 ">{product.description}</p>
                <p className="text-xl text-black font-bold mt-5 mb-5">Price</p>
                <p className="text-black font-regular bg-white p-2 rounded-xl">{product.price} Dollar</p>
                <p className="text-m text-black font-bold p-2 mt-5">Rating {product.rating.rate} / Count {product.rating.count}</p>
        </div>
    </>)
}

export default ProductDetail;

export async function getServerSideProps(context){
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const product = await resp.json();
    return {
        props : { product }
    }
}