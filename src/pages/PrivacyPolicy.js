import React from 'react';

const PrivacyPolicy = () => (
  <article className="LegalPage">
    <header>
      <h1>Privacy Policy</h1>
      <p className="LegalPage-meta">Last Updated: January 26, 2026</p>
      <p className="LegalPage-subtitle">
        This Privacy Policy explains how Frame - Photo Collage (“the App”, “we”, “our”) handles user data, permissions,
        analytics, subscriptions, and third-party services across both iOS and Android platforms.
      </p>
    </header>

    <section>
      <h2>1. Information We Collect</h2>
      <h3>1.1 Personal Information</h3>
      <p>We do not collect personal information such as your name, email address, phone number, or contact details.</p>

      <h3>1.2 Photos and Media</h3>
      <p>
        The App requests access to your device photo gallery or media storage solely to allow you to select and use photos when creating
        collages.
      </p>
      <p>
        All photos and collages remain stored locally on your device and are never uploaded, transmitted, or stored on
        any external server.
      </p>

      <h3>1.3 Automatically Collected Data</h3>
      <p>
        To improve the App’s performance, stability, and user experience, we use Google Firebase Analytics. Firebase may
        automatically collect non personal and aggregated information, including:
      </p>
      <ul>
        <li>app interactions such as feature usage and button taps</li>
        <li>device type, manufacturer, and operating system version</li>
        <li>approximate location (country or region only)</li>
        <li>app performance metrics and crash diagnostics</li>
        <li>screen views and session duration</li>
      </ul>
      <p>
        Additionally, subscription related events and entitlement status may be processed through RevenueCat for
        purchase verification and subscription management purposes.
      </p>
      <p>This data does not directly identify you and is used solely to improve the App.</p>

      <h3>1.4 Advertising</h3>
      <p>
        The App does not display personalized advertising and does not collect advertising identifiers such as IDFA or
        Google Advertising ID.
      </p>
    </section>

    <section>
      <h2>2. Subscriptions and Payments</h2>
      <p>The App offers optional weekly, monthly, and yearly subscription plans.</p>
      <p>On iOS devices, all purchases are processed securely through Apple’s App Store.</p>
      <p>On Android devices, all purchases are processed securely through Google Play Billing.</p>
      <p>
        To manage subscriptions, verify purchase status, and grant access to premium features, the App uses RevenueCat,
        a third-party subscription management service.
      </p>
      <p>
        We do not access, store, or process any payment or credit card information. All payment details are handled
        exclusively by Apple or Google, depending on your platform.
      </p>
      <p>You may manage or cancel your subscriptions at any time through your App Store or Google Play account settings.</p>
    </section>

    <section>
      <h2>3. Data Security</h2>
      <p>Your photos, collages, and saved content remain stored locally on your device.</p>
      <p>
        We apply reasonable technical and organizational measures to protect data against unauthorized access, loss, or
        misuse.
      </p>
    </section>

    <section>
      <h2>4. Your Rights</h2>
      <p>You may revoke photo or media access permissions at any time through your device settings.</p>
      <p>You can stop all analytics collection by uninstalling the App.</p>
      <p>When the App is uninstalled, all locally stored data is permanently deleted from your device.</p>
    </section>

    <section>
      <h2>5. Children’s Privacy</h2>
      <p>The App is suitable for all ages. We do not knowingly collect personal information from children under the age of 13.</p>
    </section>

    <section>
      <h2>6. Third Party Services</h2>
      <p>The App uses the following third party services:</p>
      <h3>Google Firebase Analytics</h3>
      <p>Used for anonymized usage statistics, crash diagnostics, and performance monitoring.</p>
      <p>
        Firebase Privacy Policy:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          https://policies.google.com/privacy
        </a>
      </p>

      <h3>RevenueCat</h3>
      <p>Used to manage subscriptions, verify purchases, and provide access to premium features.</p>
      <p>
        RevenueCat may process anonymized purchase related data such as subscription status, transaction identifiers, and
        device or app level identifiers. No payment or credit card information is accessed or stored by us.
      </p>
      <p>
        RevenueCat Privacy Policy:{' '}
        <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noreferrer">
          https://www.revenuecat.com/privacy/
        </a>
      </p>
      <p>We do not sell user data and do not share personal data for advertising purposes.</p>
    </section>

    <section>
      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be reflected by updating the “Last Updated”
        date at the top of this page.
      </p>
    </section>

    <section>
      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:photo.custom.collage@outlook.com">photo.custom.collage@outlook.com</a>
      </p>
    </section>
  </article>
);

export default PrivacyPolicy;
