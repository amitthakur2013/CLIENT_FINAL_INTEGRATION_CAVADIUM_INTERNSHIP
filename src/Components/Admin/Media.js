import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const Media = () => {
  const [media, setMedia] = useState([]);
  const [banner, setBanner] = useState("");
  const [image, setImage] = useState("");

  const tableRowMarkup = ({ _id, name, banner }) => (
    <tr key={_id}>
      <td style={{ width: "100px" }}>
        <img
          style={{
            minHeight: "50%",
            minWidth: "50%",
          }}
          src={`http://localhost:3124/uploads/${name}`}
          alt={name}
        />
      </td>
      <td>{banner}</td>
      <td>{name}</td>
      <td>
        {/* <Button variant="warning" size="sm" style={{ borderRadius: "25px" }}>
          <i className="fa fa-pencil" style={{ color: "#fff" }}></i>
        </Button>{" "} */}
        <Button
          onClick={() => deleteBanner(_id)}
          variant="danger"
          size="sm"
          style={{ borderRadius: "25px" }}
        >
          <i className="fa fa-trash font-white"></i>
        </Button>{" "}
      </td>
    </tr>
  );

  const upload = async (image) => {
    const data = new FormData();
    data.append("image", image, image.name);
    data.append("banner", banner);
    const { data: res } = await axios.post(
      "http://localhost:3124/api/homepage//banner/upload",
      data
    );

    const m = [...media];
    m.push(res);
    setMedia(m);
  };

  const deleteBanner = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:3124/api/homepage//banner/delete/${id}`
    );
    console.log(data);
    let m = [...media];
    m = m.filter((item) => item._id !== data._id);
    setMedia(m);
  };

  useEffect(() => {
    (async function () {
      const {
        data: { imgsData },
      } = await axios.get("http://localhost:3124/api/homepage");
      console.log(imgsData);
      setMedia(imgsData);
    })();
    // console.log(media);
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th />
          <th>Type</th>
          <th>File Name</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {media.length
          ? media.map((item) => {
              // console.log({ item });
              return tableRowMarkup(item);
            })
          : null}

        <tr>
          <td style={{ minWidth: "50%", minHeight: "50%" }}>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
          </td>
          <td>
            <input
              type="text"
              value={banner}
              onChange={(e) => setBanner(e.target.value)}
            ></input>
          </td>
          {/* <td>{item}</td> */}
          <td />
          <td>
            <Button variant="info" onClick={() => upload(image)}>
              Save
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Media;
