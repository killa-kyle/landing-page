
import React from "react";


const Navbar = () => {
  return (
    <div className="navbar container mx-auto display-flex display-flex--wrap">
      <span className="h3">NoteTaker</span>
      <nav>
        <ul className="list-unstyled display-grid display-grid--columns alignitems--center">
          <li className="navbar-link">
            <a className="button button-small">Sign Up</a>
          </li>
          <li className="navbar-link">
            <a className="">About</a>
          </li>
          <li className="navbar-link">
            <a className="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const Header = ()=> {
  return (
    <header className="page-header my-lg display-grid container mx-auto alignitems--center">
      <div>
      <h1 className="mb-none">Take Notes Like Never Before</h1>
        <p className="lead mt-sm">
          Pre-order what will be the #1 note-taking app on your preferred device
          today!
        </p>
      </div>
      <div>
        <h2 className="h3">Subscribe to Launch Updates</h2>
        <form className="display-grid" action="/">
          <label htmlFor="email1">Enter your email:</label>
          <input id="email1" name="email" type="email" />
          <button className="button button--secondary" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </header>
  )
}

const ProductShowCase = () => {
  return (
    <figure className="display-grid display-grid--placecenter">
      <img src="https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU" alt="Scrolling through NoteTaker" />
      <figcaption className="h3 text-align--center mt-md mb-none">NoteTaker in action</figcaption>
    </figure>
  )
}

const Features = () => {
  return (
    <main className="container mx-auto mt-lg">
      <h3 className="text-align--center">Features</h3>
      <ul className="list-unstyled display-grid display-grid--autofit-columns  display-grid--center-stack mt-md">
        <li>
          <strong className="lead">Multi-device Sync</strong> Never lose a note
        </li>
        <li>
          <strong className="lead">Calendar View</strong> Plan, remind, accomplish
        </li>
        <li>
          <strong className="lead">Family Sharing</strong> One hub for #allthethings
        </li>
      </ul>
    </main>
  )
}


const Reviews = () => {
  return (
    <aside className="reviews-section container mx-auto mt-lg" aria-labelledby="reviews">
      <h3 id="reviews" className="text-align--center mt-md">Beta Tester Reviews</h3>
      <div className="display-grid display-grid--autofit-columns display-grid--center-stack  mt-md">
        <blockquote>
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
              alt=""
            />
            <p>This is going to be my new favorite app!</p>
            <footer><cite>- Sarah Lightfoot</cite></footer>
          </blockquote>
          <blockquote>
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
            <p>I can't wait for this to be a reality.</p>
            <footer><cite>- @notesbae</cite></footer>
          </blockquote>
          <blockquote>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
              alt=""
            />
            <p>There's no better place to keep track of my bitcoin strategy.</p>
            <footer><cite>- Reformed Moleskin User</cite></footer>
          </blockquote>
      </div>
    </aside>
  )
}


const Subscribe = () => {
  return (
    <section className="display-grid display-grid--placecenter text-align--center mt-lg">
      <h2>Subscribe to Be Notified When We Launch</h2>
      <p className="lead">You're going to want in on this!</p>
      <form className="display-flex display-flex--row-gap justifycontent--center display-flex--wrap alignitems--center" action="/">
        <label htmlFor="email2">Enter your email:</label>
        <input id="email2" name="email" type="email" />
        <button className="button button--secondary" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="mt-lg site-footer display-flex display-flex--row-gap display-flex--wrap justifycontent--center "> 
      <p><span className="h3">✍️ NoteTaker</span><br />&copy; 2020</p>
      <ul className="list-unstyled">
        <li>
          <a href="javascript:;" className="button button--small">Pre-Order</a>
        </li>
        <li><a href="javascript:;">About</a></li>
        <li><a href="javascript:;">Contact</a></li>
        <li><a href="javascript:;">Careers</a></li>
      </ul>
      <ul className="list-unstyled">
        <li><a href="javascript:;">Terms & Conditions</a></li>
        <li><a href="javascript:;">Privacy Policy</a></li>
      </ul>
    </footer>
  )
}

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Navbar />
        <Header />
        <ProductShowCase />
        <Features />
        <Reviews />
        <Subscribe />
        <Footer />

      </>
    );
  }
}

export default App;
