import {useContext} from "react";
import './search.css';
import { UserContext } from "../../contexts/UserContext";
import ProductList from "../../components/ProductsList/ProductsList";
function Search() {
 const {dispatch} = useContext(UserContext);
  
  return (
    <div className="search">
        <label htmlFor='search'>Search:</label> <input 
        id='search' 
        placeholder="pillow,blanket,bed linen"
        
        onChange={(e) =>dispatch({type: "SEARCH", payload: e.target.value})}
        />
    </div>
  );
}

export default Search;
