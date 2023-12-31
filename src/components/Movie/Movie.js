import React from 'react';

function Movie(props) {
	const {Title: title, Year: year, Type: type, Poster: poster} = props;
	return (
		<div className="card movie">
			<div className="card-image waves-effect waves-block waves-light">
				{poster === 'N/A' ? (
					<img className="activator" src={`https://placehold.co/300x400?text=${title}`} alt={title}/>
				) : (
					<img className="activator" src={poster} alt={title}/>
				)}
			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">{title}</span>
				<p>
					{year}
					<span className="right">{type}</span>
				</p>
			</div>
		</div>
	);
}

export default Movie;
