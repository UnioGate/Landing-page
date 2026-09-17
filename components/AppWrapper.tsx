"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";
import ChatWidget from "./ChatWidget";

export default function AppWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [finished, setFinished] = useState(false);

    return (
        <>
            {!finished && (
                <SplashScreen
                    onFinish={() => setFinished(true)}
                />
            )}

            {children}

            {/* Held back until the splash clears, so the bubble does not float
                over a blank loading screen. */}
            {finished && <ChatWidget />}
        </>
    );
}