import { FallingLines } from 'react-loader-spinner';
import { Div } from './Loader.styled';
export const Loader = () => {
    return (
        <Div>
        <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/></Div>
    )
}