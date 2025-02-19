import "./projectspage.css";
import typeTwo from "../../assets/type2.png";
import ohNotation from "../../assets/ohnotation.png";

const ProjectsPage = () => {
  return (
    <>
      <div className="projects-container">
        <h1>what I've worked on</h1>

        <div className="project-item">
          <h2>Untitled Game</h2>
          <div className="project-content">
            <p>
              An isometric game engine developed in TypeScript and PixiJS,
              featuring multiplayer/online functionality!
            </p>
            <img
              src={typeTwo}
              alt="Untitled Game Screenshot"
              className="project-image"
            />
          </div>
        </div>

        <div className="project-item">
          <h2>Oh, Notation</h2>
          <div className="project-content">
            <p>
              Welcome to Oh, Notation! This website provides an interactive and
              educational experience to help you understand and master Big O
              Notation, a critical concept in computer science for analyzing the
              efficiency of algorithms.
            </p>
            <img
              src={ohNotation}
              alt="Oh, Notation Screenshot"
              className="project-image"
            />
          </div>
          <div className="project-links">
            <a
              href="https://github.com/kevinsctfries/ohnotation"
              className="project-link button-effect"
              aria-label="View source code">
              GitHub
            </a>
            <a
              href="https://ohnotation.vercel.app/"
              className="project-link button-effect"
              aria-label="Visit site">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
