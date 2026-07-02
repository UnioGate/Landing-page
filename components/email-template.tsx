import * as React from "react";

interface EmailTemplateProps {
    email: string;
}

export function EmailTemplate({ email }: EmailTemplateProps) {
    return (
        <div
            style={{
                backgroundColor: "#EEF0F7",
                padding: "40px 10px",
                fontFamily:
                    "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            }}
        >
            <div
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        backgroundColor: "#ffffff",
                        padding: "32px",
                        textAlign: "center",
                    }}
                >
                    <img
                        src="https://res.cloudinary.com/dwedz2laa/image/upload/v1783003148/h0bsrojk4zdwcjbmtvku.png"
                        alt="UnioGate"
                        width={180}
                        height={50}
                        style={{
                            display: "block",
                            margin: "0 auto",
                            maxWidth: "180px",
                            height: "auto",
                            border: 0,
                        }}
                    />

                    <p
                        style={{
                            color: "#253E86",
                            marginTop: "10px",
                            fontSize: "15px",
                        }}
                    >
                        The Stablecoin App for Merchants
                    </p>
                </div>

                {/* Body */}
                <div style={{ padding: "20px" }}>
                    <h2
                        style={{
                            margin: 0,
                            color: "#0F172A",
                            fontSize: "28px",
                            fontWeight: 700,
                        }}
                    >
                        Welcome to UnioGate
                    </h2>

                    <p
                        style={{
                            color: "#475569",
                            fontSize: "16px",
                            lineHeight: "28px",
                            marginTop: "24px",
                        }}
                    >
                        Hi,
                    </p>

                    <p
                        style={{
                            color: "#475569",
                            fontSize: "16px",
                            lineHeight: "28px",
                        }}
                    >
                        Thanks for joining the <strong>UnioGate waitlist</strong> with{" "}
                        <strong>{email}</strong>.
                    </p>

                    <p
                        style={{
                            color: "#475569",
                            fontSize: "16px",
                            lineHeight: "28px",
                        }}
                    >
                        We've received your request and your email has been added to our
                        waitlist. We'll keep you informed as we make progress toward launch.
                    </p>

                    <div
                        style={{
                            background: "#F8FAFC",
                            border: "1px solid #E2E8F0",
                            borderRadius: "12px",
                            padding: "20px",
                            margin: "32px 0",
                        }}
                    >
                        <h3
                            style={{
                                marginTop: 0,
                                color: "#253E86",
                            }}
                        >
                            What to expect
                        </h3>

                        <ul
                            style={{
                                paddingLeft: "20px",
                                color: "#475569",
                                lineHeight: "28px",
                                marginBottom: 0,
                                listStyleType: "disc",
                            }}
                        >
                            <li>Confirmation that you're on the waitlist.</li>
                            <li>Occasional updates as we build UnioGate.</li>
                            <li>An invitation when early access becomes available.</li>
                        </ul>
                    </div>

                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "36px",
                        }}
                    >
                        <a
                            href="https://www.uniogate.com"
                            style={{
                                backgroundColor: "#253E86",
                                color: "#ffffff",
                                textDecoration: "none",
                                padding: "14px 28px",
                                borderRadius: "10px",
                                display: "inline-block",
                                fontWeight: 600,
                            }}
                        >
                            Visit uniogate.com
                        </a>
                    </div>

                    <p
                        style={{
                            color: "#64748B",
                            fontSize: "14px",
                            lineHeight: "24px",
                            marginTop: "40px",
                        }}
                    >
                        If you didn't request to join the UnioGate waitlist, you can safely
                        ignore this email.
                    </p>

                    <p
                        style={{
                            color: "#64748B",
                            fontSize: "14px",
                            lineHeight: "24px",
                        }}
                    >
                        Questions? Reply to this email or contact us at{" "}
                        <a
                            href="mailto:support@uniogate.com"
                            style={{
                                color: "#253E86",
                                textDecoration: "none",
                            }}
                        >
                            support@uniogate.com
                        </a>
                        .
                    </p>

                    <p
                        style={{
                            color: "#64748B",
                            fontSize: "14px",
                        }}
                    >
                        - The UnioGate Team
                    </p>
                </div>

                {/* Footer */}
                <div
                    style={{
                        borderTop: "1px solid #E2E8F0",
                        padding: "24px",
                        textAlign: "center",
                        fontSize: "13px",
                        color: "#94A3B8",
                    }}
                >
                    © {new Date().getFullYear()} UnioGate<br />
                    The Stablecoin App for Merchants
                </div>
            </div>
        </div>
    );
}