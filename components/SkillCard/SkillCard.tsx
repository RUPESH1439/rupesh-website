import Image from "next/image";

export interface ISkillCardProps {
	iconSrc: string;
	title: string;
	description: string;
	subtitle1: string;
	items1: string[];
	subtitle2: string;
	items2: string[];
	lastCard?: boolean;
	firstCard?: boolean;
}

const SkillCard = ({
	iconSrc,
	title,
	description,
	items1,
	items2,
	subtitle1,
	subtitle2,
	lastCard,
	firstCard,
}: ISkillCardProps): JSX.Element => (
	<div
		className={`flex flex-col py-20 px-16 text-center border-l border-b border-border-gray ${
			lastCard && "border-r rounded-r-2xl"
		} ${firstCard && "rounded-l-2xl"}`}
	>
		<div className="mb-10">
			<Image src={iconSrc} height={40} width={40} />
		</div>
		<div className="flex flex-col">
			<span className="text-xl font-semibold">{title}</span>
			<span className="text-lg font-extralight mt-6 ">{description}</span>
		</div>
		<div className="flex flex-col my-10">
			<span className="text-lg font-medium text-primary">{subtitle1}</span>
			<span className="mt-3 font-extralight">{items1.join(", ")}</span>
		</div>
		<div className="">
			<span className="text-lg font-medium text-primary">{subtitle2}</span>
			<div className="flex flex-col">
				{items2.map((item) => (
					<span key="item" className="font-extralight">
						{item}
					</span>
				))}
			</div>
		</div>
	</div>
);
export default SkillCard;
