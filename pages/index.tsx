import type { NextPage } from "next";
import Intro from "../components/Intro/Intro";
import Greeting from "../components/Greeting/Greeting";
import Skills from "../components/Skills/Skills";
const Home: NextPage = () => {
	return (
		<div className=" flex flex-col">
			<Intro />
			<div className="flex flex-col relative">
				<Greeting />
				<div className="z-10 relative" style={{ bottom: 150 }}>
					<div className="flex items-center justify-center px-56 mb-56">
						<Skills />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
