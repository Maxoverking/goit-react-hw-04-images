import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [pageNumber, setPageNumber] = useState(false);
  const [imageName, setImageName] = useState('');
  const [imageArray, setImageArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState(false);
   
  const handleForm = (getImageName) => {
    setImageName(getImageName);
    setImageArray([]);
    setPage(1)
  }
 
  useEffect(() => {
    if (!imageName) {
      return;
    }
    loadDataImage(imageName,page);
  },[imageName, page])

  const loadDataImage = async (imageName, page) => {
    setIsLoading(true);

      try {
      const data = await requestHTTP(imageName, page);
      data.hits.map(objects => {
        return setImageArray(prevState => [...prevState, objects]);
      }) 
      
      if (page === Math.ceil(data.totalHits / 12)) {
        toast.info('You have seen all photos ');
        return setPageNumber(false);
      }
        setPageNumber(true);
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
          {pageNumber && <Button loadMoreImg={loadMore} />}

          {largeImageURL &&
            <Modal
            addImg={largeImageURL}
            toggleModal={toggleModal} />}
    </div>
  );
};
