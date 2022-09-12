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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ language }) {
  const data = [
    {
      icon: "pen.svg",
      name: "Brand design.",
      des: "Looking at your product and the market in which it exists, .",
    },
    {
      icon: "nokpen.svg",
      name: "Website design.",
      des: "Transforming your existing communications strategy into digital .",
    },
    {
      icon: "scale.svg",
      name: "Print design.",
      des: "Adapting your communication into printed form, making sure that each color..",
    },
    {
      icon: "pen.svg",
      name: "Brand design.",
      des: "Looking at your product and the market in which it exists, .",
    },
    {
      icon: "nokpen.svg",
      name: "Website design.",
      des: "Transforming your existing communications strategy into digital .",
    },
    {
      icon: "scale.svg",
      name: "Print design.",
      des: "Adapting your communication into printed form, making sure that each color..",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <div>*</div> */}

      <Button onClick={handleOpen}>
        {/* <div className="container"> */}

        <div className="row d-flex flex-wrap justify-content-center p-4 ">
          {data.map((elm) => {
            return (
              <>
                <Fade bottom>
                  <div className=" col-lg-4  " style={{ marginTop: "40px" }}>
                    <div
                      style={{ color: "black" }}
                       className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <div>
                        <img
                          className="mt-3"
                          src={elm.icon}
                          alt=""
                          style={{ height: "60px" }}
                        />
                      </div>

                      <div className="mt-4">
                        <p style={{ textDecoration: "none" }}>{elm.des}</p>
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
          {/* <Slider /> */}
         
          <Typography
            id="modal-modal-title"
            variant="h6"
            className="text-center mb-4"
            component="h2"
          >
            <img src="scale.svg" alt="" style={{ height: "40px" }} />
          </Typography>
         
          <Typography id="modal-modal-description" className="mt-5" variant="p">
            First app totally built by me. A portfolio built using React Js,
            Tailwind Css and Material UI. Consists of 5 pages which enlist First
            app totally built by me. A portfolio built using React Js, Tailwind
            Css and Material UI. Consists of 5 pages which enlist detailed view
            of my expertise
          </Typography>
          <Typography id="modal-modal-title" variant="h6" className="text-end mt-4" onClick={handleClose} component="h2">
          <button type="button" class="btn btn-danger">cancel</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
