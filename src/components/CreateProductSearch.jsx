import { useState } from 'react'

const SearchProductForm = ({onSearch}) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const searchCriteria = {title, price, category}
        console.log(searchCriteria)

        onSearch(searchCriteria)

        setTitle('')
        setPrice('')
        setCategory('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value) } required/>
                </div>

                <br />

                <div>
                    <label>Price:</label>
                    <input type='number' value={price} onChange={(e) => setPrice(e.target.value) }/>
                </div>

                <br />

                <div>
                    <label>Category:</label>
                    <input type='text' value={category} onChange={(e) => setCategory(e.target.value) }/>
                </div>

                <br />

                <button type='submit'>Search Product</button>
            </form>
        </div>
    )
}

export default SearchProductForm
