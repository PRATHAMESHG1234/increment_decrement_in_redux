import "./App.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector,useDispatch } from "react-redux";
import { incNumber,DecNumber } from "./Actions/index";
function App() {
  const myState = useSelector((state) =>
     state.changeNumber
  )
  const dispatch = useDispatch();
  return (
    <div className="container text-center">
      <h1>Increment And Decrement Counter</h1>
      <h4>Using React And Redux</h4>
      <div className="quantity ">
        <a href="#" name="quqntity_minus" title="Decrement" onClick={() => dispatch(DecNumber(6))}><span> <RemoveIcon /></span></a>
        <input id="myInput" name="quantity" type="text" className="quantity_input" value={myState} />
        <a href="#" name="quqntity_plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span> <AddIcon /> </span></a>
      </div>
    </div>
  );
}

export default App;
