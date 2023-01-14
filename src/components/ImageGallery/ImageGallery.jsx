import { Ul } from './ImageGallery.styled'
import PropTypes  from "prop-types"

export const ImageGallery = ({children}) => {
    return (
        <Ul>
            {children}
        </Ul>
    )
}
ImageGallery.propTypes = {
    children: PropTypes.node.isRequired,
}



