import { useState } from "react"
import { Input, Button, Form, SearchBarContainer} from "./SearchBar.styled"


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
            <SearchBarContainer>
                {/* <SearchbarHeader> */}
                    <Form onSubmit={handleSubmit}>
                        <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                            placeholder="Search movie"
                            value={query}
                            onChange={onInputChange}
                        
                    />
                    <Button type="submit">Search</Button>
                    </Form>
                {/* </SearchbarHeader> */}
            </SearchBarContainer>
        )
    
}

export default Searchbar