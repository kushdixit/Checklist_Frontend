import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { ChecklistProcessUpdate } from "redux/actions/task";

const validationSchema = Yup.object().shape({
  input1: Yup.string().required("Name is required"),
  input2: Yup.string().required("Sender Name is required"),
});

const ProcessModal = ({ togglefunction, cards, pathId }) => {
  const { pathname, state } = useLocation();
  const { id: chechID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    input1: "",
    input2: "",
    textarea: "",
  });
  const [errors, setErrors] = useState({});
  const ErrorStyle = { color: "#e45829", padding: "5px 0px", fontSize: "12px" };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log("cardsssss", cards);

  const ValidateForm = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    try {
      await validationSchema.validate(formState, { abortEarly: false });
      setErrors({});
      console.log("cleared");
      handleSubmit();
      // Perform additional actions with valid form data
    } catch (validationErrors) {
      console.log("validationErrors", validationErrors);
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  const handleSubmit = async () => {
    const tasks = cards?.map((item) => {
      return { taskId: item?.id, ischecked: item?.ischecked };
    });
    const res = await dispatch(
      ChecklistProcessUpdate(state?.checklistId, chechID, formState, tasks)
    );
    if (res?.error === false) navigate(`/guest/${state?.checklistId}`);
    else console.log(res?.message);
    console.log("res", res);
    // if (res?.status === 200) {
    //   dispatch(getChecklistBySubcategory(pathId));
    //   togglefunction(false);
    // }
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontWeight: 300 }}>Submit your completed work!</h1>
        <Link
          to={`http://112.196.2.202:3000/${pathId}/check`}
          style={{ textDecoration: "none", color: "#657ccb" }}
        >
          {`http://112.196.2.202:3000/${pathId}/check`}
        </Link>
      </div>
      <form onSubmit={ValidateForm}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1.5rem 0rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              gap: "10px",
            }}
          >
            <label htmlFor="input1" style={{ fontWeight: "bold" }}>
              Name:
            </label>
            <input
              type="text"
              id="input1"
              name="input1"
              value={formState.input1}
              onChange={handleInputChange}
              placeholder="John Doe"
              style={{
                border: "1px solid #e2dcdc",
                padding: "5px 10px",
              }}
            />
            <div style={ErrorStyle}>
              {errors.input1 && <div>{errors.input1}</div>}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1.5rem 0rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              gap: "10px",
            }}
          >
            <label htmlFor="input2" style={{ fontWeight: "bold" }}>
              Submit to:
            </label>
            <input
              type="text"
              id="input2"
              name="input2"
              value={formState.input2}
              onChange={handleInputChange}
              placeholder="John Doe"
              style={{
                border: "1px solid #e2dcdc",
                padding: "5px 10px",
              }}
            />
            <div style={ErrorStyle}>
              {errors.input2 && <div>{errors.input2}</div>}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1.5rem 0rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              gap: "10px",
            }}
          >
            <label htmlFor="textarea" style={{ fontWeight: "bold" }}>
              Notes
            </label>
            <textarea
              id="textarea"
              name="textarea"
              value={formState.textarea}
              onChange={handleInputChange}
              rows="5"
              style={{
                border: "1px solid #e2dcdc",
                padding: "5px 10px",
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          style={{
            border: "1px solid #e2dcdc",
            padding: "0.75rem 1rem",
            display: "flex",
            margin: "auto",
          }}
        >
          Submit Now
        </button>
      </form>
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <p style={{ fontWeight: 300, opacity: "0.5" }}>
          Your submittion will be emailed to dash. Copy the link below to save
          or share a copy.
        </p>
        <Link
          to={`http://112.196.2.202:3000/${pathId}/check`}
          style={{ textDecoration: "none", color: "#657ccb" }}
        >
          {`http://112.196.2.202:3000/${pathId}/check`}
        </Link>
      </div>
    </div>
  );
};

export default ProcessModal;