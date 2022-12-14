import React from "react";
import Review from "../components/Review/Review";
import ReviewTemplate from "../components/Review/ReviewTemplate";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ReviewMain() {
  return (
    <div className="ReviewMain-contaniner">
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="실시간 리뷰">
          <div className="ReviewTest">
            <ReviewTemplate></ReviewTemplate>
          </div>
        </Tab>
        <Tab eventKey="profile" title="해외 평론 및 리뷰">
          <div className="ReviewPage">
            <Review></Review>
          </div>
        </Tab>
      </Tabs>
      {/* <div className="ReviewTest">
        <ReviewTemplate></ReviewTemplate>
      </div>
      <div className="ReviewPage">
        <Review></Review>
      </div> */}
    </div>
  );
}

export default ReviewMain;
