import React, {Component} from "react";

class ActorsQuantity extends Component{
	constructor(){
		super();
		this.state = {
			users: []
		};
	}
	async componentDidMount() {
		const response = await fetch("http://localhost:3000/api/users");
		const data = await response.json();
		this.setState({ users: data.count })

	}

	render(){
		return(
			<div className="col-md-4 mb-4">
								<div className="card border-left-warning shadow h-100 py-2">
									<div className="card-body">
										<div className="row no-gutters align-items-center">
											<div className="col mr-2">
												<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Usuarios en la DB
												</div>
												<div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.users}</div>
											</div>
											<div className="col-auto">
												<i className="fas fa-user fa-2x text-gray-300"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
		)
	}

    
}

export default ActorsQuantity;