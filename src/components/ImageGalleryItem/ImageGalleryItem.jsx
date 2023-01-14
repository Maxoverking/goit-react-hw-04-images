import { Li, Img } from "./ImageGalleryItem.styled"
import PropTypes  from "prop-types"

export const ImageGalleryItem = ({images, getLargeImage}) => {
    return (
    <>
        {images.map(({id,webformatURL,largeImageURL,tags }) =>
            <Li key={id} onClick={() => {getLargeImage(largeImageURL)}}>
                <Img src={webformatURL} alt={tags}/>
            </Li>
        )}
    </>
    )
}
ImageGalleryItem.propTypes = {
    images:PropTypes.array,
    getLargeImage: PropTypes.func.isRequired,
    
}