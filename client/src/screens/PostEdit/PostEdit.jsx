import React, { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { updatePost, getPost } from '../../services/posts'


const PostEdit = (props) => {

    const [post, setPost] = useState({
            subject: '',
            content: '',
            
    })

    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const post = await getPost(id)
            setPost(post)
        }
        fetchPost()
    }, [id])


    const handleChange = (event) => {
        const { subject, value } = event.target
        setPost({
                ...post,
                [subject]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let { id } = props.match.params
        const updated = await updatePost(id, post)
        setUpdated(updated)
    }

    if (isUpdated) {
        return <Redirect to={`/posts/${props.match.params.id}`} />
    }

  return (
        <Layout user={props.user}>
            <div className="post-edit">
          <div className="subject-container">{post.subject}
            </div>
          <div className="content-container">{post.content}
            </div>
            <div className="dare-container">{post.createdAt}
            </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="edit-input-subject"
                            placeholder='Subject'
                            value={post.subject}
                            name='subject'
                            required
                            onChange={handleChange}
                        />
                    </form>
              
                <form className="edit-form" onSubmit={handleSubmit}>
                    <textarea
                        className="textarea-content"
                        rows={10}
                        cols={78}
                        placeholder='Content'
                        value={post.content}
                        name='content'
                        required
                        onChange={handleChange}
                    />
                    <button type='submit' className="save-button">Save</button>
                </form>
            </div>
        </Layout>
    )
}

export default PostEdit