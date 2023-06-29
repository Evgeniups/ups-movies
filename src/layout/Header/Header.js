import React from 'react';

const Header = () => {
	return (
		<nav>
			<div className="nav-wrapper teal ">
				<a href="https://evgeniups.github.io/ups-movies" className="brand-logo ">
					React movies
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="https://github.com/EvgeniUPS/ups-movies">Repo</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
