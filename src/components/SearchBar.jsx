import { useState } from "react"


const Searchbar = ({onSubmit}) => {
    const[query, setQuery] = useState('')

    const onInputChange = (e) => {
        const{value} = e.currentTarget
        setQuery(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (query.trim() === '') {
            alert('Введите поисковый запрос')
            return
        }
        onSubmit(query)
        setQuery('')

    }
    
        return (
            <div>
                {/* <SearchbarHeader> */}
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                            placeholder="Search movie"
                            value={query}
                            onChange={onInputChange}
                        
                    />
                    <button type="submit">Search</button>
                    </form>
                {/* </SearchbarHeader> */}
            </div>
        )
    
}

export default Searchbar