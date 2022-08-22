import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

function App() {
  const notify = () => toast("Payam Hayati");
  return (
    <Container>
      <button onClick={notify}>Bingo!</button>
      <ToastContainer
        position="bottom-center"
        autoClose={9000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 10px;

  button {
    border: none;
    color: white;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    background: #007bff;
    cursor: pointer;
    position: relative;

    &:hover {
      border: solid 2px #c6d3e7;
    }
  }
`;
