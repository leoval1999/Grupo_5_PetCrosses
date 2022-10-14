import React, { Component } from "react";
import Genre from "./Subcomponents/Genre.jsx"
class GenresInDb extends Component {
	constructor() {
		super();
		this.state = {
			genres: []
		}
	}

	async componentDidMount() {
		const response = await fetch("http://localhost:3000/api/products");
		const data = await response.json();
		this.setState({ genres: data.categoryName })

	}

	render() {
		console.log(this.state.genres)
		return (
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
					</div>
					<div className="card-body">
						<div className="row">
							{
								this.state.genres.map((genre,i) => <Genre key = {genre.category_name + i} genreName ={ genre.category_name}/>)
							}
							<Genre />
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default GenresInDb;