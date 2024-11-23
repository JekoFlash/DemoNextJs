import { useRouter } from "next/router"
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";

const MyComponent = dynamic(() => import('../../../components/MyComponent'));

function Users(){
    const router = useRouter();
    const [count, setCount] = useState(0)
    const {username} = router.query; 

    useEffect(() => {
        setCount(count+1);
    },[]);

    return (
        <div>
            <div>
                <Head>
                    <title>
                        Jedai Web User Page
                    </title>
                </Head>
            </div>
            <h1>Username : {username}</h1>
            <MyComponent title="Hello,Next.js!" />
            <Link href="/post/47/comments/15">
                go to Comment Page
            </Link>
            <h1> Count : {count} </h1>
            <br></br>
            <button style={{ marginRight:'10px' }} onClick={() => setCount(count + 1) } >Increment</button>
            <button style={{ marginRight:'10px' }} onClick={() => setCount(count - 1) } >Decrement</button>
            <button class="bg-blue-500 hover:bg-blue-700 Text-white font-bold py-2 px-[4px] rounded w-24">Click me</button>
        </div>
    );
}

export default Users