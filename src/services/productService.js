import { UseAxios } from '../hooks/useAxios.jsx';

const axiosClient = UseAxios();
const url = '/posts';

const getAllPost = async () => {
    try {
        const response = await axiosClient.get(url);
        //console.log('response----------', response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};

const addPost = async (post) => {
    try {
        const response = await axiosClient.post(url, post);
        console.log('response----------', response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};

const updatePost = async (post) => {
    try {
        const response = await axiosClient.put(`${url}/${post.id}`, post);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};


/* const getProduct = async (id) => {
    try {
        const response = await axiosClient.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};





const deleteProduct = async (id) => {
    try {
        const response = await axiosClient.del(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}; */

export { getAllPost, addPost , updatePost/* , getProduct, , updateProduct, deleteProduct */ };
