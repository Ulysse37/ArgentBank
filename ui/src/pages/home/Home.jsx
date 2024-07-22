import './home.css';
import Feature from '../../components/feature/Feature';
import { featuresData } from '../../assets/featureData';

function Home() {

  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featuresData.map((feature, index) => (
          <Feature
            key={index}
            imgSrc={feature.imgSrc}
            imgAlt={feature.imgAlt}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
