import PropTypes from 'prop-types';


const Datatable = ({posts}) => {

    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">UserID</th>
                        <th scope="col">ID</th>
                        <th scope="col">Tittle</th>
                        <th scope="col">Body</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.map((post) => (
                        <tr key={post.id}>
                            <th scope="row">{post.userId}</th>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Datatable;


Datatable.propTypes = {
    posts: PropTypes.array.isRequired,
};