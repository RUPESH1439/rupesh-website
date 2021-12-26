import SkillCard, { ISkillCardProps } from "../SkillCard/SkillCard";

const SkillsList: ISkillCardProps[] = [
	{
		title: "Designer",
		iconSrc: "/Designer.svg",
		description:
			"I value simple content structure, clean design patterns, and thoughtful interactions.",
		subtitle1: "Things I enjoy designing",
		items1: ["UX", "UI", "Web", "Mobile", "Apps"],
		subtitle2: "Design Tools",
		items2: [
			"Balsamiq Mockups",
			"Figma",
			"Invision",
			"Marvel",
			"Pen & Paper",
			"Webflow",
			"Zeplin",
		],
	},
	{
		title: "Front-end Developer",
		iconSrc: "/DeveloperIcon.svg",
		description:
			"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
		subtitle1: "Languages I speak:",
		items1: ["HTML", "Pug", "Slim", "SASS", "Less"],
		subtitle2: "Dev Tools",
		items2: [
			"Atom",
			"Bitbucket",
			"Invision",
			"Marvel",
			"Pen & Paper",
			"Webflow",
			"Zeplin",
		],
	},

	{
		title: "Back-end Developer",
		iconSrc: "/Mentor.svg",
		description:
			"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
		subtitle1: "Languages I speak:",
		items1: ["HTML", "Pug", "Slim", "SASS", "Less"],
		subtitle2: "Dev Tools",
		items2: [
			"Atom",
			"Bitbucket",
			"Invision",
			"Marvel",
			"Pen & Paper",
			"Webflow",
			"Zeplin",
		],
	},
];

const Skills = (): JSX.Element => (
	<div className="flex flex-row bg-white rounded-2xl shadow-2xl">
		{SkillsList.map(
			(
				{ title, iconSrc, description, subtitle2, subtitle1, items2, items1 },
				index
			) => (
				<>
					<SkillCard
						key={title}
						iconSrc={iconSrc}
						title={title}
						description={description}
						subtitle1={subtitle1}
						items1={items1}
						subtitle2={subtitle2}
						items2={items2}
						lastCard={index === SkillsList.length - 1}
						firstCard={index === 0}
					/>
				</>
			)
		)}
	</div>
);
export default Skills;
