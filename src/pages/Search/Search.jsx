import {useContext,useState} from "react";
import './search.css';
import { UserContext } from "../../contexts/UserContext";
import ProductList from "../../components/ProductsList/ProductsList";

function Search() {
 const {dispatch} = useContext(UserContext);
  const [search, setSearch] = useState("");
  return (
    <div className="search">
        <label htmlFor='search'>Search:</label> <input 
        id='search' 
        placeholder="pillow,blanket,bed linen"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        />
    </div>
  );
}

export default Search;
