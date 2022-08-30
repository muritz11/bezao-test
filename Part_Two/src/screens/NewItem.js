import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/NewItem.css'
import { newItem } from '../redux/features/menuSlice'

const NewItem = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: '',
        price: '',
        description: '',
    })
    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    
    const handleErr = (err) => {
        setErrMsg(err)
        setTimeout(() => {
            setErrMsg('')
        }, 3000);
    }

    const handleSuccess = (msg) => {
        setSuccessMsg(msg)
        setTimeout(() => {
            setSuccessMsg('')
            navigate('/')
        }, 3000);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {title, price, description} = form

        if (!title || !price || !description) {
            handleErr('All fields are required!')
        } else {
            dispatch(newItem(form))
            handleSuccess("New item added successfully!")
        }
    }

    return (
        <div className="new-cuisine" id='menu'>
            <form onSubmit={handleSubmit}>
                <div className="fg">
                    <label htmlFor="title">Name</label><br />
                    <input type="text" id='title' onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>
                <div className="fg">
                    <label htmlFor="price">Price</label><br />
                    <input type="number" id='price' onChange={(e) => setForm({ ...form, price: e.target.value })} />
                </div>
                <div className="fg">
                    <label htmlFor="desc">Description</label><br />
                    <textarea id="desc" cols="30" rows="2" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
                </div>
                { errMsg && <p className='err'>{errMsg}</p>}
                { successMsg && <p className='success'>{successMsg}</p>}

                <button className='save-btn'>Save</button>
                <button className='cancel-btn' onClick={() => {navigate(-1)}}>Cancel</button>
            </form>
        </div>
    )
}

export default NewItem