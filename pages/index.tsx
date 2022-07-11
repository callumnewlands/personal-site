import SlidingMasthead from "../components/SlidingMasthead";

export default function Home() {
    return (
        <>
            <SlidingMasthead />
            <div className={"container"}>
                <h1>Welcome to my website!</h1>
                <p className="description">
                    The site is currently under development. Check back soon for updates!
                </p>
            </div>
        </>
    );
}
