import "./Assets/css/app.css"
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import ContentWrapper from "./Views/ContentWrapper/ContentWrapper.jsx"
import {Switch,Route} from "react-router-dom";
import GenresInDb from "./Components/GenresInDB/GenresInDb";

function App() {
  return (
    <div id="wrapper">

		{/*<!-- Sidebar -->*/}
    <Sidebar/>
		{/*<!-- End of Sidebar -->*/}

		
		
		<Switch>
			<Route exact path="/" component={ContentWrapper}/>
			<Route exact path="/generos" component={GenresInDb}/>		
		</Switch>
	</div>

	

  );
}

export default App;
