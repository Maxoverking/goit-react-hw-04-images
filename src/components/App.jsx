import { Component } from 'react';
 import { ToastContainer } from 'react-toastify';
import { requestHTTP } from './Servises/Servises';

import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

// const Zoom = cssTransition({
//   enter: 'zoomIn',
//   exit: 'zoomOut',
//   appendPosition: false,
//   collapse: true,
//   collapseDuration: 300
// });

export class App extends Component {
  state = {
    page : 1,
    imageName:'',
    imageArray: [],
    isLoading: false,
    largeImageURL: false,
  }

  handleForm = async (imageName) => {
    this.setState({ isLoading: true });
    this.setState({
      imageName,
      page : 1,
      imageArray: [],
      largeImageURL: false});
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    if (prevName !== nextName) {
      // console.log('object');
      this.loadDataImage();
    }
  }
  
  loadDataImage = async () => {
    const {page,imageName} = this.state;
    try {
      const data = await requestHTTP(imageName, page);
    if (data.hits.length < 11) {
      this.setState({ page: false });
    }
    data.hits.map(objects => {
      return this.setState(({ imageArray }) => ({
        imageArray: [...imageArray, objects],
      }))
    }) 
    this.setState(({ page }) => ({
    page: page + 1,
    })) 
    } catch (error) {
      console.log("🚀  error", error);
    } finally {
          this.setState({ isLoading: false });
    }
  }
  getLargeImage = (largeImageURL) => {
    this.setState({largeImageURL})
  }
  toggleModal = (evt) => {
    this.setState({ largeImageURL: false})
  }

  render() {
    const { imageArray,page,isLoading,largeImageURL} = this.state;
      return (
    <div>
          <Searchbar getImageName={this.handleForm} />
          <ToastContainer
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
            theme="colored"
            
/>
          {isLoading && <Loader/>}
          <ImageGallery>
            {imageArray === [] ? '' :
              <ImageGalleryItem
                images={imageArray}
                getLargeImage={this.getLargeImage}/>
            }           
          </ImageGallery>
          {page < 2 ? '': <Button loadMoreImg={this.loadDataImage} />}

          {largeImageURL &&
            <Modal
            addImg={largeImageURL}
            toggleModal={this.toggleModal} />}
    </div>
  );
  }

};
