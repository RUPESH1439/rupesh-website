const Footer = (): JSX.Element => (
	//TODO remove hard coded values
	<div className="flex items-center bg-primary justify-center">
		<div className="flex flex-row justify-between items-center h-56 text-white gap-20">
			<a
				href="https://www.instagram.com/sthrupesh_/"
				target="_blank"
				rel="noreferrer"
			>
				<span>Instagram</span>
			</a>
			<a
				href="https://www.facebook.com/RupeshShrestha96742/"
				target="_blank"
				rel="noreferrer"
			>
				<span>Facebook</span>
			</a>
			<a
				href="https://www.linkedin.com/in/sthrupesh/"
				target="_blank"
				rel="noreferrer"
			>
				<span>Linkedin</span>
			</a>
			<a href="https://github.com/RUPESH1439" target="_blank" rel="noreferrer">
				<span>Github</span>
			</a>
		</div>
	</div>
);
export default Footer;
