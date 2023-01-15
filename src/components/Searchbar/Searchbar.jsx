import { useState } from 'react'
import { FaSistrix } from 'react-icons/fa'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Input, Button, SearchForm } from './Searchbar.styled'


export const Searchbar = ({getImageName}) => {
    const [imageName, setImageName] = useState('')
    const handleChange = evt => {
        const value = evt.currentTarget.value;
        setImageName(value.toLowerCase());
    }

    const transferImageNameToApp = evt => {
        evt.preventDefault();
        if (imageName.trim() === '' ) {
            // console.log('object');
            toast.error(' Entry image name!');
            // alert(' Entry image name!')
            return;
        }
        getImageName(imageName);
        resetForm()
        
    }
    const resetForm = () => {
        setImageName('')
    }
return (   
<Header >
    <SearchForm onSubmit={transferImageNameToApp} >
    <Button type="submit" >
        <FaSistrix style={{width: "20px",height: "22px"}} />
    </Button>

    <Input
    onChange={handleChange}
    type="text"
    name='name'
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    />
    </SearchForm>
</Header>
    )
}