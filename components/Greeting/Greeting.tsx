import { INTRO } from "../../constants/Text";

const Greeting = (): JSX.Element => (
	<div className="flex flex-col items-center justify-center bg-primary">
		<div className="flex flex-col items-center justify-center w-2/4 my-56 mt-16">
			<span className="text-white text-2xl font-semibold">
				{INTRO.GREETING}
			</span>
			<span className="text-white text-lg font-light align-middle my-5">
				{INTRO.GREETING_DESCRIPTION}
			</span>
		</div>
	</div>
);
export default Greeting;
