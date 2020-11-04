// component for Contact section
// functional component
const Contact = () => {
  console.log("Contact component ran");
  return (
      <div className="Contact-section">
          <h3><b> Contact: </b></h3>
              <div>
                <p><b>Contact number:</b> (+675) 700 700 70</p>
                <p><b>E-mail:</b> graemevaluka@switchmaven.com</p>
                <p><b>Address:</b> P.O.Box 001, Gordons, 4th strt, Denwitch drive<br></br>Port Moresby<br></br>Papua New Guinea</p>
              </div>

      </div>
  );
}

export { Contact }