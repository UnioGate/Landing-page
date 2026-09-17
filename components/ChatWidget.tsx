"use client";

import { useEffect } from "react";

/**
 * GudDesk live chat.
 *
 * The widget paints above everything on the page, including the splash screen
 * at z-9999, so it is mounted only once the splash has finished. Loading it any
 * earlier drops a chat bubble onto an otherwise blank white loading screen.
 *
 * widget.js reads window.GudDeskSettings the moment it runs, so the two steps
 * are done by hand rather than through next/script: that way the settings are
 * guaranteed to be in place first, with no ordering assumptions between two
 * separate script strategies.
 *
 * The www host is deliberate. guddesk.com/widget.js answers 307 and redirects
 * to www, which would cost a round trip on every visit.
 *
 * appId is a publishable key (gd_pub_), so it is meant to sit in client HTML.
 */

const APP_ID = "gd_pub_cmu5xmehf000104jsvmhos46l";
const SRC = "https://www.guddesk.com/widget.js";

/*
 * Production only: local development is ruled out by NODE_ENV and Vercel
 * preview deploys by VERCEL_ENV, so neither files junk visitor records into the
 * GudDesk inbox or pings whoever is on chat duty with a test message.
 *
 * The second check asks whether this is a preview rather than whether it is
 * production, on purpose. NEXT_PUBLIC_VERCEL_ENV only exists while Vercel is
 * exposing its system environment variables to the build, and if that ever
 * stops being true we would rather run the widget than have live chat quietly
 * vanish from the site.
 */
const enabled =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview";

declare global {
    interface Window {
        GudDeskSettings?: { appId: string };
    }
}

export default function ChatWidget() {
    useEffect(() => {
        if (!enabled) return;

        /* React runs effects twice in development, and the widget appends its
         * own host node, so a second load would give us two chat bubbles. */
        if (document.querySelector(`script[src="${SRC}"]`)) return;

        window.GudDeskSettings = { appId: APP_ID };

        const script = document.createElement("script");
        script.src = SRC;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return null;
}
