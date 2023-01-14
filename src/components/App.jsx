import { useState,useEffect } from 'react';
 import { ToastContainer } from 'react-toastify';
import { requestHTTP } from './Servises/Servises';

import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
export const App = () => {
  const [page, setPage] = useState(0);
  const [imageName, setImageName] = useState('');
  const [imageArray, setImageArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState(false);
   
  const handleForm = async (getImageName) => {
    if (getImageName === imageName ) {
      return;
    }
    setIsLoading(true);
    setImageName(getImageName);
    setPage(1);
    setImageArray([]);
    setLargeImageURL(false);

  }
 
  useEffect(() => {
    if (!imageName) {
      return;
    }
    loadDataImage(imageName,page);
  },[imageName, page])

    const loadDataImage = async (imageName, page) => {
    try {
      const data = await requestHTTP(imageName, page);
      // console.log("🚀  data", data);
    if (data.hits.length <= 11) {
      setPage(0);
      return;
    }
    data.hits.map(objects => {
      return setImageArray(prevState => [...prevState,objects])
    }) 
    } catch (error) {
      console.log("🚀  error", error);
    } finally {
      setIsLoading(false);
    }
    }
  const getLargeImage = (getLargeImageURL) => {
    setLargeImageURL(getLargeImageURL);
  }
  const toggleModal = () => {
    setLargeImageURL(false);
  }
    const loadMore = () => {
    setPage(page + 1);
  }
return (
    <div>
          <Searchbar getImageName={handleForm} />
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
                getLargeImage={getLargeImage}/>
            }           
          </ImageGallery>
          {page < 1 ? '': <Button loadMoreImg={loadMore} />}

          {largeImageURL &&
            <Modal
            addImg={largeImageURL}
            toggleModal={toggleModal} />}
    </div>
  );
};
