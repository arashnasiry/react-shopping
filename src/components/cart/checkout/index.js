import { React, useState } from 'react';

const Checkout = ({ hendleOrder, isOpen }) => {
    const [order, setOrder] = useState({ email: '', name: '', address: '' })
    const handleInput = (e) => {
        setOrder((p) => {
            return {
                ...p,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleForm = (e) => {
        e.preventDefault()
        hendleOrder(order)
    }
    if (!isOpen) {
        return null
    } else {
        return (
            <div className='cart'>
                <form onSubmit={handleForm}>
                    <ul className='form-container'>
                        {Object.keys(order).map((val, k) => {
                            return (
                                <li key={k}>
                                    <label>{val}</label>
                                    <input
                                        name={val}
                                        type={val}
                                        required
                                        onChange={handleInput}
                                    ></input>
                                </li>)
                        })}
                        <li>
                            <button type='submit' className='button primary'>
                                Checkout
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default Checkout;
