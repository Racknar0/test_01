import { useEffect, useContext } from "react"
import { getAllPost } from "../services/productService"
import { apiContext } from "../context/apiContext"

import Datatable from "./Datatable"
import Modal from "./Modal"
import Form from "./Form"

const MainContent = () => {

    const { posts, setPosts, type, setType } = useContext(apiContext)

    useEffect(() => {
        const fetchData = async () => {
          const response = await getAllPost();
          setPosts(response);
        };
      
        fetchData();
      }, [setPosts]);
    
  return (
    <div className="mt-5 p-3">
        
        <Modal>
            {
                type === 'add' ? <Form type={type} /> : <Form type={type} />
            }
        </Modal>
        <Datatable posts={posts} type={type} setType={setType} />
    </div>
  )
}

export default MainContent