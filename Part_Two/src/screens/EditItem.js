import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import '../assets/styles/NewItem.css'
import { editDish } from '../redux/features/menuSlice'

const EditItem = () => {

    const location = useLocation()
    const cuisines = useSelector(state => state.menu)
    const [selectedItem] = cuisines.filter((val) => val.id === location.state.itemId)
    console.log(selectedItem)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: selectedItem.title,
        price: parseInt(selectedItem.price),
        description: selectedItem.description,
        index: location.state.itemId
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
        }, 2000);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {title, price, description} = form

        if (!title || !price || !description) {
            handleErr('All fields are required!')
        } else {
            dispatch(editDish(form))
            handleSuccess("Dish updated successfully!")
        }
    }

    return (
        <div className="new-cuisine" id='menu'>
            <form onSubmit={handleSubmit}>
                <div className="fg">
                    <label htmlFor="title">Name</label><br />
                    <input type="text" id='title' value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>
                <div className="fg">
                    <label htmlFor="price">Price</label><br />
                    <input type="number" id='price' value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                </div>
                <div className="fg">
                    <label htmlFor="desc">Description</label><br />
                    <textarea id="desc" cols="30" rows="2" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
                </div>
                { errMsg && <p className='err'>{errMsg}</p>}
                { successMsg && <p className='success'>{successMsg}</p>}

                <button className='save-btn' style={{ backgroundColor: '#26C58' }}>Save</button>
                <button className='cancel-btn' onClick={() => {navigate(-1)}}>Cancel</button>
            </form>
        </div>
    )
}

export default EditItem