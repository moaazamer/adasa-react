import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      "شكرًا لاهتمامك! هذا نموذج تجريبي، ولم يتم تسجيل اشتراك فعلي."
    );

    setEmail("");
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-box">
        <span className="newsletter-icon" aria-hidden="true">
          ✉
        </span>

        <h2>
          اشترك في <span>نشرتنا الإخبارية</span>
        </h2>

        <p>
          نصائح التصوير ودروس جديدة تلهمك لتطوير مهاراتك.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            البريد الإلكتروني
          </label>

          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="أدخل بريدك الإلكتروني"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setMessage("");
            }}
          />

          <button type="submit">اشترك الآن ←</button>
        </form>

        <p className="newsletter-note">
          نموذج تجريبي ضمن المشروع — لا يتم إرسال البريد أو حفظه.
        </p>

        <p className="newsletter-message" role="status">
          {message}
        </p>
      </div>
    </section>
  );
}

export default Newsletter;