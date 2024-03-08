"use client";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "./text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center bg-[#1d1c20] h-[20rem]  w-full">
            <TextRevealCard
                text="Career Objective"
                revealText="Career Objective"
            >
                <TextRevealCardTitle>
                    CAREER OBJECTIVE
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    Dedicated and results-driven BBA graduate with a focus on customer satisfaction, seeking a challenging position in a reputed organization. Eager to leverage my interpersonal skills and diverse experiences in teaching, online marketing, and business club leadership to contribute effectively in a creative and challenging environment.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
