import React, { useEffect } from "react";
import "./Help.css";
import { Link } from 'react-router-dom';

const HelpPage = () => {
  useEffect(() => {
    // FAQ toggle
    const faqButtons = document.querySelectorAll(".faq-question");
    faqButtons.forEach(button => {
      button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      });
    });

    // Accordion toggle
    const items = document.querySelectorAll(".accordion-item");
    items.forEach(item => {
      const question = item.querySelector(".accordion-question");
      question.addEventListener("click", () => {
        items.forEach(i => {
          if (i !== item) i.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    });

    return () => {
      // cleanup
      faqButtons.forEach(button => {
        button.onclick = null;
      });
      items.forEach(item => {
        const question = item.querySelector(".accordion-question");
        question.onclick = null;
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. We'll contact you soon!");
    e.target.reset();
  };

  return (
    <div>
      <header className="help-header">
        <div className="back-button-container">
          <Link to="/main" className="back-button">← Back to Home</Link>
        </div>
        <h1>How can we help you?</h1>
      </header>

      <main className="help-main">
        <section className="help-topics">
          <h2>Queries</h2>

          <div className="accordion-item">
            <div className="accordion-question">How to place an order?</div>
            <div className="accordion-answer">
              To place an order:<br />
              - Browse through our categories (Sweets, Snacks, Cakes, etc.)<br />
              - Click on an item to view details.<br />
              - Select quantity or options and click <strong>Add to Cart</strong>.<br />
              - Go to <strong>Your Order</strong>, add delivery address, and make payment.<br />
              - Confirm and track your order.
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-question">Tracking your delivery</div>
            <div className="accordion-answer">
              After placing your order:<br />
              - Visit the <strong>"Tracking Your Order"</strong> page.<br />
              - View real-time status: Preparing → Out for delivery → Delivered.<br />
              - SMS or Email notifications will be sent.
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-question">Payment methods</div>
            <div className="accordion-answer">
              We support:<br />
              - UPI: Google Pay, PhonePe, Paytm<br />
              - Credit/Debit Cards<br />
              - Net Banking<br />
              - Wallets<br />
              - Cash on Delivery (available in select areas)
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-question">Cancel or modify your order</div>
            <div className="accordion-answer">
              You can cancel/modify before dispatch:<br />
              - Go to <strong>Your Order</strong><br />
              - Select order, click <strong>Cancel</strong> or <strong>Edit</strong><br />
              - Changes not allowed after dispatch.
            </div>
          </div>
        </section>

        <section className="help-faq">
          <h2>FAQs</h2>

          <div className="faq">
            <button className="faq-question">What if my food is late?</button>
            <div className="faq-answer">You can track your order in real-time or contact support if it is delayed.</div>
          </div>

          <div className="faq">
            <button className="faq-question">How do I apply a coupon?</button>
            <div className="faq-answer">You can apply a coupon during checkout before making the payment.</div>
          </div>

          <div className="faq">
            <button className="faq-question">Can I change the delivery address?</button>
            <div className="faq-answer">Yes, before placing the order. After that, contact support immediately.</div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Need More Help?</h2>
          <p>Reach out to us:</p>

          <div className="contact-box">
            <a href="tel:+919876543210" className="help-button">📞 Call Us</a>
            <a href="mailto:support@snbsweets.com?subject=Need%20Help&body=Hi%20Team%2C%20I%20need%20help%20with..." className="help-button">✉️ Email Us</a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="help-button">💬 Chat on WhatsApp</a>
          </div>
        </section>

        <section className="submit-issue">
          <h2>Submit an Issue</h2>
          <form id="issueForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="issue" placeholder="Describe your issue..." required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HelpPage;
