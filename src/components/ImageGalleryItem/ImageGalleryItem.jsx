import { Li, Img } from "./ImageGalleryItem.styled"
import PropTypes  from "prop-types"

export const ImageGalleryItem = ({images, getLargeImage}) => {
    return (
    <>
        {images.map(img =>
            <Li key={img.id} onClick={() => { getLargeImage(img.largeImageURL) }}>
                <Img src={img.webformatURL} alt={img.tags} />
            </Li>
        )}
    </>
    )
}
ImageGalleryItem.propTypes = {
    images:PropTypes.array,
    getLargeImage: PropTypes.func.isRequired,
    
}