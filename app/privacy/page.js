```javascript
export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f4ee",
        color: "#1f2933",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "48px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <a
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "30px",
            color: "#7c3aed",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          ← Back to Bogotá Unlocked
        </a>

        <h1
          style={{
            fontSize: "42px",
            lineHeight: "1.15",
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Privacy Policy
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "40px",
          }}
        >
          Last updated: October 2026
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            When you request availability for a Bogotá Unlocked experience,
            we may collect information such as your name, email address,
            preferred date, number of guests, and pickup location.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to your request,
            check availability, organize your experience, communicate with
            you about your reservation, and provide the requested services.
          </p>
        </section>

        <section>
          <h2>3. WhatsApp Communication</h2>
          <p>
            When you choose to check availability through WhatsApp, the
            information you submit may be included in the WhatsApp message
            used to communicate with you.
          </p>
        </section>

        <section>
          <h2>4. Payment Information</h2>
          <p>
            Bogotá Unlocked does not collect or store your full card details
            through this website. When a deposit is required after your date
            has been confirmed, payment may be processed through a third-party
            payment provider using a secure payment link.
          </p>
        </section>

        <section>
          <h2>5. Sharing of Information</h2>
          <p>
            We may share information when necessary with service providers
            involved in delivering your experience, such as transportation
            providers, guides, or payment providers. We only use information
            as reasonably necessary to provide and manage the service.
          </p>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We take reasonable measures to protect the information provided
            through our website and communication channels. However, no
            internet transmission or electronic storage system can be
            guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>
            You may request information about the personal data we hold about
            you and request correction or other actions available under
            applicable Colombian data protection law.
          </p>
        </section>

        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any updated
            version will be published on this page with a revised update date.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or the handling of
            your personal information, please contact Bogotá Unlocked through
            the communication channels provided on our website.
          </p>
        </section>

        <div
          style={{
            marginTop: "50px",
            paddingTop: "25px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <a
            href="/terms"
            style={{
              marginRight: "20px",
              color: "#7c3aed",
              textDecoration: "none",
            }}
          >
            Terms & Conditions
          </a>

          <a
            href="/cancellation"
            style={{
              color: "#7c3aed",
              textDecoration: "none",
            }}
          >
            Cancellation Policy
          </a>
        </div>
      </div>
    </main>
  );
}
```
