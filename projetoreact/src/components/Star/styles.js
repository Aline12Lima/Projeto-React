import { FaRegStar, FaStar } from 'react-icons/fa';
import styled from 'styled-components';

export const StyledStar = styled(FaRegStar)`
path {
    fill: ${({theme}) => theme.colors.pink};

}
`

export const StyledFilledStar = styled(FaStar)`
path {
    fill: ${({theme}) => theme.colors.pink};
   
}
`