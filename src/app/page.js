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
    <div className={styles.problemStatementVisual}>
      Insert Attrition Visual Here
    </div>
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

function SolutionSubSection({ title, children, image, alt }) {
  return (
    <div className={styles.solutionSubSection}>
      <div className={styles.solutionSubSectionImage}>
        <img src={image} alt={alt} />
      </div>
      <h4 className={styles.subSectionTitle}>{title}</h4>
      {children}
    </div>
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
        <SolutionSubSection
          title="Human-like Voice AI"
          image={
            "https://images.pexels.com/photos/5387287/pexels-photo-5387287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="Voice AI"
        >
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
        <SolutionSubSection
          title="Sentiment Analysis Technology"
          image="https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Sentiment Analysis"
        >
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
        <SolutionSubSection
          title="Dedicated Mobile Client Portal App"
          image={
            "https://images.pexels.com/photos/4910129/pexels-photo-4910129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="Mobile App"
        >
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

function MessageBubble({ message }) {
  return <div className={styles.messageBubble}>{message}</div>;
}

function MessageBubbleKayse({ message }) {
  return <div className={styles.messageBubbleKayse}>{message}</div>;
}

function ObjectionCards({ title, userMessage, kayseMessage }) {
  return (
    <div className={styles.objectionCards}>
      <h4>{title}</h4>
      <MessageBubble message={userMessage} />
      <MessageBubbleKayse message={kayseMessage} />
    </div>
  );
}

function ObjectionSection() {
  return (
    <div className={`${styles.objectionSection} ${styles.section}`}>
      <h3>The Difference Between Communication and Connection</h3>
      <div className={styles.objectionCards}>
        <ObjectionCards
          title="Beyond Calls, Texts & Emails"
          userMessage="I don't have time to talk right now."
          kayseMessage="I understand. I can send you a quick message instead."
        />
        <ObjectionCards
          title="Beyond Generic CRMs"
          userMessage="I need to think about it."
          kayseMessage="That's completely fine. I'm here when you're ready."
        />
        <ObjectionCards
          title="Beyond Salesforce"
          userMessage="I don't want to be bothered."
          kayseMessage="I respect your space. I'll check in later."
        />
      </div>
    </div>
  );
}

function ResultSectionMetric({ title, subtitle, children, style }) {
  return (
    <div className={styles.resultSectionMetric} style={style}>
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
        <ResultSectionMetric
          title="$12-18k"
          subtitle="In Savings per Month"
          style={{
            gridColumn: "1 / 5", // Wide tile
            gridRow: "1 / 3", // Taller tile
          }}
        >
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
        <ResultSectionMetric
          title="25-30"
          subtitle="Hours Saved per Week"
          style={{
            gridColumn: "5 / 7", // Half-width tile
            gridRow: "1 / 2", // Normal height
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ResultSectionMetric>
        <ResultSectionMetric
          title="27%"
          subtitle="Reduced Attrition"
          style={{
            gridColumn: "7 / 9", // Rightmost
            gridRow: "1 / 2",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ResultSectionMetric>
        <ResultSectionMetric
          title="+31"
          subtitle="Increased NPS"
          style={{
            gridColumn: "5 / 9", // Spans full right side
            gridRow: "2 / 3", // Bottom aligned
          }}
        >
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
        <p>&copy; 2023 Kayse. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className={styles.socialMediaLinks}>
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
        Client Management ?
      </h3>
      <p>
        Book a personalized demo to see how Kayse can help your firm reduce
        client attrition while freeing your team from routine communication
        tasks.
      </p>
      <button className={styles.button}>
        <a href="//demo-request">Book Your Demo</a>
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
