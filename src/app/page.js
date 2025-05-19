import VantaHalo from "@/components/halo";
import styles from "./page.module.css";

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <VantaHalo />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Your AI Powered <br></br>Client Retention Platform. Built for{" "}
          <span className={styles["gradient-text"]}>High-Volume</span>
          <br></br> Law Firms.
        </h1>
        <p className={styles.heroDescription}>
          Improve client satisfaction, reduce churn, and grow your firm<br></br>
          without expanding your team.
        </p>
        <div className={styles.heroActions}>
          <button className={styles.button}>
            <a href="/demo">Request a Demo</a>
          </button>
          <p className={styles.heroSubtext}>
            Used by leading mass tort firms handling <b>Camp Lejeune</b>,{" "}
            <b>3M</b>, <b>Roundup</b>, and more
          </p>
        </div>
      </div>
    </div>
  );
}

function ProblemStatementVisual() {
  return (
    <div className={styles.problemStatementVisual}>Insert Visual Here</div>
  );
}

function ProblemStatementCard({ title, children }) {
  return (
    <div className={styles.problemStatementCard}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDescription}>{children}</p>
    </div>
  );
}

function ProblemStatementSection() {
  return (
    <div className={`${styles.problemStatementSection} ${styles.section}`}>
      <h3>Mass Tort Client Management Challenges</h3>
      <p>Mass tort litigation creates unique challenges for law firms</p>
      <div className={styles.problemStatementCards}>
        <ProblemStatementCard title="Scale">
          Managing thousands of similar cases while providing personalized
          attention.
        </ProblemStatementCard>
        <ProblemStatementCard title="Time">
          Lengthy proceedings<br></br> (3-7+&nbsp;years) increase client anxiety
          and attrition risk.
        </ProblemStatementCard>
        <ProblemStatementCard title="Resources">
          Teams overwhelmed by routine client communications instead of
          advancing cases.
        </ProblemStatementCard>
        <ProblemStatementCard title="Retention">
          Up to 40% of mass tort clients change or cancel legal representation
          during litigation
        </ProblemStatementCard>
      </div>
      <ProblemStatementVisual />
    </div>
  );
}

function SolutionSubSection({ title, children }) {
  return (
    <>
      <ProblemStatementVisual />
      <div className={styles.solutionSubSectionContent}>
        <h4 className={styles.subSectionTitle}>{title}</h4>
        {children}
      </div>
    </>
  );
}

function SolutionSection() {
  return (
    <div className={`${styles.solutionSection} ${styles.section}`}>
      <h3>
        The Solution for Mass Tort Firms - <br></br> Provide{" "}
        <span className={styles["gradient-text"]}>
          {" "}
          Higher Client Satisfaction
        </span>{" "}
        With Less Work
      </h3>
      <div className={styles.solutionCards}>
        <SolutionSubSection title="Human-like Voice AI">
          <ul>
            <li>
              Provides consistent, personalized client updates without staff
              intervention
            </li>
            <li>Handles routine inquiries 24/7 with case-specific knowledge</li>
            <li>
              Reduces staff communication workload by 12-15 hours per week per
              staff member
            </li>
          </ul>
        </SolutionSubSection>
        <SolutionSubSection title="Sentiment Analysis Technology">
          <ul>
            <li>
              Identifies early warning signs of client dissatisfaction through
              analysis of communication patterns
            </li>
            <li>
              Flags at-risk clients before they consider changing representation
            </li>
            <li>
              Enables proactive intervention, reducing attrition by 27-42%
            </li>
          </ul>
        </SolutionSubSection>
        <SolutionSubSection title="Dedicated Mobile Client Portal">
          <ul>
            <li>Gives clients 24/7 access to case information</li>
            <li>Reduces inbound inquiry calls by over 40%</li>
            <li>Achieves 70%+ adoption rates across various practice areas</li>
          </ul>
        </SolutionSubSection>
      </div>
      <div className={styles.solutionButton}>
        <p>Interested in knowing more about what sets us apart?</p>
        <button className={styles.button}>
          <a href="/solutions">Discover How Kayse Works</a>
        </button>
      </div>
    </div>
  );
}

function MessageBubble({ children }) {
  return <div className={styles.messageBubble}>{children}</div>;
}

function MessageBubbleKayse({ children }) {
  return <div className={styles.messageBubbleKayse}>{children}</div>;
}

function Phone({ children }) {
  return <div className={styles.phone}>{children}</div>;
}

