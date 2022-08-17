import styled from "styled-components"
import { useState } from "react"


const MinusPlus = () => {

    const [incDec, setincDec] = useState(0);




    return (
        <Container>
            <button onClick={() => setincDec((prevCount) => prevCount + 1)}>+</button>
            <h1>{incDec}</h1>
            <button onClick={() => setincDec((prevCount) => prevCount - 1)}>-</button>
        </Container>
    )
}

export default MinusPlus


const Container = styled.div`
background:#6071A1;
color:white;
padding:50px;
text-align:center;

button {
   padding:10px;
   min-width:40px;
   border-radius:10px;
   font-weight:bold;
   font-size:18px;
   border:none;
   cursor:pointer;

}
`;