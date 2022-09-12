import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "react-reveal/Fade";
import { Outlet, Link } from "react-router-dom";
import Slider from "../components/Slider";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ language }) {
  const images = [
    "a1.jpeg",
    "a2.jpeg",
    "a3.jpeg",
    "a4.jpeg",
    "a5.jpg",
    "a6.jpg",
    "a7.jpeg",
    "a8.jpeg",
    "a9.jpg",
    "a10.jpeg",
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>*</div>

      <Button onClick={handleOpen}>
        {/* <div className="container"> */}

        <div className="row" style={{ paddingLeft: "15px " }}>
          {images.map((elm) => {
            return (
              <>
                <Fade bottom>
                  <div
                    className="col-lg-3 col-sm-6 mt-4 mb-3 d-flex cursal  justify-content-center"
                    style={{ width: "19vw", padding: "4px" }}
                  >
                    <div
                      className="d-flex overflow-hidden flex-column justify-content-end align-items-start "
                      style={
                        {
                          //height: "280px",
                          // width: "500px",
                          // border: "1px solid white",
                        }
                      }
                    >
                      <div className="position-relative">
                        <img
                          className="img_zoom "
                          src={elm}
                          alt=""
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>

                      <div className="position-absolute z-10 text-white">
                        <p>{language.WorkExamples.h4}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              </>
            );
          })}
        </div>
        {/* </div> */}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Slider />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Portfolio
          </Typography>
          <Typography id="modal-modal-description" variant="p" sx={{ mt: 2 }}>
            First app totally built by me. A portfolio built using React Js,
            Tailwind Css and Material UI. Consists of 5 pages which enlist
            detailed view of my expertise First app totally built by me. A
            portfolio built using React Js, Tailwind Css and Material UI.
            Consists of 5 pages which enlist detailed view of my expertise First
            app totally built by me. A portfolio built using React Js, Tailwind
            Css and Material UI. First app totally built by me. A portfolio
            built using React Js, Tailwind Css and Material UI.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
