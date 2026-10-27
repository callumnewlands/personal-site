import Image from "next/image";
import SlidingMasthead from "../components/SlidingMasthead";
import InfoBlocks from "../components/InfoBlocks";
import { FullWidthButton } from "../components/Buttons";
import MoodBoardGrid from "../components/MoodBoardGrid";

import insightHousing from "../public/screenshots/insighthousing.webp";
import forestGenerator from "../public/screenshots/forestgenerator.webp";
import dataViz from "../public/screenshots/dataviz.webp";
import spydify from "../public/screenshots/spydify.webp";
import mathsPlanner from "../public/screenshots/mathsplanner.webp";
import codeScreen from "../public/illustrations/code-screen.png";
import painting from "../public/illustrations/painting-dark-bg-2.svg";
import tablet from "../public/illustrations/smartphone-or-tablet-dark-bg.svg";
import lightbulb from "../public/illustrations/lightbulb-dark-bg-2.svg";
import WavesDivider from "../components/WavesDivider";
import Seo from "../components/Seo";
import { pages } from "../data/pages";

const year = new Date().getFullYear();

export default function Home() {
    const infoData = [
        {
            icon: <Image src={codeScreen} alt="Illustration of a stylised coding screen" sizes="7rem" />,
            title: "Coding is what I do",
            content:
                `I have been programming for ${year - 2011} years, including 4 years at degree-level and ${year - 2020} years commercial experience (and counting). I have a First-class Master's degree in Computer Science ` +
                `(4.0 GPA equivalent) and am now working as a freelance, full-stack, web and desktop application developer.`
        },
        {
            icon: <Image src={painting} alt="Illustration of a painting" sizes="7rem" />,
            title: "I have a passion for UI/UX",
            content:
                "Elegant designs and efficient, accessible user interactions are at the heart of application development. " +
                "I love finding clean and beautiful solutions to user experience problems through UI design and implementation. "
        },
        {
            icon: <Image src={tablet} alt="Illustration of a tablet" sizes="7rem" />,
            title: "I can work with any technology",
            content:
                "I work with a broad range of technologies from Java and SpringBoot to React and TypeScript and lots in-between. " +
                "As well as this, my past experience and studies allow me to quickly become proficient in new tools and technologies."
        },
        {
            icon: <Image src={lightbulb} alt="Illustration of a lightbulb" sizes="7rem" />,
            title: "No problem is too big or small",
            content:
                "Need a simple website for your business? Or a fully-fledged, scalable, web-app with a database connection " +
                "and complex data-processing algorithms? Or something in-between? I can work on any size project, just get in touch!"
        }
    ];

    const moodBoardData = {
        title: "My Work",
        description:
            "Below are some examples of my previous work. Why not click on one of the screenshots to find out more about " +
            "the project and what was involved in it?",
        topLeft: {
            src: insightHousing,
            alt: "Screenshot of the InsightHousing application",
            link: "/portfolio/insighthousing"
        },
        topCentre: {
            src: forestGenerator,
            alt: "Screenshot of the ForestGenerator application",
            link: "/portfolio/forestgenerator"
        },
        topRight: {
            src: dataViz,
            alt: "Screenshot of two data visualisation charts created for a data story about the viability of electric cars",
            link: "/portfolio"
        },
        bottomLeft: { src: spydify, alt: "Screenshot of the Spydify application", link: "/portfolio/spydify" },
        bottomRight: {
            src: mathsPlanner,
            alt: "Screenshot of the MathsPlanner application",
            link: "/portfolio/mathsplanner"
        }
    };

    return (
        <>
            <Seo {...pages.home} />
            <SlidingMasthead />
            <MoodBoardGrid {...moodBoardData} />
            <FullWidthButton href={"/portfolio"}>Find Out More</FullWidthButton>
            <WavesDivider>
                <InfoBlocks data={infoData} />
                <FullWidthButton href={"/contact"} noMargin>
                    Contact Me
                </FullWidthButton>
            </WavesDivider>
        </>
    );
}
