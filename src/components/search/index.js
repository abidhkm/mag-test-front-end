import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Search = ({handleSearch,placeholder}) => {

    const [searchStr, setSearchStr] = useState('')


    return <Form inline>
        <FormControl type="text" placeholder={placeholder}
            className="mr-sm-2" onChange={(e) => { setSearchStr(e.target.value) }} />
        <Button variant="outline-success" onClick={() => handleSearch(searchStr)} >Search</Button>

    </Form>
}

export default Search;