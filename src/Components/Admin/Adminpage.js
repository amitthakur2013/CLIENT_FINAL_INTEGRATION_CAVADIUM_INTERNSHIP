import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

import Media from "./Media";
const Adminpage = () => {
  const [key, setKey] = useState("media");

  return (
    <>
      <div className="container">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="media" title="Media">
            <Media />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>sadnkjdbfskjbsdkjbjk</p>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <p>sadnkjdbfskjbsdkjbjk</p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Adminpage;
