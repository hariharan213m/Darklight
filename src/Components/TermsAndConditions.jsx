import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title display-2">Terms and Conditions</h1>
      <p className="terms-intro">
        These Terms and Conditions (“Terms”) govern the services provided by
        Darklight Chess Academy (“Academy,” “we,” “us,” or “our”). By enrolling
        in or using our services, you agree to these Terms.
      </p>

      <h3 className="terms-section-title">1. Enrollment and Fees</h3>
      <ul className="terms-list">
        <li>
          <b>Registration:</b> Students must complete the registration process
          and pay applicable fees to confirm enrollment.
        </li>
        <li>
          <b>Fees:</b> All fees must be paid in advance. The Academy reserves
          the right to suspend access to classes for unpaid fees.
        </li>
        <li>
          <b>Refund Policy:</b> Fees are non-refundable unless the Academy
          cancels the program or specific classes.
        </li>
      </ul>

      <h3 className="terms-section-title">2. Class Schedule and Attendance</h3>
      <ul className="terms-list">
        <li>
          <b>Schedules:</b> The Academy reserves the right to modify class
          schedules, including rescheduling or canceling classes.
        </li>
        <li>
          <b>Attendance:</b> Students are expected to attend classes regularly.
          Missed classes will not be refunded or rescheduled unless explicitly
          agreed upon in advance.
        </li>
      </ul>

      <h3 className="terms-section-title">3. Code of Conduct</h3>
      <ul className="terms-list">
        <li>
          <b>Student Behavior:</b> All students are expected to maintain respect
          and discipline toward instructors and peers. Disruptive behavior may
          result in removal from the Academy.
        </li>
        <li>
          <b>Fair Play:</b> Students must adhere to ethical practices during
          games and tournaments. Cheating, including the use of unauthorized
          software or assistance, will not be tolerated.
        </li>
      </ul>

      <h3 className="terms-section-title">4. Intellectual Property</h3>
      <ul className="terms-list">
        <li>
          <b>Content Ownership:</b> All course materials, videos, and resources
          provided by the Academy remain the intellectual property of Darklight
          Chess Academy.
        </li>
        <li>
          <b>Usage Rights:</b> Students may not distribute, reproduce, or share
          the Academy’s materials without prior written consent.
        </li>
      </ul>

      <h3 className="terms-section-title">5. Online Classes</h3>
      <ul className="terms-list">
        <li>
          <b>Technical Requirements:</b> Students are responsible for ensuring
          they have access to a stable internet connection and appropriate
          devices for online classes.
        </li>
        <li>
          <b>Recording:</b> Classes may be recorded for quality and training
          purposes. Recordings will not be shared without prior consent from the
          students or guardians.
        </li>
      </ul>

      <h3 className="terms-section-title">6. Privacy and Data Protection</h3>
      <ul className="terms-list">
        <li>
          <b>Student Information:</b> We respect your privacy and ensure that
          personal data collected during enrollment is securely stored and used
          solely for Academy purposes.
        </li>
        <li>
          <b>Third Parties:</b> We do not share personal data with third parties
          without consent, except as required by law.
        </li>
      </ul>

      <h3 className="terms-section-title">7. Tournaments and Events</h3>
      <ul className="terms-list">
        <li>
          <b>Participation:</b> Tournament participation may require additional
          fees and is subject to the specific rules of each event.
        </li>
        <li>
          <b>Liability:</b> The Academy is not liable for any outcomes,
          injuries, or disputes arising during tournaments not directly
          organized by the Academy.
        </li>
      </ul>

      <h3 className="terms-section-title">8. Limitation of Liability</h3>
      <ul className="terms-list">
        <li>
          The Academy is not liable for technical issues, disruptions, or delays
          caused by third-party platforms, internet outages, or unforeseen
          circumstances.
        </li>
        <li>
          Parents/guardians are responsible for supervising minor students
          during in-person classes or tournaments.
        </li>
      </ul>

      <h3 className="terms-section-title">9. Amendments</h3>
      <ul className="terms-list">
        <li>
          The Academy reserves the right to update or modify these Terms at any
          time. Changes will be communicated to students or guardians through
          email or announcements.
        </li>
      </ul>

      <h3 className="terms-section-title">10. Contact Information</h3>
      <p className="terms-contact">
        For any questions or concerns regarding these Terms, please contact us
        at:
      </p>
      <ul className="terms-contact-list">
        <li>
          <b>Email:</b> darklightchess64@gmail.com
        </li>
        <li>
          <b>Phone:</b> +91 8300155259
        </li>
        <li>
          <b>Website:</b>{" "}
          <a
            href="https://darklightchess.com"
            target="_blank"
            rel="noopener noreferrer"
            className="terms-link"
          >
            darklightchess.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
