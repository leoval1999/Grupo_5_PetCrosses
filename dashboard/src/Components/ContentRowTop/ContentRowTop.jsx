import React from "react";

import ActorsQuantity from "../ActorsQuantity/ActorsQuantity";
import GenresInDb from "../GenresInDB/GenresInDb";
import LastMovieInDb from "../LastMovieInDB/LastMovieInDb";
import MoviesInDB from "../MoviesInDB/MoviesInDB";
import TotalAwards from "../TotalAwards/TotalAwards";

function ContentRowTop(){
    return(
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">

						{/*<!-- Movies in Data Base -->*/}
						< MoviesInDB />

						{/*<!-- Total awards -->*/}
						<TotalAwards/>

						{/*<!-- Actors quantity -->*/}
						< ActorsQuantity/>
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						{/*< LastMovieInDb />*/}
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb/>
					</div>
				</div>
    )
}

export default ContentRowTop;