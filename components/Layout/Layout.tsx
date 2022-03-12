import { ReactChild } from "react";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: ReactChild }): JSX.Element => (
	<div className="">
		{/*<Header />*/}
		{children}
		<Footer />
	</div>
);

export default Layout;
