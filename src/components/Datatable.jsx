import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { apiContext } from '../context/apiContext';
import { deletePost } from "../services/productService"
import { useSwal } from '../hooks/useSwal';

const Datatable = ({ posts, setType }) => {

    const swal = useSwal();

    const { setPostID, setUserID, setTitle, setBody, resetForm, setPosts } = useContext(apiContext);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const displayedPosts = posts.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDelete = (id) => {
        deletePost(id).then(() => {
            const newPosts = posts.filter((post) => post.id !== id);
            setPosts(newPosts);
            swal.success('Post deleted successfully' , 1000);
        })
    }


    return (
        <div>
            {/* BOTON AGREGAR */}
            <div className="d-flex justify-content-end">
                <button
                    className="btn btn-success btn-add mt-2 mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                        setPostID('');
                        setType('add');
                        resetForm();
                    }}
                >
                    Add Post
                </button>
            </div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">UserID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedPosts.map((post) => (
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td className="">
                                <button
                                    className="btn btn-primary btn-edit mt-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => {
                                        setType('edit');
                                        setPostID(post.id);
                                        setUserID(post.userId);
                                        setTitle(post.title);
                                        setBody(post.body);
                                    }}
                                >
                                    Edit
                                </button>
                                <button className="btn btn-danger btn-delete  mt-2" onClick={() => handleDelete(post.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {pageNumbers.map((number) => (
                        <li
                            className={`page-item ${
                                currentPage === number ? 'active' : ''
                            }`}
                            key={number}
                        >
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Datatable;

Datatable.propTypes = {
    posts: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    setType: PropTypes.func.isRequired,
};
