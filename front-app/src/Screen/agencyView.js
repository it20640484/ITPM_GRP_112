import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import RatingStars from "./RatingStar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "react-modal";
import * as Yup from "yup";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
  },
};
const initialValues = {
  review: "",
  rating: "",
};
const validationSchema = Yup.object({
  review: Yup.string().required("Required"),
  rating: Yup.number()
    .required("Rating is required")
    .min(0, "Rating cannot be negative")
    .max(5, "Rating cannot be higher than 5"),
});
export default function SimpleAccordion() {
  const [reviewData, setReviewData] = React.useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const userId = localStorage.getItem("id");
  React.useEffect(() => {
    axios
      .get("http://localhost:8020/review/agency/64672076731b0c2bea5f4954")
      .then((res) => {
        setReviewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [modalIsOpen]);
  console.log(reviewData);
  const onSubmit = (values) => {
    console.log(values);
    const responses = axios

      .post(`http://localhost:8020/review/add/64672076731b0c2bea5f4954`, {
        review: values.review,
        rating: values.rating,
        userId: userId,
      })
      .then((response) => {
        console.log(response);
        setIsOpen(false);
      })

      .catch((error) => {});
  };

  return (
    <div>
      <div className="font-bold">
        <h1>Single view Agency</h1>

        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="bg-blue-700 text-white p-2 m-5"
        >
          Add New Review
        </button>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="overflow-auto h-150">
              {reviewData &&
                reviewData.map((review, index) => (
                  <div className="bg-gray-200 my-2 py-2 px-3 " key={index}>
                    <div>
                      <RatingStars rating={review.rating} />
                    </div>
                    <p className="font-semibold text-sm">{review.date}</p>
                    <p className="font-semibold text-sm">
                      by{" "}
                      <span className="text-gray-500 font-light">
                        {review.userId}
                      </span>{" "}
                    </p>
                    <p className="text-base">{review.review}</p>
                  </div>
                ))}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex-col w-full">
                <div className="ll">
                  {" "}
                  <p className="font-semibold">Review</p>
                </div>
                <div className="ll">
                  {" "}
                  <Field
                    className=" border-black text-sm p-3 my-1  rounded-md w-full shadow-lg bg-gray-300"
                    type="text"
                    name="review"
                  />
                </div>

                <ErrorMessage
                  component="div"
                  className="text-red-500 text-xs"
                  name="review"
                />
              </div>
              <div className="flex-col w-full">
                <div className="ll">
                  {" "}
                  <p className="font-semibold">Rating</p>
                </div>
                <div className="ll">
                  {" "}
                  <Field
                    className=" border-black text-sm p-3 my-1  rounded-md w-full shadow-lg bg-gray-300"
                    type="number"
                    name="rating"
                  />
                </div>

                <ErrorMessage
                  component="div"
                  className="text-red-500 text-xs"
                  name="rating"
                />
              </div>

              <button
                className="bg-blue-600 text-white w-full py-2 mt-2  border-2
                "
                type="submit"
              >
                Add Review
              </button>
              <button
                className="bg-red-600 text-white w-full py-2 mt-2 border-2"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}
