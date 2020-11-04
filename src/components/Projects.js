// component for Projects section
// functional component
const Projects = () => {
  console.log("Projects component ran");
  return (
      <div className="Projects-section">
          <h3>Projects: </h3>
          <p>
              <ul>
                  <li>< br/> - Adventure Story Game</li>
                  <li>< br/> - HTML JS Calculator</li>
                  <li>< br/> - Simple CRUD App</li>
                  <li>< br/> - Basic Express API</li>
              </ul>
          </p>
      </div>
  );
}

export { Projects }