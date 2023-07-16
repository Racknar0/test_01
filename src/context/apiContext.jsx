import {createContext, useRef, useState} from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react-refresh/only-export-components */
export const apiContext = createContext();

export const ApiProvider = ({children}) => {
    
    const closeButtonRef = useRef(null);

    const [posts, setPosts] = useState([])
    const [type, setType] = useState('add')
    
    const [postID, setPostID] = useState('');
    const [userID, setUserID] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const resetForm = () => {
        setUserID('');
        setTitle('');
        setBody('');
    };

    const closeModal = () => {
        closeButtonRef.current.click();
      };


    const data = {
        postID,
        setPostID,
        posts,
        setPosts,
        type,
        setType,
        userID,
        setUserID,
        title,
        setTitle,
        body,
        setBody,
        resetForm,
        closeButtonRef,
        closeModal
    }

    //console.log(posts);

    return (
        <apiContext.Provider value={data}>
            {children}
        </apiContext.Provider>
    )
}


ApiProvider.propTypes = {
    children: PropTypes.node.isRequired,
}