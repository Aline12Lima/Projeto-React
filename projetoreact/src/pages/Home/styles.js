import styled from 'styled-components';


export const Container = styled.div`
background-color:${({theme}) => theme.colors.background_900} ;

 width: 100%;
`;

export const Brand = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;
margin-top: 40px;


padding: 0 123px;


>h1{
 font-family: "Roboto Slab";
 font-size: 32px;
 font-weight: 400;
};

`
export const Content = styled.div`
width: 100%;
padding: 0 123px;

display: flex;
flex-direction: column;


> section{
  background-color: ${({theme}) => theme.colors.background_700};
  border-radius:  16px;
  margin: 24px;
  padding: 38px;

  

  h1{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 12px;

   
  }
  p{
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 32px;
    color:${({theme}) => theme.colors.gray_300}


  }
 
  
  
} `

