
import { SparklesPreview } from "../components/ui/Sparkles/Sparkles-Comp";
import { StickyScrollRevealDemo } from "../components/ui/Sticky-scroll-reveal/sticky-scroll-reveal-comp";
import { TextRevealCardPreview } from "../components/ui/Text-reveal-card/text-reveal-Comp";
import { TracingBeamDemo } from "../components/ui/Tracing-beam/tracing-beam-comp";


const Home = () => {
    return (
        <div>
            <SparklesPreview></SparklesPreview>
            <div className="mb-10">
                <TextRevealCardPreview></TextRevealCardPreview>
            </div>
            <TracingBeamDemo></TracingBeamDemo>
            <StickyScrollRevealDemo></StickyScrollRevealDemo>
        </div>
    );
};

export default Home;