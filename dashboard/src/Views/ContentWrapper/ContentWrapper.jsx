import React from "react";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import ContentRowTop from "../../Components/ContentRowTop/ContentRowTop.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Table from "../../Components/Table/Table.jsx"
class ContentWrapper extends React.Component{
	constructor(){
		super();
		this.state = {
			productos : []
		}
	}

	

	async componentDidMount() {
		const response = await fetch("http://localhost:3000/api/products")
		const data = await response.json();
		this.setState({ productos: data.products })
	}

	render()
		{return(
			<div id="content-wrapper" className="d-flex flex-column">
	
				{/*<!-- Main Content -->*/}
				<div id="content">
	
					{/*<!-- Topbar -->*/}
					{/*< Topbar />*/}
					{/*<!-- End of Topbar -->*/}
	
					{/*<!-- Content Row Top -->*/}
					<ContentRowTop/>
					{/*<!--End Content Row Top-->*/}
				</div>
	
				
				{/*<!-- End of MainContent -->*/}
				<Table data ={this.state.productos} />
	
				{/*<!-- Footer -->*/}
				<Footer/>
				{/*<!-- End of Footer -->*/}
	
			</div>
		)
	}
    
}

export default ContentWrapper;