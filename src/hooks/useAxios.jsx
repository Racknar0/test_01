import axios from 'axios';
import { useSwal } from './useSwal';
//import { useStorage } from './useStorage';

export const UseAxios = () => {
    //const { getSession, setSession } = useStorage();
    const swal = useSwal();

    const axiosClient = () => {
        const axiosInstance = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" });

        axiosInstance.interceptors.request.use(
            (req) => {
                //req.headers.common['Content-Type'] = 'application/json';
                // req.headers.common['Authorization'] = getSession('accessToken');
                return req;
            },
            (err) => {
                return Promise.reject(err);
            }
        );
        axiosInstance.interceptors.response.use(
            (res) => {
                // console.log('01 - res', res);
                return res;
            },
            (err) => {
                const dataError = err.response;
                switch (err.response.status) {

                    case 400:
                        swal.error('error', 'Bad Request', '¡something goes wrong!', 3000);
                        break;

                    case 401:
                        swal.error('error', 'Unauthorized', dataError.error, 1000);
                        sessionStorage.clear();
                        window.location.href = '/';
                        break;

                    case 403:
                        swal.error('warning', 'Superior Privileges are needed', dataError.error, 3000);
                        break;

                    case 404:
                        swal.error('warning', 'Not Found', dataError.error, 3000);
                        break;

                    case 415:
                        swal.error('warning', 'Unsuported Mediax', dataError.error, 3000);
                        break;

                    case 500:
                        swal.error('error', 'Server Error', 'contact your administrator', 3000);
                        break;
                    default:
                        swal.error('error', "It's not you, it's me", '¡something goes wrong!', 3000);
                        break;
                }
            }
        );
        return axiosInstance;
    };

    const get = async (url) => {
        try {
            const response = await axiosClient().get(url);
            // console.log('02 - response', response);
            return response;
        } catch (err) {
            return err;
        }
    };

    const post = async (url, data) => {
        try {
            const response = await axiosClient().post(url, data);
            return response;
        } catch (err) {
            return err;
        }
    };

    const put = async (url, data) => {
        try {
          const response = await axiosClient().put(url, data);
          return response;
        } catch (err) {
          return err;
        }
    };

    const del = async (url, data) => {
        try {
          const response = await axiosClient().delete(url, { data });
          return response;
        } catch (error) {
            return error;
        }
      };

    return {
        axiosClient,
        get,
        post,
        put,
        del,
    };
};
