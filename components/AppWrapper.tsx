"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";

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
        </>
    );
}