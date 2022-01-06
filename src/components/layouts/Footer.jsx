import React from "react";

const Footer = (props) => {
	return (
			<>
				{
					(props.value === '') ? '' :
					<footer className="main-footer">
						<div className="pull-right hidden-xs">
							All rights reserved.
						</div>
						<strong>Copyright &copy; 2022.</strong> 
					</footer>
				}
			</>
	);
}
export default Footer;