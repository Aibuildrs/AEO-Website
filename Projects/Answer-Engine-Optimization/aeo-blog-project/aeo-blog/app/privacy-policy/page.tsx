"use client";

import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm mt-18">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <p className="text-sm text-slate-600 mt-1">
            Privacy Policy & Terms of Service
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Meta Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-slate-200">
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <span className="font-semibold text-slate-700">
                Last Updated:
              </span>
              <span className="ml-2 text-slate-600">October 30, 2025</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700">
                Effective Date:
              </span>
              <span className="ml-2 text-slate-600">October 30, 2025</span>
            </div>
          </div>
          <p className="mt-4 text-slate-700">
            This document governs your use of theaeoengine.com (the
            &quot;Website&quot;) operated by AiBuildrs
            (&quot;we&quot;,&quot;us&quot;, or &quot;our&quot;). By accessing or
            using this Website, you agree to these terms.
          </p>
        </div>

        {/* Privacy Policy Section */}
        <section
          id="privacy-policy"
          className="bg-white rounded-lg shadow-md p-8 mb-8 border border-slate-200"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
            Part 1: Privacy Policy
          </h2>

          {/* Section 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              1. Information We Collect
            </h3>

            <h4 className="font-semibold text-slate-700 mb-2">
              We collect information you provide directly to us:
            </h4>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
              <li>
                Name and email address (when you sign up for our waitlist or
                newsletter)
              </li>
              <li>Company name and website URL (if provided)</li>
              <li>Messages you send through contact forms</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h4 className="font-semibold text-slate-700 mb-2">
              We automatically collect certain information when you visit our
              Website:
            </h4>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>IP address and general location (city/country level)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of your visit</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              2. How We Use Your Information
            </h3>
            <p className="text-slate-700 mb-2">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Send you updates about The AEO Engine beta program</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you our weekly blog updates and educational content</li>
              <li>Improve our Website and services</li>
              <li>Analyze how visitors use our Website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              3. How We Share Your Information
            </h3>
            <p className="text-slate-700 mb-3 font-semibold">
              We do not sell your personal information to third parties.
            </p>
            <p className="text-slate-700 mb-2">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>
                Service providers who help us operate our Website (email service
                providers, analytics tools, hosting providers)
              </li>
              <li>
                Professional advisors (lawyers, accountants) when necessary
              </li>
              <li>
                Law enforcement or government officials when required by law
              </li>
              <li>A buyer or successor if our business is sold or merged</li>
            </ul>
            <p className="text-slate-700">
              Our service providers are contractually obligated to keep your
              information confidential and use it only for the purposes we
              specify.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              4. Cookies and Tracking Technologies
            </h3>
            <p className="text-slate-700 mb-2">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>Remember your preferences</li>
              <li>Understand how you use our Website</li>
              <li>Improve your experience</li>
              <li>Analyze Website traffic and performance</li>
            </ul>
            <p className="text-slate-700 mb-3">
              You can control cookies through your browser settings. Note that
              disabling cookies may affect Website functionality.
            </p>
            <p className="text-slate-700 mb-2">Common cookies we use:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Essential cookies (required for Website operation)</li>
              <li>Analytics cookies (Google Analytics or similar)</li>
              <li>Marketing cookies (if you consent)</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              5. Your Privacy Rights
            </h3>
            <p className="text-slate-700 mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Object to processing of your information</li>
              <li>Request a copy of your information</li>
            </ul>
            <p className="text-slate-700">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:team@aibuildrs.com"
                className="text-blue-600 hover:underline"
              >
                team@aibuildrs.com
              </a>
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              6. Data Retention
            </h3>
            <p className="text-slate-700 mb-2">
              We retain your information for as long as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>Your account is active</li>
              <li>Needed to provide you services</li>
              <li>Required by law</li>
              <li>Necessary for legitimate business purposes</li>
            </ul>
            <p className="text-slate-700">
              When you unsubscribe from our mailing list, we will remove you
              from future communications but may retain your information for
              record-keeping purposes.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              7. Data Security
            </h3>
            <p className="text-slate-700 mb-3">
              We use reasonable security measures to protect your information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the Internet is 100% secure.
            </p>
            <p className="text-slate-700 mb-2">We implement:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Encryption for data transmission (SSL/HTTPS)</li>
              <li>Secure servers and hosting</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              8. Children&apos;s Privacy
            </h3>
            <p className="text-slate-700">
              Our Website is not intended for children under 13 years of age. We
              do not knowingly collect information from children under 13. If
              you believe we have collected information from a child under 13,
              please contact us immediately.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              9. International Users
            </h3>
            <p className="text-slate-700">
              If you are accessing our Website from outside the United States,
              please note that your information may be transferred to, stored,
              and processed in the United States where our servers are located.
              By using our Website, you consent to this transfer.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              10. Changes to This Privacy Policy
            </h3>
            <p className="text-slate-700 mb-2">
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the &quot;Last Updated&quot; date</li>
              <li>Sending you an email notification (for material changes)</li>
            </ul>
            <p className="text-slate-700">
              Your continued use of the Website after changes constitutes
              acceptance of the updated Privacy Policy.
            </p>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section
          id="terms-of-service"
          className="bg-white rounded-lg shadow-md p-8 mb-8 border border-slate-200"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
            Part 2: Terms of Service
          </h2>

          {/* Section 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              1. Acceptance of Terms
            </h3>
            <p className="text-slate-700">
              By accessing or using theaeoengine.com, you agree to be bound by
              these Terms of Service and our Privacy Policy. If you do not agree
              to these terms, do not use our Website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              2. Description of Service
            </h3>
            <p className="text-slate-700 mb-2">
              The AEO Engine Website provides:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>
                Information about our Answer Engine Optimization (AEO) services
              </li>
              <li>
                Educational content about AEO and AI platform optimization
              </li>
              <li>Blog posts and weekly updates about our progress</li>
              <li>Waitlist signup for our beta program</li>
              <li>Contact forms to request information</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              3. Use of Website
            </h3>
            <p className="text-slate-700 mb-2">
              You may use our Website for lawful purposes only. You agree NOT
              to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>
                Scrape, harvest, or collect information using automated tools
              </li>
              <li>
                Use the Website to spam or send unsolicited communications
              </li>
              <li>Impersonate another person or entity</li>
              <li>Interfere with or disrupt the Website or servers</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              4. Intellectual Property
            </h3>
            <p className="text-slate-700 mb-2">
              All content on this Website is owned by AiBuildrs or our
              licensors, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
              <li>Text, images, graphics, logos</li>
              <li>Blog posts and articles</li>
              <li>Website design and layout</li>
              <li>Software and code</li>
              <li>Trademarks and brand elements</li>
            </ul>

            <h4 className="font-semibold text-slate-700 mb-2">You may:</h4>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
              <li>View and read content for personal use</li>
              <li>Share links to our content on social media</li>
              <li>Quote brief excerpts with proper attribution</li>
            </ul>

            <h4 className="font-semibold text-slate-700 mb-2">You may NOT:</h4>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>
                Copy, reproduce, or republish entire articles or substantial
                portions
              </li>
              <li>
                Use our content for commercial purposes without permission
              </li>
              <li>Remove copyright notices or attributions</li>
              <li>Create derivative works from our content</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              5. User-Generated Content
            </h3>
            <p className="text-slate-700 mb-2">
              If you submit content to our Website (comments, feedback,
              testimonials):
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>
                You grant us a non-exclusive, royalty-free license to use,
                display, and distribute your content
              </li>
              <li>
                You represent that you own the content or have permission to
                submit it
              </li>
              <li>
                You agree not to submit confidential, offensive, or illegal
                content
              </li>
              <li>
                We reserve the right to remove any content at our discretion
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              6. Third-Party Links
            </h3>
            <p className="text-slate-700 mb-2">
              Our Website may contain links to third-party websites. We are not
              responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>The content or privacy practices of linked websites</li>
              <li>Any damages or losses from your use of third-party sites</li>
              <li>The accuracy or reliability of third-party information</li>
            </ul>
            <p className="text-slate-700">
              Visiting linked websites is at your own risk.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              7. Disclaimers
            </h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-slate-700 mb-3 font-semibold">
                THE WEBSITE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF
                ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
                <li>
                  Warranties of merchantability or fitness for a particular
                  purpose
                </li>
                <li>
                  Warranties that the Website will be uninterrupted or
                  error-free
                </li>
                <li>
                  Warranties that content is accurate, complete, or current
                </li>
                <li>
                  Warranties that the Website is free from viruses or harmful
                  components
                </li>
              </ul>
              <p className="text-slate-700">
                Information on our Website is for general informational purposes
                only and should not be considered professional advice. Results
                discussed in our blog posts are our own and may not be typical.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              8. Limitation of Liability
            </h3>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-slate-700 mb-3 font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIBUILDRS SHALL NOT BE
                LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
                <li>
                  Any indirect, incidental, consequential, or punitive damages
                </li>
                <li>
                  Loss of profits, revenue, data, or business opportunities
                </li>
                <li>
                  Damages resulting from your use or inability to use the
                  Website
                </li>
                <li>
                  Damages from errors, omissions, or inaccuracies in content
                </li>
                <li>Damages from unauthorized access to your information</li>
              </ul>
              <p className="text-slate-700">
                Our total liability shall not exceed $100 or the amount you paid
                us (if any), whichever is greater.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              9. Indemnification
            </h3>
            <p className="text-slate-700 mb-2">
              You agree to indemnify and hold harmless AiBuildrs, its officers,
              directors, employees, and agents from any claims, damages, losses,
              or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Your use of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Any content you submit to the Website</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              10. Modifications to Website and Terms
            </h3>
            <p className="text-slate-700 mb-2">We reserve the right to:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>Modify, suspend, or discontinue the Website at any time</li>
              <li>Change these Terms of Service at any time</li>
              <li>
                Restrict access to certain features or parts of the Website
              </li>
            </ul>
            <p className="text-slate-700">
              Material changes to these Terms will be posted on this page with
              an updated &quot;Last Updated&quot; date. Your continued use after
              changes constitutes acceptance.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              11. Termination
            </h3>
            <p className="text-slate-700 mb-2">
              We may terminate or suspend your access to the Website
              immediately, without notice, for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Actions that harm our business or reputation</li>
              <li>Any reason at our sole discretion</li>
            </ul>
            <p className="text-slate-700">
              Upon termination, your right to use the Website ceases
              immediately.
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              12. Governing Law and Disputes
            </h3>
            <p className="text-slate-700 mb-3">
              These Terms are governed by the laws of the United States and the
              state in which AiBuildrs is registered, without regard to conflict
              of law principles.
            </p>
            <p className="text-slate-700 mb-2">
              Any disputes arising from these Terms or your use of the Website
              shall be resolved through:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-3">
              <li>Informal negotiation first</li>
              <li>Binding arbitration if negotiation fails</li>
              <li>Small claims court for qualifying claims</li>
            </ul>
            <p className="text-slate-700">
              You agree to waive any right to a jury trial or class action
              lawsuit.
            </p>
          </div>

          {/* Section 13 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              13. Severability
            </h3>
            <p className="text-slate-700">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </div>

          {/* Section 14 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              14. Entire Agreement
            </h3>
            <p className="text-slate-700">
              These Terms of Service and our Privacy Policy constitute the
              entire agreement between you and AiBuildrs regarding use of the
              Website, superseding any prior agreements.
            </p>
          </div>

          {/* Section 15 */}
          <div id="contact">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              15. Contact Information
            </h3>
            <p className="text-slate-700 mb-2">
              If you have questions about these Terms or our Privacy Policy,
              contact us:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-slate-700">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:team@aibuildrs.com"
                  className="text-blue-600 hover:underline"
                >
                  team@aibuildrs.com
                </a>
              </p>
              <p className="text-slate-700">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://theaeoengine.com"
                  className="text-blue-600 hover:underline"
                >
                  theaeoengine.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Special Provisions Section */}
        <section
          id="special-provisions"
          className="bg-white rounded-lg shadow-md p-8 mb-8 border border-slate-200"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
            Special Provisions
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-slate-800 mb-2">
                BETA PROGRAM DISCLAIMER:
              </h3>
              <p className="text-slate-700">
                The AEO Engine is currently in beta. Information shared about
                our beta program, including results and methodologies, is
                subject to change. Beta program participation is governed by a
                separate Beta Program Agreement.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-bold text-slate-800 mb-2">
                CASE STUDIES AND RESULTS:
              </h3>
              <p className="text-slate-700">
                Results shared on our Website represent our own experiences or
                those of specific clients. Individual results will vary. No
                guarantees are made regarding specific outcomes, citation rates,
                or performance metrics.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-slate-800 mb-2">
                EMAIL COMMUNICATIONS:
              </h3>
              <p className="text-slate-700">
                By signing up for our waitlist or newsletter, you consent to
                receive emails from us. You can unsubscribe at any time by
                clicking the unsubscribe link in any email or contacting us
                directly.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-bold text-slate-800 mb-2">
                CALIFORNIA RESIDENTS:
              </h3>
              <p className="text-slate-700">
                California residents have specific rights under the California
                Consumer Privacy Act (CCPA). For CCPA-related requests, contact
                us at{" "}
                <a
                  href="mailto:team@aibuildrs.com"
                  className="text-blue-600 hover:underline"
                >
                  team@aibuildrs.com
                </a>{" "}
                with &quot;CCPA Request&quot;in the subject line.
              </p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-bold text-slate-800 mb-2">
                GDPR COMPLIANCE (EU RESIDENTS):
              </h3>
              <p className="text-slate-700">
                If you are in the European Union, you have rights under the
                General Data Protection Regulation (GDPR), including the right
                to access, rectify, erase, or port your data. Contact us at{" "}
                <a
                  href="mailto:team@aibuildrs.com"
                  className="text-blue-600 hover:underline"
                >
                  team@aibuildrs.com
                </a>{" "}
                with &quot;GDPR Request&quot; in the subject line.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
