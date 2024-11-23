import { useRouter } from "next/router"

function Posts(){
    const router = useRouter();
    const {id} = router.query;

    return <h1>Post ID: {id}</h1>
}

export default Posts