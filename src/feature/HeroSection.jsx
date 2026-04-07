import '../App.css';
export default function HeroSection() {
    return (
        <section className="hero">
           <div className="hero-left">
                <h1 className="hero-title">Welcome to My Website</h1>
                <p className="hero-description">This is a simple hero section to showcase the main content of the website.</p>
                <button className="hero-button">Learn More</button>
           </div>
              <div className="hero-right">
                <img src="../../public/logo192.png" alt="Hero Image" />
              </div>  
        </section>
    );
}
