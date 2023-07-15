import { useEffect, useState } from "react"
import { getAllPost } from "../services/productService"
import Datatable from "./Datatable"

const MainContent = () => {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await getAllPost()
            setPosts(response)
        }

        fetchData()
    }, [])
    
    //console.log(posts)

  return (
    <div className="mt-5 p-3">
        <Datatable posts={posts} />
    </div>
  )
}

export default MainContent