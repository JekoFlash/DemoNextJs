import { useRouter } from "next/router"

function posts(){
    const router = useRouter();
    const {id} = router.query;

    return <h1>Post ID: {id}</h1>
}

export default posts