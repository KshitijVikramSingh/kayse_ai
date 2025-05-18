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

function ResultSectionMetric({ title, description }) {
  return (
    <div className={styles.resultSectionMetric}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

function ResultSectionQuote({ quote }) {
  return (
    <div className={styles.resultSectionQuote}>
      <p>{quote}</p>
    </div>
  );
}

function ResultsSection() {
  return (
    <div className={`${styles.resultSection} ${styles.section}`}>
      <h3>Results That Matter</h3>
      <div className={styles.resultsMetrics}>
        <ResultSectionMetric
          title="50% Reduction in Client Churn"
          description="Our clients have seen a significant decrease in client churn rates."
        />
        <ResultSectionMetric
          title="30% Increase in Client Satisfaction"
          description="Improved communication has led to higher client satisfaction scores."
        />
        <ResultSectionQuote quote="Kayse has transformed our client management process!" />
      </div>
    </div>
  );
}

function FinalCTASection() {
  return (
    <div className={`${styles.finalCTASection} ${styles.section}`}>
      <h3>
        Ready to <span className={styles["gradient-text"]}>Transform</span> Your
        Client Management ?
      </h3>
      <p>Request a demo today and see how we can help your firm.</p>
      <button className={styles.button}>
        <a href="//demo-request">Book Your Demo</a>
      </button>
      <p className={styles.heroSubtext}>
        Join leading mass tort firms in revolutionizing client management.
      </p>
      <small className={styles.footer}>
        <a href="https://kayse.ai">kayse.ai</a> |{" "}
        <a href="https://kayse.ai/privacy">Privacy Policy</a> |{" "}
        <a href="https://kayse.ai/terms">Terms of Service</a>
        <br></br>
        &copy; 2025 Kayse. All rights reserved.
      </small>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.header}></div>
      <HeroSection />
      <ProblemStatementSection />
      <SolutionSection />
      <ObjectionSection />
      <ResultsSection />
      <FinalCTASection />
    </main>
  );
}
