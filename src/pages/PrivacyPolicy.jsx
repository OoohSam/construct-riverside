import React, { useEffect } from "react";

const contents = [
  ["introduction", "1. Introduction"],
  ["contact", "2. Who We Are and How to Contact Us"],
  ["scope", "3. Scope of This Policy"],
  ["definitions", "4. Definitions"],
  ["data-collected", "5. Personal Data We Collect"],
  ["sources", "6. Sources of Personal Data"],
  ["mandatory-information", "7. Whether Providing Information Is Mandatory"],
  ["lawful-bases", "8. Purposes and Lawful Bases for Processing"],
  ["enquiries-transactions", "9. Property Enquiries, Viewings and Transactions"],
  ["marketing", "10. Marketing Communications"],
  ["cookies", "11. Cookies and Similar Technologies"],
  ["analytics-advertising", "12. Analytics, Advertising and Online Tracking"],
  ["communications", "13. CRM, Telephone, WhatsApp and Social Media"],
  ["sharing", "14. Sharing Personal Data"],
  ["international-transfers", "15. International Transfers"],
  ["retention", "16. Retention of Personal Data"],
  ["security", "17. Security of Personal Data"],
  ["rights", "18. Your Rights"],
  ["profiling", "19. Profiling and Automated Decision-Making"],
  ["children", "20. Children’s Privacy"],
  ["breaches", "21. Personal Data Breaches"],
  ["third-party", "22. Third-Party Websites"],
  ["changes", "23. Changes to This Policy"],
  ["complaints", "24. Complaints and Contact Details"],
];

const lawfulBases = [
  {
    purpose: "Responding to enquiries and arranging viewings",
    processing:
      "Receiving and responding to requests, sending brochures or price information, calling or messaging at the contact details provided, and arranging appointments.",
    basis: "Steps requested before a contract; legitimate interests.",
  },
  {
    purpose: "Reservations and property sales",
    processing:
      "Identity verification, preparing reservations and agreements, administering payments, coordinating advocates, banks and mortgage providers, record keeping and after-sales support.",
    basis: "Contract; legal obligation; legitimate interests.",
  },
  {
    purpose: "Legal and regulatory compliance",
    processing:
      "Tax, accounting, land and conveyancing records, lawful government or court requests, fraud prevention, dispute handling and legal claims.",
    basis: "Legal obligation; legitimate interests.",
  },
  {
    purpose: "Website operation and security",
    processing:
      "Hosting, technical administration, security logging, preventing abuse, diagnosing faults and maintaining availability.",
    basis: "Legitimate interests; legal obligation where applicable.",
  },
  {
    purpose: "Analytics and service improvement",
    processing:
      "Measuring traffic and interactions, understanding aggregate use, testing and improving the Website and sales journey.",
    basis:
      "Consent for non-essential technologies; legitimate interests for strictly necessary security data.",
  },
  {
    purpose: "Direct marketing and advertising",
    processing:
      "Newsletters, promotional telephone calls, SMS, WhatsApp messages, tailored advertising, remarketing and audience creation.",
    basis:
      "Consent, or another express authorisation permitted by written law.",
  },
  {
    purpose: "Business administration",
    processing:
      "Internal reporting, audit, quality assurance, safeguarding Company assets and managing professional advisers and service providers.",
    basis: "Legitimate interests; legal obligation.",
  },
];

const cookieCategories = [
  {
    category: "Strictly necessary",
    purpose:
      "Operate core website functions, maintain security, remember privacy choices and prevent abuse.",
    consent: "Enabled where necessary and not used for advertising.",
  },
  {
    category: "Functional",
    purpose: "Remember optional preferences or improve convenience.",
    consent: "Enabled only where required consent has been obtained.",
  },
  {
    category: "Analytics",
    purpose:
      "Measure visits, engagement, traffic sources and website performance.",
    consent:
      "Disabled until consent, unless configured in a strictly necessary and legally permitted manner.",
  },
  {
    category: "Advertising",
    purpose:
      "Measure conversions, create audiences, limit or personalise advertising and support remarketing.",
    consent: "Disabled until consent.",
  },
];

const retentionPeriods = [
  {
    category: "General enquiries and CRM lead records",
    period: "Up to 24 months after the last meaningful interaction.",
    notes:
      "May be retained longer where the person remains actively engaged, requests continued contact, or a legal claim is reasonably anticipated.",
  },
  {
    category: "Marketing records and consent",
    period: "Until consent is withdrawn, followed by limited suppression records.",
    notes:
      "Inactive marketing profiles should be reviewed periodically and ordinarily removed or anonymised after 24 months without meaningful engagement.",
  },
  {
    category: "Viewing and appointment records",
    period: "Up to 24 months after the viewing or last interaction.",
    notes:
      "Longer where linked to a reservation, purchase, dispute or safety incident.",
  },
  {
    category: "Reservation, sale, payment and conveyancing records",
    period:
      "At least 7 years after completion, termination or the last relevant transaction event.",
    notes:
      "May be retained longer where required by tax, land, accounting, contractual or limitation-period requirements.",
  },
  {
    category: "Website analytics and advertising identifiers",
    period:
      "According to the configured platform setting, ordinarily no longer than 14 months for user-level analytics data and up to the provider’s stated cookie duration.",
    notes:
      "Aggregated or anonymised reports may be retained longer where individuals are no longer identifiable.",
  },
  {
    category: "Security and technical logs",
    period: "Ordinarily 6 to 12 months.",
    notes:
      "Longer where required to investigate abuse, fraud, security incidents or legal claims.",
  },
  {
    category: "Privacy requests and complaints",
    period: "Up to 6 years after closure.",
    notes: "Retained to demonstrate compliance and manage disputes.",
  },
];

