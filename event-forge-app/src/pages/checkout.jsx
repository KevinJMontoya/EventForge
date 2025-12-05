import React, { useState } from "react";

/**
 * Simple Checkout / Payment page (mock)
 * - Collects payer info and card fields (mock)
 * - Performs basic validation
 * - Simulates a payment processing call
 *
 * Drop this file at: src/pages/checkout.jsx
 */

export default function CheckoutPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
        amount: "25.00", // default amount
    });

    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [result, setResult] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setErrors((e) => ({ ...e, [name]: null }));
        setResult(null);
    }

    // Basic form validation
    function validate() {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
        if (!/^\d{12,19}$/.test(form.cardNumber.replace(/\s+/g, "")))
            e.cardNumber = "Enter 12–19 digits";
        if (!/^\d{3,4}$/.test(form.cvc)) e.cvc = "3–4 digits";
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry)) e.expiry = "MM/YY";
        if (!/^\d+(\.\d{1,2})?$/.test(form.amount) || Number(form.amount) <= 0)
            e.amount = "Enter a positive amount";
        return e;
    }

    function maskCard(number) {
        const digits = number.replace(/\s+/g, "");
        if (digits.length < 4) return digits;
        const last4 = digits.slice(-4);
        return "•".repeat(Math.max(0, digits.length - 4)) + last4;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setResult(null);

        const validation = validate();
        if (Object.keys(validation).length) {
            setErrors(validation);
            return;
        }

        setProcessing(true);
        setErrors({});

        // Simulate an async payment call (replace with real SDK/call)
        try {
            await new Promise((res) => setTimeout(res, 1400));

            // Simple deterministic "decline" condition for demo
            const digits = form.cardNumber.replace(/\s+/g, "");
            if (digits.endsWith("0000")) {
                throw new Error("Card declined by issuer");
            }

            const receipt = {
                id: `rcpt_${Math.random().toString(36).slice(2, 10)}`,
                name: form.name,
                email: form.email,
                amount: Number(form.amount).toFixed(2),
                last4: digits.slice(-4),
                timestamp: new Date().toISOString(),
            };

            setResult({ success: true, receipt });
            // Clear sensitive fields but keep payer details
            setForm((s) => ({ ...s, cardNumber: "", cvc: "", expiry: "" }));
        } catch (err) {
            setResult({ success: false, message: err.message || "Payment failed" });
        } finally {
            setProcessing(false);
        }
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Checkout</h2>

            <form onSubmit={handleSubmit} style={styles.form} noValidate>
                <div style={styles.row}>
                    <label style={styles.label}>
                        Full name
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder="Jane Doe"
                        />
                        {errors.name && <div style={styles.error}>{errors.name}</div>}
                    </label>

                    <label style={styles.label}>
                        Email
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder="you@example.com"
                        />
                        {errors.email && <div style={styles.error}>{errors.email}</div>}
                    </label>
                </div>

                <div style={styles.row}>
                    <label style={styles.label}>
                        Card number
                        <input
                            name="cardNumber"
                            value={form.cardNumber}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder="4242424242424242"
                            inputMode="numeric"
                        />
                        {errors.cardNumber && <div style={styles.error}>{errors.cardNumber}</div>}
                    </label>

                    <div style={{ flex: 1 }}>
                        <label style={styles.label}>
                            Expiry (MM/YY)
                            <input
                                name="expiry"
                                value={form.expiry}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="08/25"
                                inputMode="numeric"
                            />
                            {errors.expiry && <div style={styles.error}>{errors.expiry}</div>}
                        </label>

                        <label style={styles.label}>
                            CVC
                            <input
                                name="cvc"
                                value={form.cvc}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="123"
                                inputMode="numeric"
                            />
                            {errors.cvc && <div style={styles.error}>{errors.cvc}</div>}
                        </label>
                    </div>
                </div>

                <label style={styles.label}>
                    Amount (USD)
                    <input
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="25.00"
                        inputMode="decimal"
                    />
                    {errors.amount && <div style={styles.error}>{errors.amount}</div>}
                </label>

                <div style={styles.row}>
                    <button type="submit" disabled={processing} style={styles.button}>
                        {processing ? "Processing…" : `Pay $${Number(form.amount || 0).toFixed(2)}`}
                    </button>

                    <div style={styles.summary}>
                        <div style={styles.summaryLine}>
                            <strong>Paying:</strong> ${Number(form.amount || 0).toFixed(2)}
                        </div>
                        <div style={styles.summaryLine}>
                            <strong>Card:</strong>{" "}
                            {form.cardNumber ? maskCard(form.cardNumber) : "No card entered"}
                        </div>
                    </div>
                </div>
            </form>

            {result && (
                <div
                    style={{
                        ...styles.result,
                        background: result.success ? "#e6ffed" : "#ffe6e6",
                        borderColor: result.success ? "#2e7d32" : "#c62828",
                        color: result.success ? "#2e7d32" : "#c62828",
                    }}
                >
                    {result.success ? (
                        <div>
                            <h4 style={{ margin: "0 0 8px 0" }}>Payment successful</h4>
                            <div>Receipt: {result.receipt.id}</div>
                            <div>
                                {result.receipt.name} • {result.receipt.email}
                            </div>
                            <div>
                                Card •••• {result.receipt.last4} • ${result.receipt.amount}
                            </div>
                            <div style={{ fontSize: 12, marginTop: 8 }}>{result.receipt.timestamp}</div>
                        </div>
                    ) : (
                        <div>
                            <h4 style={{ margin: "0 0 8px 0" }}>Payment failed</h4>
                            <div>{result.message}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: 720,
        margin: "32px auto",
        padding: 20,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    },
    heading: {
        marginBottom: 12,
    },
    form: {
        background: "#fafafa",
        padding: 16,
        borderRadius: 8,
        border: "1px solid #eee",
    },
    row: {
        display: "flex",
        gap: 12,
        marginBottom: 12,
        alignItems: "flex-end",
    },
    label: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        fontSize: 14,
    },
    input: {
        padding: "8px 10px",
        fontSize: 14,
        borderRadius: 4,
        border: "1px solid #ccc",
        marginTop: 6,
    },
    button: {
        padding: "10px 16px",
        fontSize: 16,
        borderRadius: 6,
        border: "none",
        background: "#2563eb",
        color: "white",
        cursor: "pointer",
        minWidth: 160,
    },
    summary: {
        marginLeft: "auto",
        textAlign: "right",
        fontSize: 14,
    },
    summaryLine: {
        marginBottom: 4,
    },
    error: {
        color: "#b91c1c",
        fontSize: 12,
        marginTop: 6,
    },
    result: {
        marginTop: 16,
        padding: 12,
        borderRadius: 6,
        border: "1px solid",
    },
};