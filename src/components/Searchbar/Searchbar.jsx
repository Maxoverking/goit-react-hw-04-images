import { Component } from 'react'
import { FaSistrix } from 'react-icons/fa'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Header, Input, Button, SearchForm } from './Searchbar.styled'


export class Searchbar extends Component {
    state={
    imageName:'',
    }
    
    handleChange = evt => {
        const value = evt.currentTarget.value;
        this.setState({ imageName: value.toLowerCase()});
    }

    transferImageNameToApp = evt => {
        evt.preventDefault();
        const { imageName } = this.state
        if (imageName.trim() === '') {
            // console.log('object');
            toast.error(' Entry image name!');
            // alert(' Entry image name!')
            return;
        }
        this.props.getImageName(imageName);
        this.resetForm()
        
    }
    resetForm = () => {
        this.setState({imageName:''})
    }

    render() {
        return (   
<Header >
    <SearchForm onSubmit={this.transferImageNameToApp} >
    <Button type="submit" >
        <FaSistrix style={{width: "20px",height: "22px"}} />
    </Button>

    <Input
    onChange={this.handleChange}
    type="text"
    name='name'
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    />
    </SearchForm>
</Header>
    )
}}