import { Div, ButtonLoad } from "./Button.styled"
import PropTypes  from "prop-types"

export const Button = ({loadMoreImg}) => {
    return (
        <Div>
        <ButtonLoad type="button" onClick={loadMoreImg}>
            Load More
        </ButtonLoad>
        </Div>
    )
}
Button.propTypes = {
    loadMoreImg: PropTypes.func.isRequired,
}