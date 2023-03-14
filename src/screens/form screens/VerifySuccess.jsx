import React from "react";
import DoneIcon from "@mui/icons-material/Done";

function VerifySuccess() {
  return (
    <div className="form-box">
      <div className="form-box-content">
        <form action="">
          <div className="inner-form inner-form-small">
            <div className="form-icon-done">
              <span className="form-icon-span">
                <DoneIcon className="form-icon" />
              </span>
            </div>
            <h2>Account Verified</h2>
            <p>
              Your account is now verified. Log Out and Log In to apply the
              changes
            </p>
            <div className="form-btn">
              <button className="form-submit-btn">Log Out</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifySuccess;