function ObjectionSection() {
  return (
    <div className={`${styles.objectionSection} ${styles.section}`}>
      <h3>The Difference Between Communication and Connection</h3>
      <div className={styles.objectionCards}>
        <div className={styles.objectionCard}>
          <h4>Kayse Goes Beyond Calls, Texts & Emails</h4>
          <Phone>
            <MessageBubble>
              I already call, text, and email my clients
            </MessageBubble>
            <MessageBubbleKayse>
              The challenge isn't whether you're communicating, but whether your
              team can maintain consistent, personalized outreach when handling
              hundreds or thousands of clients simultaneously over extended
              timelines.
            </MessageBubbleKayse>
            <MessageBubbleKayse>
              Our AI-powered retention platform doesn't replace your existing
              channels—it amplifies them. Rather than your staff members
              spending 12-15 hours per week each on routine updates, our
              human-like voice AI handles these automatically, freeing your team
              for higher-value tasks.
            </MessageBubbleKayse>
          </Phone>
        </div>
        <div className={styles.objectionCard}>
          <h4>Kayse Goes Beyond Salesforce</h4>
          <Phone>
            <MessageBubble>I already have Salesforce</MessageBubble>
            <MessageBubbleKayse>
              Unlike Salesforce, which is designed for general business and
              sales environments, our solution is purpose-built for legal client
              retention:
              <ul>
                <li>
                  Our voice AI is specifically trained on legal client
                  conversations
                </li>
                <li>
                  Our sentiment analysis recognizes the unique emotional
                  patterns that precede client dissatisfaction in long
                  litigation processes
                </li>
                <li>
                  Our mobile client portal achieves 70%+ adoption rates because
                  it's designed specifically for clients who need simplified
                  case tracking
                </li>
              </ul>
            </MessageBubbleKayse>
            <MessageBubbleKayse>
              Plus, unlike Salesforce's implementation costs that aren't
              recoverable, Kayse is billable as a case expense to each client
              file for injury firms.
            </MessageBubbleKayse>
          </Phone>
        </div>
        <div className={styles.objectionCard}>
          <h4>Kayse Goes Beyond Generic CRMs</h4>
          <Phone>
            <MessageBubble>
              I already have a CRM and send newsletters
            </MessageBubble>
            <MessageBubbleKayse>
              While newsletters are valuable for general updates, they don't
              address the individual client's need for personalized case status
              information or emotional reassurance during lengthy proceedings.
            </MessageBubbleKayse>
            <MessageBubbleKayse>
              Kayse enhances your CRM and other apps by adding intelligent,
              automated 1:1 communications that respond to each client's
              specific case status and emotional needs—with sentiment analysis
              that continuously monitors communication patterns for signs of
              frustration, confusion, or disengagement that typically precede
              client attrition.
            </MessageBubbleKayse>
          </Phone>
        </div>
      </div>
      <div className={styles.solutionButton}>
        <p>Wish to learn more about how we stack up against others?</p>
        <button className={styles.button}>
          <a href="/why-kayse">See How We Compare</a>
        </button>
      </div>
    </div>
  );
}

function ResultSectionMetric({ title, subtitle, children }) {
  return (
    <div className={styles.resultSectionMetric}>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      {children}
    </div>
  );
}

function ResultSectionQuote({ children }) {
  return <div className={styles.resultSectionQuote}>{children}</div>;
}

function ResultsSection() {
  return (
    <div className={`${styles.resultSection} ${styles.section}`}>
      <h3>
        Your Business, Transformed By Kayse.<br></br>
        Get <span className={styles["gradient-text"]}>Results That Matter</span>
        .
      </h3>
      <div className={styles.resultsMetrics}>
        <ResultSectionMetric title="$12-18k" subtitle="In Savings per Month">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
          arcu, tincidunt eget faucibus eu, rhoncus quis lorem. Nullam a luctus
          justo, sed bibendum mauris.
          <br></br>
          <br></br>
          Nullam euismod mi elit, at gravida velit porttitor in. Cras vitae orci
          mattis, pharetra leo vitae, placerat augue.
          <br></br>
          <br></br>
          Nullam euismod mi elit, at gravida velit porttitor in. Cras vitae orci
          mattis, pharetra leo vitae, placerat augue. Nullam euismod mi elit, at
          gravida velit porttitor in. Cras vitae orci mattis, pharetra leo
          vitae, placerat augue.
        </ResultSectionMetric>
        <ResultSectionMetric title="25-30" subtitle="Hours Saved per Week">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ResultSectionMetric>
        <ResultSectionMetric title="27%" subtitle="Reduced Attrition">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ResultSectionMetric>
        <ResultSectionMetric title="+31" subtitle="Increased NPS">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
          arcu, tincidunt eget faucibus eu, rhoncus quis lorem. Nullam a luctus
          justo, sed bibendum mauris.
        </ResultSectionMetric>
      </div>
      <ResultSectionQuote>
        <blockquote>
          <sup>
            <span className={styles["gradient-text"]}>“</span>
          </sup>
          Handling a docket of 2,500+ Camp Lejeune cases, we were drowning in
          routine client calls and we later found out that most cases were
          missing intake information to proceed with each case.
          <br></br>
          <br></br>
          Kayse's Voice AI now handles 83% of these inquiries, providing
          consistent updates while our legal team focuses on advancing the
          litigation. The client retention improvement alone paid for the system
          within two months.
          <br></br>
          <br></br>
          <cite>- Jennifer R., Mass Tort Practice Manager</cite>
        </blockquote>
      </ResultSectionQuote>
      <div className={styles.solutionButton}>
        <p>
          Discover how Kayse helps businesses transform their client management
        </p>
        <button className={styles.button}>
          <a href="/resources#case-studies">See More Success Stories</a>
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <p
        className={styles.heroSubtext}
        style={{ color: "#FFF", fontSize: "0.5em" }}
      >
        Join leading mass tort firms in revolutionizing client management.
      </p>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <p>
          &copy; 2025 Kayse.ai | 1400 Old Country Rd, Suite 305, Westbury, NY
          11590
        </p>
        <div className={styles.footerLinks}>
          <a href="https://www.linkedin.com/company/kayse-ai">LinkedIn</a>
          <a href="https://twitter.com/kayse_ai">Twitter</a>
          <a href="https://www.facebook.com/kayse.ai">Facebook</a>
        </div>
      </div>
    </>
  );
}

function FinalCTASection() {
  return (
    <div className={`${styles.finalCTASection} ${styles.section}`}>
      <h3>
        Ready to <span className={styles["gradient-text"]}>Transform</span> Your
        Client Management?
      </h3>
      <p>
        Book a personalized demo to see how Kayse can help your firm reduce
        client attrition while freeing your team from routine communication
        tasks.
      </p>
      <button className={styles.button}>
        <a href="/demo-request">Book Your Demo</a>
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.header}></div>
        <HeroSection />
        <ProblemStatementSection />
        <SolutionSection />
        <ObjectionSection />
        <ResultsSection />
        <FinalCTASection />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
