import { INTRO } from "../../constants/Text";
import Image from "next/image";

const Intro = (): JSX.Element => (
	<div className="flex flex-col items-center mt-32">
		<span className="font-semibold text-4xl">{INTRO.TITLE}</span>
		<span className="font-light text-xl my-10">{INTRO.DESCRIPTION}</span>
		<div className="flex flex-col items-center justify-between mt-4 gap-10">
			<Image src="/UserAvatar.svg" height={200} width={200} />
			<Image src="/Developer.svg" height={300} width={700} />
		</div>
	</div>
);

export default Intro;
