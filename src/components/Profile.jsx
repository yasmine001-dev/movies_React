import React, { useEffect } from "react";

function Profile({ setShow, show }) {
  // componentWillUnmount
  // remove component

  //componentDidMount -- componentDidUpdate[show] -- componentWillUnmount
  useEffect(() => {
    console.log("useEffect in Profile  component called");
    // clean up
    return () => {
      console.log("clean up remove component in Profile component called");
      alert("are you sure you want to logout?");
    };
  }, []);
  return (
    <>
      <div className="container alert alert-dark mt-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          voluptas consequuntur, laboriosam a voluptatem tempora magnam
          repellendus necessitatibus corrupti natus ratione beatae cumque
          dolores sequi dolorum, blanditiis ut, vel temporibus.
        </p>
        <button className="btn btn-danger" onClick={() => setShow(false)}>
          logout
        </button>
      </div>
    </>
  );
}

export default Profile;
