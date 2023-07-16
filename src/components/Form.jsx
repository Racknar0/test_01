import PropTypes from 'prop-types';
import { useContext } from 'react';
import { apiContext } from '../context/apiContext';
import { addPost, updatePost } from "../services/productService"
import { useSwal } from '../hooks/useSwal';

const Form = ({ type }) => {
    const { postID, userID, setUserID, title, setTitle, body, setBody, resetForm,posts, setPosts, closeModal } = useContext(apiContext)
    const swal = useSwal();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userID || !title || !body) {
            swal.error('error', 'All fields are required', "error" , 500);
            return;
        }

        const data = { userID, title, body }

        if (type === 'add') {
            addPost(data).then((response) => {
                console.log("***", response);
                
                const {body, title, userID} = response;

                resetForm();

                // Add new id to array because jsonplaceholder doesn't return new id
                const key = posts.length + 1;

                //push new data to posts 
                setPosts([...posts, {
                    id: key,
                    userId: userID,
                    title: title,
                    body: body
                }])
            })
        } else {
            data.id = postID;
            //edit
            updatePost(data).then((response) => {
                
                const {body, title, userID} = response;

                //update posts
                const newPosts = posts.map((post) => {
                    if (post.id === postID) {
                        post.userId = userID;
                        post.title = title;
                        post.body = body;
                    }
                    return post;
                });
                setPosts(newPosts);
            } )
        }

        resetForm();
        closeModal();
    };

    return (
        <div>
            <form>
                <h4 className="text-center">
                    {type === 'add' ? 'Add' : 'Edit'} Post
                </h4>

                <label htmlFor="userID" className="form-label">
                    User ID
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="userID"
                    placeholder="User ID"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                    min="1"
                    required
                />

                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="body" className="form-label">
                    Body
                </label>
                <textarea
                    className="form-control"
                    id="body"
                    rows="3"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                
                {
                    type === 'add' ? <button type="button" className="btn btn-danger mt-3" onClick={resetForm}> Reset </button> : null
                }

                <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>
                    {type === 'add' ? 'Add' : 'Edit'}
                </button>
            </form>
        </div>
    );
};

export default Form;

Form.propTypes = {
    type: PropTypes.string.isRequired,
};