const Section = ({ id, title, children }) => (
  <section id={id} style={styles.policySection}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    <div style={styles.sectionBody}>{children}</div>
  </section>
);

const Subheading = ({ children }) => <h3 style={styles.subheading}>{children}</h3>;

const BulletList = ({ items }) => (
  <ul style={styles.list}>
    {items.map((item, index) => (
      <li key={index} style={styles.listItem}>
        {item}
      </li>
    ))}
  </ul>
);

const PolicyTable = ({ columns, rows }) => (
  <div className="privacy-table-wrap" style={styles.tableWrap}>
    <table style={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} style={styles.tableHead}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key} style={styles.tableCell}>
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PrivacyPolicy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = "Privacy Policy | Riverside Azure";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main style={styles.page}>
      <header id="top" style={styles.hero}>
        <div style={styles.heroGlow} />
        <div className="container" style={styles.heroInner}>
          <p style={styles.eyebrow}>JNC Brothers & Company Limited</p>
          <h1 style={styles.heroTitle}>Privacy Policy</h1>
          <p style={styles.heroText}>
            Applicable to the Riverside Azure Apartments website, property sales,
            enquiries and related digital services.
          </p>

          <div style={styles.metaGrid}>
            <div style={styles.metaItem}>
              <span style={styles.metaLabel}>Effective Date</span>
              <strong style={styles.metaValue}>6 August 2026</strong>
            </div>
            <div style={styles.metaItem}>
              <span style={styles.metaLabel}>Last Updated</span>
              <strong style={styles.metaValue}>6 August 2026</strong>
            </div>
            <div style={styles.metaItem}>
              <span style={styles.metaLabel}>Document Owner</span>
              <strong style={styles.metaValue}>
                JNC Brothers & Company Limited
              </strong>
            </div>
          </div>
        </div>
      </header>

      <div className="container privacy-layout" style={styles.layout}>
        <aside className="privacy-sidebar" style={styles.sidebar}>
          <p style={styles.sidebarTitle}>Contents</p>
          <nav aria-label="Privacy policy contents" style={styles.contentsNav}>
            {contents.map(([id, label]) => (
              <a key={id} href={`#${id}`} style={styles.contentsLink}>
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <article style={styles.article}>
          <div style={styles.notice}>
            <strong style={styles.noticeTitle}>Important notice</strong>
            <p style={styles.noticeText}>
              This Policy explains how JNC Brothers & Company Limited collects and
              uses personal data through the Riverside Azure Apartments website,
              online advertising, enquiries, viewings, reservations and property
              sales. It is a privacy notice, not a consent form. Where consent is
              required, we will request it separately through a clear affirmative
              action.
            </p>
          </div>

          <Section id="introduction" title="1. Introduction">
            <p>
              JNC Brothers & Company Limited (“JNC Brothers”, “the Company”, “we”,
              “our” or “us”) respects the privacy of individuals who visit the
              Riverside Azure Apartments website, respond to our advertisements,
              submit property enquiries, request brochures or price lists, book
              viewings, reserve apartments or enter into property transactions with
              us.
            </p>
            <p>
              This Privacy Policy (“Policy”) explains what personal data we collect,
              why we collect it, how we use and disclose it, how long we retain it,
              the safeguards we apply and the rights available to you under Kenyan
              data protection law.
            </p>
            <p>
              We process personal data in accordance with the Constitution of Kenya,
              the Data Protection Act, 2019, the Data Protection (General)
              Regulations, the Data Protection (Registration of Data Controllers and
              Data Processors) Regulations and other applicable Kenyan laws and
              regulatory guidance.
            </p>
            <p>
              This Policy is intended to provide clear information before or at the
              time personal data is collected. Nothing in this Policy limits any
              right or remedy available to a data subject under applicable law.
            </p>
          </Section>

          <Section id="contact" title="2. Who We Are and How to Contact Us">
            <p>
              JNC Brothers & Company Limited is a company incorporated in Kenya and
              is the developer and promoter of Riverside Azure Apartments. For the
              processing described in this Policy, JNC Brothers generally acts as
              the data controller because it determines why and how personal data is
              processed.
            </p>

            <div className="privacy-contact-grid" style={styles.contactCard}>
              <div><span>Company</span><strong>JNC Brothers & Company Limited</strong></div>
              <div><span>Project</span><strong>Riverside Azure Apartments</strong></div>
              <div><span>Postal and Physical Address</span><strong>25 Riverside Drive, Nairobi, Kenya</strong></div>
              <div><span>Telephone</span><a href="tel:+254796529997">+254 796 529 997</a></div>
              <div><span>Email</span><a href="mailto:info@riversideazure.com">info@riversideazure.com</a></div>
              <div><span>Website</span><a href="https://www.riversideazure.co.ke">www.riversideazure.co.ke</a></div>
            </div>

            <p>
              Questions, requests and complaints relating to personal data should be
              sent to the email address above and marked “Privacy Request”. Where the
              Company designates a Data Protection Officer or privacy contact, that
              person may respond on behalf of the Company.
            </p>
          </Section>

          <Section id="scope" title="3. Scope of This Policy">
            <p>This Policy applies to personal data processed in connection with:</p>
            <BulletList
              items={[
                "our official website, landing pages and online enquiry forms;",
                "brochure, floor-plan, pricing and viewing requests;",
                "Google Ads, Meta Lead Ads and other digital advertising campaigns;",
                "communications by telephone, email, SMS, WhatsApp Business and social media;",
                "customer relationship management (“CRM”) and sales follow-up activities;",
                "property viewings, open days and project-site visits;",
                "apartment reservations, sale negotiations, payments and conveyancing support; and",
                "after-sales communications directly related to a purchase or reservation.",
              ]}
            />
            <p>
              This public website Policy does not comprehensively govern employee,
              recruitment, supplier, contractor or CCTV processing. Separate notices
              or internal policies may apply to those activities. Where a specific
              collection notice is displayed on a form, advertisement or platform,
              that notice supplements this Policy.
            </p>
          </Section>

          <Section id="definitions" title="4. Definitions">
            <div style={styles.definitionList}>
              <p><strong>Consent:</strong> an express, unequivocal, freely given, specific and informed indication of a person’s wishes, given by a statement or clear affirmative action.</p>
              <p><strong>Data controller:</strong> a person or organisation that determines the purpose and means of processing personal data.</p>
              <p><strong>Data processor:</strong> a person or organisation that processes personal data on behalf of a data controller.</p>
              <p><strong>Data subject:</strong> an identified or identifiable natural person to whom personal data relates.</p>
              <p><strong>Personal data:</strong> information relating to an identified or identifiable natural person, including online identifiers and location information where an individual can be identified directly or indirectly.</p>
              <p><strong>Processing:</strong> any operation performed on personal data, including collection, recording, storage, use, disclosure, transmission, restriction, erasure or destruction.</p>
              <p><strong>Profiling:</strong> automated processing used to evaluate or predict personal preferences, interests, behaviour, location, movements or other personal aspects.</p>
              <p><strong>Sensitive personal data:</strong> personal data designated as sensitive under Kenyan law, including data revealing property details and financial information, marital or family details, health information, biometric or genetic data, race or ethnic origin, beliefs, sex or sexual orientation.</p>
              <p><strong>Website:</strong> www.riversideazure.co.ke and any official Riverside Azure landing page or microsite operated by or for JNC Brothers.</p>
            </div>
          </Section>

          <Section id="data-collected" title="5. Personal Data We Collect">
            <Subheading>5.1 Information you provide directly</Subheading>
            <BulletList
              items={[
                "identity and contact details, such as your name, telephone number, email address, nationality, country or county of residence and preferred contact method;",
                "property enquiry details, such as preferred apartment type, unit, floor, budget, intended use, purchase timeframe, payment preference and mortgage or financing interest;",
                "communications and records of enquiries, including information contained in emails, telephone calls, WhatsApp messages, social-media messages and form submissions;",
                "viewing and appointment details, including preferred dates, attendance information and requests made during a viewing;",
                "reservation and transaction information, including identification documents, postal or physical address, reservation details, agreements, payment records, invoices, receipts, source-of-funds or due-diligence information where lawfully required, and communications with advocates or financial institutions; and",
                "marketing preferences and records of consent, withdrawal or opt-out requests.",
              ]}
            />
            <p>
              Please do not submit sensitive personal data through a general website
              enquiry form unless we specifically request it for a lawful purpose.
              Identification and transaction documents should be provided only
              through an authorised channel communicated by the Company or its
              appointed advocates.
            </p>

            <Subheading>5.2 Information collected automatically</Subheading>
            <p>When you use the Website, we and our approved technology providers may collect:</p>
            <BulletList
              items={[
                "Internet Protocol (IP) address and approximate location derived from it;",
                "browser type, operating system, device type, language and device identifiers;",
                "pages viewed, links clicked, referral source, session duration and interaction events;",
                "advertising identifiers and conversion information;",
                "cookie choices and consent records; and",
                "security, diagnostic and fraud-prevention information.",
              ]}
            />
            <p>
              We do not intentionally transmit names, email addresses, telephone
              numbers or other directly identifying form-field content to website
              analytics platforms.
            </p>
          </Section>

          <Section id="sources" title="6. Sources of Personal Data">
            <p>We may obtain personal data:</p>
            <BulletList
              items={[
                "directly from you when you use the Website, complete a form, contact us, attend a viewing or transact with us;",
                "from an estate agent, property consultant, referral partner or other person authorised by you;",
                "from Meta, Google or another advertising platform when you submit a lead form or interact with an advertisement, subject to that platform’s terms and privacy notice;",
                "from advocates, banks, mortgage providers, payment service providers or government and regulatory bodies where necessary for a property transaction or legal compliance;",
                "from publicly available sources where collection and use are lawful; and",
                "automatically from cookies, pixels, tags, server logs and similar technologies.",
              ]}
            />
            <p>
              Where personal data is collected indirectly, we will provide
              appropriate notice within the period required by law unless an
              applicable exception applies.
            </p>
          </Section>

          <Section id="mandatory-information" title="7. Whether Providing Information Is Mandatory">
            <p>
              Providing information through a general property enquiry form is
              voluntary. However, if you do not provide a name and a working contact
              method, we may be unable to respond, send requested materials or
              arrange a viewing.
            </p>
            <p>
              Certain information becomes mandatory when you reserve or purchase an
              apartment, make or receive payments, request financing support or where
              information is required for identity verification, taxation,
              accounting, conveyancing, anti-fraud measures, court proceedings or
              another legal obligation. If mandatory information is not provided, we
              may be unable to enter into or perform the transaction or comply with
              the requested service.
            </p>
          </Section>

          <Section id="lawful-bases" title="8. Purposes and Lawful Bases for Processing">
            <p>
              We establish a lawful basis before processing personal data. The
              principal purposes and bases relevant to this Website and our property
              sales activities are set out below.
            </p>
            <PolicyTable
              columns={[
                { key: "purpose", label: "Purpose" },
                { key: "processing", label: "Examples of processing" },
                { key: "basis", label: "Primary lawful basis" },
              ]}
              rows={lawfulBases}
            />
            <p>
              Where we rely on legitimate interests, we consider whether the
              processing is necessary and balance our interests against your rights,
              freedoms and reasonable expectations. We will not rely on legitimate
              interests where the impact on you is unwarranted.
            </p>
            <p>
              Where we wish to use personal data for a new purpose that is not
              compatible with the original purpose, we will identify another lawful
              basis and, where required, obtain fresh consent before the new
              processing begins.
            </p>
          </Section>

          <Section id="enquiries-transactions" title="9. Property Enquiries, Viewings and Transactions">
            <Subheading>9.1 Enquiries</Subheading>
            <p>
              When you submit an enquiry, we will use the information you provide to
              respond to the request, explain the Riverside Azure Apartments
              offering, send requested materials, recommend suitable units and
              arrange follow-up communications reasonably connected to the enquiry.
            </p>
            <p>
              Submitting an enquiry does not, by itself, constitute consent to
              receive unrelated or indefinite promotional messages. Marketing
              consent is handled separately as described in section 10.
            </p>

            <Subheading>9.2 Viewings and appointments</Subheading>
            <p>
              We use appointment details to schedule and administer viewings,
              confirm attendance, understand your property requirements and follow
              up regarding the viewing. We may record factual notes in our CRM so
              that authorised sales personnel can provide consistent service.
            </p>

            <Subheading>9.3 Reservations and sales</Subheading>
            <p>
              Where you decide to reserve or purchase an apartment, additional
              identity, financial, payment and legal information may be required to
              prepare documents, verify instructions, administer the transaction,
              comply with legal obligations and protect the parties against fraud.
              Transaction information may be shared with appointed advocates, banks,
              payment providers, regulators and other recipients described in
              section 14 where necessary and lawful.
            </p>
          </Section>

          <Section id="marketing" title="10. Marketing Communications">
            <p>
              We may send promotional information about Riverside Azure Apartments
              or other JNC Brothers property developments by email, telephone, SMS,
              WhatsApp or online advertising only where we have obtained the
              required consent or are otherwise expressly authorised by written law.
            </p>
            <p>
              Consent for direct marketing will be requested separately from an
              ordinary property enquiry and will not be inferred from silence,
              inactivity, a pre-ticked box or the mere use of the Website. You may
              choose the channels through which you wish to receive marketing where
              preference options are available.
            </p>
            <p>
              Every direct marketing communication will identify the sender and
              provide a visible, simple and accessible method to opt out without
              charge or with no more than a nominal communication cost. You may also
              opt out at any time by contacting info@riversideazure.com or replying
              with the opt-out instruction stated in the relevant message.
            </p>
            <p>
              Once we receive a valid direct-marketing objection or opt-out request,
              we will stop using the affected personal data for that purpose within
              the period prescribed by law. We may retain limited suppression
              information to ensure that the opt-out continues to be respected.
            </p>
            <p>
              Opting out of marketing will not prevent us from sending service,
              transaction, security, legal or customer-support communications that
              are necessary and are not promotional.
            </p>
          </Section>

          <Section id="cookies" title="11. Cookies and Similar Technologies">
            <Subheading>11.1 What cookies are</Subheading>
            <p>
              Cookies are small text files stored on a device when a website is
              visited. Similar technologies include pixels, tags, local storage,
              software development kits and server-side event tools. They may
              recognise a browser or device, remember preferences, measure
              interactions, support security or assist advertising.
            </p>

            <Subheading>11.2 Categories used on the Website</Subheading>
            <PolicyTable
              columns={[
                { key: "category", label: "Category" },
                { key: "purpose", label: "Purpose" },
                { key: "consent", label: "Consent position" },
              ]}
              rows={cookieCategories}
            />

            <Subheading>11.3 Your cookie choices</Subheading>
            <p>
              When optional technologies are used, the Website will display a
              consent tool allowing users to accept all optional technologies,
              reject non-essential technologies or manage categories individually.
              Withholding consent must not prevent access to the basic Website,
              although some optional features may not operate.
            </p>
            <p>
              You may change or withdraw cookie consent through the privacy or
              cookie-settings control made available on the Website. Browser controls
              may also block or delete cookies, but browser settings do not replace
              the consent choices provided on the Website.
            </p>
            <p>
              The consent tool or cookie information panel will show the current
              provider, purpose and duration of each optional cookie or similar
              technology because these details may change when website services are
              updated.
            </p>
          </Section>

          <Section id="analytics-advertising" title="12. Analytics, Advertising and Online Tracking">
            <Subheading>12.1 Google Tag Manager</Subheading>
            <p>
              We use Google Tag Manager to manage and deploy website tags. Google
              Tag Manager is a tag-management tool; the technologies loaded through
              it are governed by their own purposes and the user’s consent choices.
              Optional analytics or advertising tags must not be activated before
              the applicable consent is obtained.
            </p>

            <Subheading>12.2 Google Analytics</Subheading>
            <p>
              Where enabled with consent, Google Analytics may process online
              identifiers, IP-derived approximate location, device and browser
              information, pages viewed, referral sources, session information and
              interaction events. We use this information to understand Website
              performance and improve the customer journey.
            </p>
            <p>
              We configure analytics events not to intentionally include names,
              email addresses, telephone numbers or other directly identifying
              form-field content. Analytics data may be aggregated or pseudonymised
              but can still constitute personal data where it relates to a
              recognisable device or user.
            </p>

            <Subheading>12.3 Google Ads</Subheading>
            <p>
              Where enabled with consent, Google Ads conversion tracking and
              remarketing technologies may record whether an advertisement led to a
              Website interaction or enquiry, measure campaign effectiveness and
              help present Riverside Azure advertisements to people who previously
              interacted with the Website or related content.
            </p>

            <Subheading>12.4 Meta Pixel and Meta Lead Ads</Subheading>
            <p>
              Where enabled with consent, Meta Pixel may measure advertisement
              performance, record Website interactions, create or refine advertising
              audiences and support delivery of relevant advertisements across
              Facebook, Instagram and related Meta services. When you complete a Meta
              Lead Ad, Meta provides the information entered in that form to JNC
              Brothers for the stated enquiry and marketing purposes.
            </p>
            <p>
              Google and Meta process certain information under their own terms and
              privacy notices and may act as independent or joint controllers for
              parts of their advertising services. We do not gain access to private
              messages, passwords or the private contents of a person’s Google,
              Facebook or Instagram account merely because a tag is used.
            </p>
          </Section>

          <Section id="communications" title="13. CRM, Telephone, WhatsApp and Social Media">
            <p>
              Enquiries may be recorded in an authorised CRM system so that the
              Company can assign leads, maintain communication history, avoid
              duplicate contact, monitor response quality and administer the sales
              process. Access should be limited to personnel and service providers
              who require it for an authorised purpose.
            </p>
            <p>
              Telephone calls and WhatsApp communications may reveal information
              such as your profile name, phone number, message content, delivery
              status and communication timestamps. Those services are also governed
              by the platform provider’s privacy terms. We will use the information
              for the purpose of the communication and any additional purpose for
              which a valid lawful basis exists.
            </p>
            <p>
              When you interact publicly with our social-media pages, comments,
              reactions, usernames and other information you choose to make public
              may be visible to JNC Brothers, the platform and other users. Private
              messages are used to respond to enquiries and administer the
              relationship.
            </p>
          </Section>

          <Section id="sharing" title="14. Sharing Personal Data">
            <p>
              We do not sell or rent personal data to third parties for their
              independent marketing. We may disclose personal data, only where
              necessary and lawful, to:
            </p>
            <BulletList
              items={[
                "authorised JNC Brothers employees and representatives;",
                "estate agents, property consultants and sales partners acting under appropriate instructions;",
                "appointed advocates, auditors, accountants and other professional advisers;",
                "banks, mortgage providers, payment service providers and financial institutions involved in a transaction;",
                "website hosting, IT support, cloud, email, CRM, analytics and advertising service providers;",
                "contractors or project service providers where disclosure is necessary to deliver an authorised service;",
                "government departments, regulators, the Office of the Data Protection Commissioner, law-enforcement agencies, courts and tribunals where disclosure is required or permitted by law;",
                "a prospective purchaser, investor or successor in connection with a lawful corporate transaction, subject to confidentiality and data-protection safeguards; and",
                "any other recipient where you have consented or directed us to make the disclosure.",
              ]}
            />
            <p>
              Where a service provider processes personal data on our behalf, we
              will select providers offering appropriate safeguards and use
              contractual terms requiring them to process the data only on authorised
              instructions, protect confidentiality and implement appropriate
              security measures.
            </p>
          </Section>

          <Section id="international-transfers" title="15. International Transfers">
            <p>
              Some technology, hosting, CRM, email, analytics, advertising or
              communications providers may store or access personal data outside
              Kenya. Accordingly, personal data may be processed in Kenya and in
              other countries in which our approved providers operate.
            </p>
            <p>
              Before transferring personal data outside Kenya, we will rely on a
              lawful transfer ground and take reasonable steps to establish
              appropriate safeguards, which may include contractual protections, a
              recipient located in a jurisdiction with commensurate data-protection
              laws, technical and organisational safeguards, consent where legally
              valid, or another transfer mechanism permitted by Kenyan law.
            </p>
            <p>
              Sensitive personal data will not be transferred outside Kenya unless
              the additional conditions required by law, including appropriate
              safeguards and consent where applicable, have been satisfied.
            </p>
            <p>
              You may contact us for further information about the relevant
              categories of overseas recipients and safeguards, subject to legal and
              confidentiality limitations.
            </p>
          </Section>

          <Section id="retention" title="16. Retention of Personal Data">
            <p>
              We retain personal data only for as long as reasonably necessary for
              the purpose for which it was collected, to comply with law, administer
              contracts, resolve disputes, prevent fraud and establish, exercise or
              defend legal claims. The periods below are the Company’s intended
              website and customer-data retention framework and may be extended where
              lawfully necessary.
            </p>
            <PolicyTable
              columns={[
                { key: "category", label: "Data category" },
                { key: "period", label: "Normal retention period" },
                { key: "notes", label: "Notes" },
              ]}
              rows={retentionPeriods}
            />
            <p>
              At the end of the applicable period, personal data will be securely
              deleted, destroyed, anonymised or pseudonymised unless continued
              retention is required or permitted by law. We periodically review
              whether continued storage remains necessary.
            </p>
          </Section>

          <Section id="security" title="17. Security of Personal Data">
            <p>
              We implement technical, organisational and physical measures designed
              to protect personal data against accidental or unlawful destruction,
              loss, alteration, unauthorised disclosure, unauthorised access and
              other unlawful processing. Depending on the systems and risks involved,
              measures may include:
            </p>
            <BulletList
              items={[
                "role-based access controls and access limited to business need;",
                "password controls, multi-factor authentication where available and account-management procedures;",
                "encryption in transit and at rest where appropriate;",
                "firewalls, anti-malware protections, security monitoring, backups and software updates;",
                "secure hosting and vendor due diligence;",
                "confidentiality obligations, staff awareness and data-protection training;",
                "data-processing agreements and security obligations for service providers;",
                "physical access controls for offices and records; and",
                "incident-identification, escalation and response procedures.",
              ]}
            />
            <p>
              No electronic transmission or storage system is guaranteed to be
              completely secure. You should use authorised communication channels,
              protect your devices and avoid sending transaction documents to
              unverified contacts. If you suspect that a communication claiming to be
              from JNC Brothers is fraudulent, contact us using the details in
              section 2.
            </p>
          </Section>

          <Section id="rights" title="18. Your Rights">
            <p>
              Subject to applicable law and lawful exemptions, you may have the right
              to:
            </p>
            <BulletList
              items={[
                "be informed about the collection and use of your personal data;",
                "ask whether we process your personal data and request access to it;",
                "request correction of inaccurate, outdated, incomplete or misleading data;",
                "request erasure or destruction where the data is no longer authorised, necessary or lawfully retained;",
                "request restriction of processing in circumstances permitted by law;",
                "object to processing, including an absolute right to object to direct marketing and related profiling;",
                "receive personal data you provided in a structured, commonly used and machine-readable format and request transmission to another controller where technically feasible;",
                "withdraw consent at any time where consent is the lawful basis, without affecting processing carried out before withdrawal;",
                "not be subject to a decision based solely on automated processing that produces legal or similarly significant effects, subject to lawful exceptions; and",
                "lodge a complaint with the Office of the Data Protection Commissioner.",
              ]}
            />
            <p>
              To exercise a right, contact info@riversideazure.com and state the
              right you wish to exercise. We may request proportionate information to
              verify your identity and authority before disclosing or changing
              personal data. We will respond within the period prescribed by
              applicable law and ordinarily without charge, except where a reasonable
              charge is expressly permitted.
            </p>
            <p>
              A right may be limited where compliance would adversely affect another
              person’s rights, prejudice an investigation, conflict with a legal
              obligation, undermine legal claims or fall within another statutory
              exemption. Where a request is declined, we will provide the legally
              required explanation and complaint information.
            </p>
          </Section>

          <Section id="profiling" title="19. Profiling and Automated Decision-Making">
            <p>
              Advertising and analytics platforms may use online identifiers and
              interaction information to create audience segments, measure likely
              interests or display advertisements based on previous interactions.
              This constitutes profiling to the extent personal data is used to
              evaluate or predict preferences, interests, behaviour, location or
              movements.
            </p>
            <p>
              You may prevent or withdraw consent for advertising profiling through
              the Website’s cookie settings and may object to direct marketing by
              contacting us. We do not knowingly use sensitive personal data for
              advertising audiences.
            </p>
            <p>
              JNC Brothers does not intend to make decisions about eligibility to
              purchase a property, contractual rights or other matters producing
              legal or similarly significant effects solely through automated
              processing. Where such processing is introduced, we will provide the
              notice and safeguards required by law, including an opportunity to
              request human reconsideration where applicable.
            </p>
          </Section>

          <Section id="children" title="20. Children’s Privacy">
            <p>
              The Website and Riverside Azure property sales are directed primarily
              to adults who can enter into legally binding property transactions. We
              do not knowingly use children’s personal data for direct marketing or
              related profiling.
            </p>
            <p>
              Where information relating to a child is genuinely required for a
              lawful property transaction or family arrangement, it will be processed
              only where appropriate authority, consent and safeguards are in place.
              If we become aware that a child’s personal data was collected without
              lawful authority, we will take reasonable steps to delete or otherwise
              lawfully address the information.
            </p>
          </Section>

          <Section id="breaches" title="21. Personal Data Breaches">
            <p>
              We maintain procedures to identify, assess, contain, investigate and
              document actual or suspected personal data breaches. Where unauthorised
              access or acquisition creates a real risk of harm, we will notify the
              Office of the Data Protection Commissioner without delay and within
              seventy-two hours of becoming aware of the breach, unless a lawful
              exception applies. Where notification is delayed, reasons will be
              documented as required by law.
            </p>
            <p>
              Where required, we will communicate the breach to affected data
              subjects within a reasonably practicable period and provide information
              intended to help them take protective measures. A data processor acting
              for us is required to notify us without delay and, where reasonably
              practicable, within forty-eight hours after becoming aware of a
              relevant breach.
            </p>
            <p>
              We maintain breach records describing the facts, effects and remedial
              action taken.
            </p>
          </Section>

          <Section id="third-party" title="22. Third-Party Websites">
            <p>
              The Website, advertisements and communications may link to websites,
              applications or services operated by third parties. JNC Brothers does
              not control those services and this Policy does not govern their
              independent processing. Review the relevant third party’s privacy
              notice before submitting personal data or changing privacy settings on
              that service.
            </p>
          </Section>

          <Section id="changes" title="23. Changes to This Policy">
            <p>
              We may amend this Policy to reflect changes in law, regulatory
              guidance, website technology, service providers, business operations or
              data-processing practices. The current version will be published on
              the Website with the effective date and last-updated date.
            </p>
            <p>
              Where a material change affects an existing consent or materially
              changes how personal data is used, we will provide an appropriate
              notice and obtain fresh consent where required. Continued use of the
              Website does not, by itself, amount to consent to a new processing
              purpose that legally requires consent.
            </p>
          </Section>

          <Section id="complaints" title="24. Complaints and Contact Details">
            <p>
              We encourage you to contact JNC Brothers first if you have a concern so
              that we can investigate and respond promptly. Privacy requests and
              complaints should be directed to:
            </p>

            <div style={styles.finalContact}>
              <strong>JNC Brothers & Company Limited</strong>
              <span>25 Riverside Drive, Nairobi, Kenya</span>
              <a href="tel:+254796529997">+254 796 529 997</a>
              <a href="mailto:info@riversideazure.com">info@riversideazure.com</a>
              <a href="https://www.riversideazure.co.ke">www.riversideazure.co.ke</a>
            </div>

            <p>
              If you remain dissatisfied, you may lodge a complaint with the Office
              of the Data Protection Commissioner (“ODPC”) in accordance with the
              Data Protection Act and the ODPC’s applicable complaints procedures.
              Current ODPC contact and complaint information is available through the
              official ODPC website at{" "}
              <a
                href="https://www.odpc.go.ke"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.inlineLink}
              >
                www.odpc.go.ke
              </a>
              .
            </p>
            <p>
              Nothing in this Policy limits any statutory right, remedy or
              entitlement available under Kenyan law.
            </p>
          </Section>

          <a href="#top" style={styles.backToTop} aria-label="Back to the top of the privacy policy">
            Back to top ↑
          </a>
        </article>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .privacy-layout {
          box-sizing: border-box;
        }

        .privacy-sidebar a:hover {
          color: var(--gold-accent) !important;
          border-left-color: var(--gold-accent) !important;
          background: rgba(243, 193, 66, 0.06);
        }

        .privacy-sidebar::-webkit-scrollbar {
          width: 7px;
        }

        .privacy-sidebar::-webkit-scrollbar-thumb {
          background: rgba(243, 193, 66, 0.28);
        }

        .privacy-layout p {
          margin-top: 0;
          margin-bottom: 16px;
        }

        .privacy-layout p:last-child {
          margin-bottom: 0;
        }

        .privacy-layout ul li::marker {
          color: var(--gold-accent);
        }

        .privacy-layout a {
          color: var(--gold-accent);
        }

        .privacy-layout article > section strong {
          color: rgba(247, 244, 236, 0.94);
        }

        .privacy-contact-grid > div {
          display: grid;
          grid-template-columns: minmax(170px, 0.7fr) minmax(0, 1.3fr);
          gap: 18px;
          padding: 14px 16px;
          background: rgba(1, 18, 32, 0.64);
        }

        .privacy-contact-grid > div span {
          color: rgba(247, 244, 236, 0.58);
          font-size: 0.84rem;
        }

        .privacy-table-wrap::-webkit-scrollbar {
          height: 8px;
        }

        .privacy-table-wrap::-webkit-scrollbar-thumb {
          background: rgba(243, 193, 66, 0.35);
        }

        @media (max-width: 980px) {
          .privacy-layout {
            grid-template-columns: 1fr !important;
          }

          .privacy-sidebar {
            position: static !important;
            max-height: none !important;
          }

          .privacy-sidebar nav {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .privacy-contact-grid > div {
            grid-template-columns: 1fr;
            gap: 4px;
          }
          .privacy-sidebar nav {
            grid-template-columns: 1fr;
          }

          .privacy-table-wrap table {
            min-width: 760px;
          }
        }
      `}</style>
    </main>
  );
};

export default PrivacyPolicy;

const styles = {
  page: {
    minHeight: "100vh",
    color: "var(--text-main)",
    background:
      "linear-gradient(180deg, #04395e 0%, #031b2f 24%, #021827 100%)",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(145px, 18vw, 210px) 24px clamp(72px, 10vw, 110px)",
    borderBottom: "1px solid rgba(243,193,66,0.14)",
    background:
      "radial-gradient(circle at 50% 20%, rgba(21,112,168,0.34), transparent 44%), linear-gradient(180deg, rgba(2,17,31,0.24), rgba(1,12,22,0.82))",
  },
  heroGlow: {
    position: "absolute",
    width: "520px",
    height: "520px",
    borderRadius: "50%",
    top: "-300px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(243,193,66,0.08)",
    filter: "blur(50px)",
    pointerEvents: "none",
  },
  heroInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1060px",
    margin: "0 auto",
    textAlign: "center",
  },
  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontSize: "0.8rem",
    fontWeight: 800,
    marginBottom: "16px",
  },
  heroTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2.7rem, 8vw, 5rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.04em",
    marginBottom: "20px",
  },
  heroText: {
    maxWidth: "760px",
    margin: "0 auto 34px",
    color: "rgba(247,244,236,0.82)",
    fontSize: "clamp(1rem, 2.5vw, 1.13rem)",
    lineHeight: 1.8,
  },
  metaGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "12px",
    maxWidth: "880px",
    margin: "0 auto",
  },
  metaItem: {
    display: "grid",
    gap: "7px",
    padding: "16px 18px",
    background: "rgba(1,18,32,0.48)",
    border: "1px solid rgba(243,193,66,0.14)",
  },
  metaLabel: {
    color: "rgba(247,244,236,0.58)",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.72rem",
  },
  metaValue: {
    color: "rgba(247,244,236,0.94)",
    fontSize: "0.94rem",
  },
  layout: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "280px minmax(0, 1fr)",
    gap: "clamp(28px, 5vw, 58px)",
    padding: "clamp(54px, 8vw, 90px) 24px 110px",
    alignItems: "start",
  },
  sidebar: {
    position: "sticky",
    top: "100px",
    maxHeight: "calc(100vh - 125px)",
    overflowY: "auto",
    padding: "22px",
    border: "1px solid rgba(243,193,66,0.14)",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.6), rgba(2,17,31,0.78))",
    boxShadow: "0 18px 44px rgba(0,0,0,0.2)",
  },
  sidebarTitle: {
    margin: "0 0 14px",
    color: "var(--gold-accent)",
    fontFamily: "var(--font-serif)",
    fontSize: "1.25rem",
  },
  contentsNav: {
    display: "grid",
    gap: "3px",
  },
  contentsLink: {
    display: "block",
    padding: "8px 10px",
    borderLeft: "2px solid rgba(243,193,66,0.14)",
    color: "rgba(247,244,236,0.68)",
    textDecoration: "none",
    fontSize: "0.82rem",
    lineHeight: 1.45,
    transition: "all 0.2s ease",
  },
  article: {
    minWidth: 0,
  },
  notice: {
    marginBottom: "30px",
    padding: "22px 24px",
    border: "1px solid rgba(243,193,66,0.28)",
    borderLeft: "4px solid var(--gold-accent)",
    background: "rgba(243,193,66,0.07)",
  },
  noticeTitle: {
    display: "block",
    color: "var(--gold-accent)",
    marginBottom: "8px",
    fontSize: "0.98rem",
  },
  noticeText: {
    margin: 0,
    color: "rgba(247,244,236,0.8)",
    lineHeight: 1.8,
  },
  policySection: {
    scrollMarginTop: "110px",
    marginBottom: "24px",
    padding: "clamp(24px, 4vw, 38px)",
    border: "1px solid rgba(243,193,66,0.12)",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.5), rgba(2,17,31,0.72))",
    boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
  },
  sectionTitle: {
    margin: "0 0 20px",
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(1.55rem, 4vw, 2.2rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.025em",
  },
  sectionBody: {
    color: "rgba(247,244,236,0.78)",
    lineHeight: 1.86,
    fontSize: "0.98rem",
  },
  subheading: {
    margin: "26px 0 10px",
    color: "var(--gold-accent)",
    fontFamily: "var(--font-serif)",
    fontSize: "1.2rem",
    lineHeight: 1.4,
  },
  list: {
    margin: "12px 0 20px",
    paddingLeft: "22px",
  },
  listItem: {
    marginBottom: "9px",
    paddingLeft: "4px",
  },
  definitionList: {
    display: "grid",
    gap: "12px",
  },
  tableWrap: {
    width: "100%",
    overflowX: "auto",
    margin: "22px 0",
    border: "1px solid rgba(243,193,66,0.16)",
    background: "rgba(1,18,32,0.38)",
  },
  table: {
    width: "100%",
    minWidth: "820px",
    borderCollapse: "collapse",
  },
  tableHead: {
    padding: "15px",
    textAlign: "left",
    verticalAlign: "top",
    color: "var(--gold-accent)",
    background: "rgba(243,193,66,0.12)",
    borderBottom: "1px solid rgba(243,193,66,0.22)",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    lineHeight: 1.5,
  },
  tableCell: {
    padding: "15px",
    verticalAlign: "top",
    color: "rgba(247,244,236,0.76)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    lineHeight: 1.7,
    fontSize: "0.9rem",
  },
  contactCard: {
    display: "grid",
    gap: "1px",
    margin: "22px 0",
    border: "1px solid rgba(243,193,66,0.15)",
    background: "rgba(243,193,66,0.12)",
  },
  finalContact: {
    display: "grid",
    gap: "7px",
    margin: "22px 0",
    padding: "22px",
    border: "1px solid rgba(243,193,66,0.18)",
    background: "rgba(1,18,32,0.42)",
  },
  inlineLink: {
    color: "var(--gold-accent)",
  },
  backToTop: {
    display: "inline-flex",
    marginTop: "12px",
    color: "var(--gold-accent)",
    textDecoration: "none",
    borderBottom: "1px solid rgba(243,193,66,0.4)",
    paddingBottom: "3px",
    fontWeight: 700,
  },
};