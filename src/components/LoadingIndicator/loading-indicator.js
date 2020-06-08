import React from "react";

import './loading-indicator.css';

const LoadingIndicator = () => {
	return (
		<div className="loading-indicator">
			<div className="lds-roller">
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
			</div>
		</div>
	);
};

export default LoadingIndicator;