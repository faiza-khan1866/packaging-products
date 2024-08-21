import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MapContext } from "../../../context/MapContext";
import "./Maps.scss";

const Maps = () => {
  const [key, setKey] = useState("kuwait");
  const { mapValue } = useContext(MapContext);

  useEffect(() => {
    if (mapValue) {
      setKey(mapValue);
    } else {
      setKey("kuwait");
    }
  }, [mapValue]);

  return (
    <div className="map-tabs mt-60">
      <div className="btn-wrape">
        <Button
          className={`btnstyle ${key == "kuwait" && "active"}`}
          onClick={() => setKey("kuwait")}
          id="kuwait"
        >
          Kuwait
        </Button>
        <Button
          className={`btnstyle ${
            key == "jeddah" || key == "dammam" || key == "riyadh"
              ? "active"
              : ""
          }`}
          onClick={() => setKey("jeddah")}
          id="jeddah"
        >
          Saudi
        </Button>
        <Button
          className={`btnstyle ${key == "uae" && "active"}`}
          onClick={() => setKey("uae")}
          id="uae"
        >
          UAE
        </Button>
      </div>

      <div
        className={`tab-inner-item ${key == "kuwait" ? "d-block" : "d-none"}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.907438839143!2d48.00772800000001!3d29.226277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60a66c1f00bd5%3A0xb2dbd13e45fa70ba!2sKuwait%20Packing%20Materials%20Manufacturing%20Company!5e0!3m2!1sen!2s!4v1683209106150!5m2!1sen!2s"
          width="100%"
          height="550"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        className={`tab-inner-item saudi-wrape ${
          key == "jeddah" || key == "dammam" || key == "riyadh"
            ? "d-block"
            : "d-none"
        }`}
      >
        <div className="saudi-dropdown">
          <Button
            className={`inner-btn ${key == "jeddah" && "active"}`}
            onClick={() => setKey("jeddah")}
          >
            Jeddah
          </Button>
          <Button
            className={`inner-btn ${key == "dammam" && "active"}`}
            onClick={() => setKey("dammam")}
          >
            Dammam
          </Button>
          <Button
            className={`inner-btn ${key == "riyadh" && "active"}`}
            onClick={() => setKey("riyadh")}
          >
            Riyadh
          </Button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606831.781841663!2d33.9561958!3d21.418498900000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c9651dfcfb3f%3A0x7acebca05b7a788!2sSaudi%20Foam%20Trays%20Manufacturing%20co%20S-PAK!5e0!3m2!1sen!2s!4v1697627708623!5m2!1sen!2s"
          width="100%"
          height="550"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={key == "jeddah" ? "d-block" : "d-none"}
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606831.781841663!2d33.9561958!3d21.418498900000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c9651dfcfb3f%3A0x7acebca05b7a788!2sSaudi%20Foam%20Trays%20Manufacturing%20co%20S-PAK!5e0!3m2!1sen!2s!4v1697627708623!5m2!1sen!2s"
          width="100%"
          height="550"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={key == "dammam" ? "d-block" : "d-none"}
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606831.781841663!2d33.9561958!3d21.418498900000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c9651dfcfb3f%3A0x7acebca05b7a788!2sSaudi%20Foam%20Trays%20Manufacturing%20co%20S-PAK!5e0!3m2!1sen!2s!4v1697627708623!5m2!1sen!2s"
          width="100%"
          height="550"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={key == "riyadh" ? "d-block" : "d-none"}
        ></iframe>
      </div>

      <div className={`tab-inner-item ${key == "uae" ? "d-block" : "d-none"}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.618718821533!2d55.7952757!3d25.683930999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60a66b8c07611%3A0xc385ca8411daf58d!2sU-PAK%20Industries%20LLC!5e0!3m2!1sen!2s!4v1683209238869!5m2!1sen!2s"
          width="100%"
          height="550"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
