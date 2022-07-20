import SlidingMasthead from "../components/SlidingMasthead";
import InfoBlocks from "../components/InfoBlocks";
import FullWidthButton from "../components/FullWidthButton";

export default function Home() {

    const infoData = [
        {
            icon: <img src={"/code-screen.png"} alt={"Illustration of a stylised coding screen"} />,
            title: "Coding is what I do",
            content: "I have been programming for " + (new Date().getFullYear() - 2011).toString() + " years, including " + (new Date().getFullYear() - 2020).toString() + " years commercial experience (and counting). I have a Master's degree in Computer Science and am now working as a freelance full-stack web and desktop application developer."
        },
        {
            icon: <img src={"/painting.png"} alt={"Illustration of a painting"} />,
            title: "I have a passion for UI/UX",
            content: "Elegant designs and efficient, accessible user interactions are at the heart of application development. I love finding clean and beautiful solutions to user experience problems through UI design and implementation. "
        },
        {
            icon: <img src={"/smartphone-or-tablet.png"} alt={"Illustration of a tablet"} />,
            title: "Something about any technology",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            icon: <img src={"/lightbulb.png"} alt={"Illustration of a lightbulb"} />,
            title: "Something about ideas/problem solving any project",
            content: "Ultrices dui sapien eget mi proin sed libero enim. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Tortor consequat id porta nibh venenatis. Nunc sed id semper risus in hendrerit gravida rutrum. "
        }
    ];

    return (
        <>
            <SlidingMasthead />
            <InfoBlocks data={infoData} />
            <FullWidthButton href={"/contact"}>Contact Me</FullWidthButton>
            <div className={"container"}>
                <h1>Welcome to my website!</h1>
                <p className="description">
                    The site is currently under development. Check back soon for updates!
                </p>
            </div>
        </>
    );
}
