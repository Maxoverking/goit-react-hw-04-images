import axios from "axios";
import PropTypes from "prop-types";
//Запрос на сервер 
export const requestHTTP = async (inputValue, page) => {
    const URL = 'https://pixabay.com/api/?key=31213238-ba438b7a093e03eb97bf90c50&';
    const OPTION = `q=${inputValue}&image_type=photo&orientation=horizontal&`;
    const PAGES = `page=${page}&per_page=12`
    try {
        const response = await axios.get(`${URL}${OPTION}${PAGES}`);
        return response.data;
    } catch (error) {
       return console.log('ERROR in Servises',error); 
    }
}
requestHTTP.propTypes = {
    inputValue:PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
}
