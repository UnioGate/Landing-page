import * as React from "react";

interface ContactAckTemplateProps {
    name: string;
    message: string;
    topic?: string;
}

const font = "Arial, Helvetica, sans-serif";
const navy = "#253E86";
const ink = "#201e1d";
const body = "#3d4557";
const muted = "#6a7288";
const tint = "#EEF0F7";

const label: React.CSSProperties = {
    fontFamily: font,
    fontSize: "11px",
    lineHeight: "14px",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
};

const cell = (extra: React.CSSProperties = {}): React.CSSProperties => ({
    fontFamily: font,
    ...extra,
});

const steps = [
    ["01", "Your message is with the team."],
    ["02", "A reply to this address within one business day."],
    ["03", "Anything urgent? Just reply to this email."],
];

export function ContactAckTemplate({ name, message, topic }: ContactAckTemplateProps) {
    return (
        <div style={{ backgroundColor: "#e4e7f0", padding: "32px 16px", fontFamily: font }}>
            {/* Preheader — previews next to the subject line, hidden in the body */}
            <span
                style={{
                    display: "none",
                    fontSize: "1px",
                    color: "#e4e7f0",
                    lineHeight: "1px",
                    maxHeight: 0,
                    maxWidth: 0,
                    opacity: 0,
                    overflow: "hidden",
                }}
            >
                We&apos;ve got your message — a reply is on the way within one business day.
            </span>

            <table
                role="presentation"
                cellPadding={0}
                cellSpacing={0}
                border={0}
                width={600}
                align="center"
                style={{
                    width: "600px",
                    maxWidth: "600px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    borderCollapse: "collapse",
                }}
            >
                <tbody>
                    {/* Accent band */}
                    <tr>
                        <td style={{ backgroundColor: navy, height: "8px", lineHeight: "8px", fontSize: 0 }}>
                            &nbsp;
                        </td>
                    </tr>

                    {/* Header */}
                    <tr>
                        <td style={cell({ padding: "32px 40px 24px 40px", borderBottom: `2px solid ${navy}` })}>
                            <img
                                src="https://res.cloudinary.com/dwedz2laa/image/upload/v1783003148/h0bsrojk4zdwcjbmtvku.png"
                                alt="UnioGate"
                                width={150}
                                height={42}
                                style={{ display: "block", border: 0, width: "150px", height: "auto" }}
                            />
                            <div style={{ ...label, color: navy, marginTop: "14px" }}>
                                The stablecoin app for merchants
                            </div>
                        </td>
                    </tr>

                    {/* Headline + intro */}
                    <tr>
                        <td style={cell({ padding: "36px 40px 8px 40px" })}>
                            <h1
                                style={{
                                    margin: 0,
                                    fontFamily: font,
                                    fontSize: "32px",
                                    lineHeight: "38px",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    color: ink,
                                }}
                            >
                                We got your message.
                            </h1>
                            <p
                                style={{
                                    margin: "20px 0 0 0",
                                    fontFamily: font,
                                    fontSize: "16px",
                                    lineHeight: "26px",
                                    color: body,
                                }}
                            >
                                Hi {name}, thanks for reaching out to UnioGate
                                {topic ? <> about {topic.toLowerCase()}</> : null}. A member of the team
                                will reply to this address within one business day.
                            </p>
                        </td>
                    </tr>

                    {/* Their message, quoted back */}
                    <tr>
                        <td style={cell({ padding: "24px 40px 0 40px" })}>
                            <table
                                role="presentation"
                                cellPadding={0}
                                cellSpacing={0}
                                border={0}
                                width="100%"
                                style={{ width: "100%", backgroundColor: tint, borderCollapse: "collapse" }}
                            >
                                <tbody>
                                    <tr>
                                        <td style={cell({ padding: "18px 20px", borderLeft: `4px solid ${navy}` })}>
                                            <div style={{ ...label, color: muted }}>
                                                {topic ? topic : "Your message"}
                                            </div>
                                            <div
                                                style={{
                                                    marginTop: "6px",
                                                    fontFamily: font,
                                                    fontSize: "15px",
                                                    lineHeight: "24px",
                                                    color: ink,
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                {message}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    {/* What happens next */}
                    <tr>
                        <td style={cell({ padding: "36px 40px 0 40px" })}>
                            <div
                                style={{
                                    ...label,
                                    color: navy,
                                    paddingBottom: "10px",
                                    borderBottom: `2px solid ${navy}`,
                                }}
                            >
                                What happens next
                            </div>
                            <table
                                role="presentation"
                                cellPadding={0}
                                cellSpacing={0}
                                border={0}
                                width="100%"
                                style={{ width: "100%", borderCollapse: "collapse" }}
                            >
                                <tbody>
                                    {steps.map(([n, text], i) => {
                                        const rule = i < steps.length - 1 ? "1px solid #dfe3ee" : "none";
                                        return (
                                            <tr key={n}>
                                                <td
                                                    width={44}
                                                    style={cell({
                                                        width: "44px",
                                                        padding: "16px 0",
                                                        borderBottom: rule,
                                                        fontSize: "13px",
                                                        lineHeight: "20px",
                                                        fontWeight: 700,
                                                        color: navy,
                                                        verticalAlign: "top",
                                                    })}
                                                >
                                                    {n}
                                                </td>
                                                <td
                                                    style={cell({
                                                        padding: "16px 0",
                                                        borderBottom: rule,
                                                        fontSize: "15px",
                                                        lineHeight: "22px",
                                                        color: body,
                                                    })}
                                                >
                                                    {text}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    {/* Bulletproof button */}
                    <tr>
                        <td style={cell({ padding: "28px 40px 0 40px" })}>
                            <table
                                role="presentation"
                                cellPadding={0}
                                cellSpacing={0}
                                border={0}
                                style={{ borderCollapse: "collapse" }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            // React 19 dropped `bgcolor` from the td types; Outlook still wants it.
                                            {...{ bgcolor: navy }}
                                            style={{
                                                backgroundColor: navy,
                                                padding: "15px 26px",
                                                msoLineHeightRule: "exactly",
                                            } as React.CSSProperties}
                                        >
                                            <a
                                                href="https://www.uniogate.com"
                                                style={{
                                                    display: "block",
                                                    color: "#ffffff",
                                                    fontFamily: font,
                                                    fontSize: "14px",
                                                    lineHeight: "18px",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.08em",
                                                    textTransform: "uppercase",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Visit uniogate.com
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    {/* Fine print */}
                    <tr>
                        <td style={cell({ padding: "32px 40px 36px 40px" })}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: font,
                                    fontSize: "13px",
                                    lineHeight: "21px",
                                    color: muted,
                                }}
                            >
                                Didn&apos;t contact UnioGate? You can safely ignore this email.
                                <br />
                                Need to add something? Reply here or write to{" "}
                                <a
                                    href="mailto:support@uniogate.com"
                                    style={{ color: navy, textDecoration: "underline" }}
                                >
                                    support@uniogate.com
                                </a>
                                .
                            </p>
                            <p
                                style={{
                                    margin: "18px 0 0 0",
                                    fontFamily: font,
                                    fontSize: "13px",
                                    lineHeight: "21px",
                                    fontWeight: 700,
                                    color: ink,
                                }}
                            >
                                — The UnioGate Team
                            </p>
                        </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                        <td
                            style={cell({
                                padding: "22px 40px 30px 40px",
                                backgroundColor: tint,
                                borderTop: `2px solid ${navy}`,
                                fontSize: "12px",
                                lineHeight: "20px",
                                color: muted,
                            })}
                        >
                            © {new Date().getFullYear()} UnioGate · The Stablecoin App for Merchants
                            <br />
                            <span style={{ color: "#8a91a5" }}>
                                UnioGate, Ikeja, Lagos, Nigeria 100001 
                            </span>
                            <br />
                            You received this because you sent us a message at uniogate.com/contact.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
