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

/* const getProduct = async (id) => {
    try {
        const response = await axiosClient.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};

const addProduct = async (product) => {
    try {
        const response = await axiosClient.post(url, product);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};

const updateProduct = async (product) => {
    try {
        const response = await axiosClient.put(`${url}/${product.id}`, product);
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

export { getAllPost/* , getProduct, addProduct, updateProduct, deleteProduct */ };
