import { useFormik } from "formik";
// import { useEffect } from "react";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      childName: "",
      dateOfBirth: "",
      premature: "no",
      weight: "",
      weightUnit: "",
      height: "",
      heightUnit: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
  });

  // useEffect(()=> {
  //   console.log(formik.values.premature)
  // })

  return (
    <div className="App">
      <header className="App-header">
        <img src="/left-arrow.png" alt="Back"></img>
        <a href="/">Back</a>
      </header>
      <h1>
        Get your questions answered by our consultant from the comfort of your
        home
      </h1>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="fname">Child's Name</label>
          <input
            type="text"
            id="childName"
            name="childName"
            placeholder="Name"
            minLength="3"
            value={formik.values.childName}
            onChange={formik.handleChange}
            required
          />

          <label htmlFor="dob">Child's Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Select from Calendar"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            required
          />

          <fieldset>
            <legend id="check37">Child born at less than 37 weeks?</legend>
            <div className="child-born">
              <label htmlFor="yes">
                <input
                  type="radio"
                  id="yes"
                  name="premature"
                  value="yes"
                  checked={formik.values.premature === "yes"}
                  onChange={formik.handleChange}
                  required
                />
                Yes
              </label>
              <label htmlFor="no">
                <input
                  type="radio"
                  id="no"
                  name="premature"
                  value="no"
                  checked={formik.values.premature === "no"}
                  onChange={formik.handleChange}
                  required
                />
                No
              </label>
            </div>
          </fieldset>

          {formik.values.premature === "yes" && (
            <div className="bornInWeeks">
              <label htmlFor="weeks">Born in weeks</label>
              <input
                type="number"
                id="weeks"
                name="weeks"
                min="0"
                max="36"
                value={formik.values.weeks}
                onChange={formik.handleChange}
                required
              />
            </div>
          )}

          <div className="weightContainer">
            <div className="child1">
              <label htmlFor="weight">Child's Weight</label>
              <input
                type="number"
                id="weight"
                name="weight"
                min="0"
                max="1000"
                value={formik.values.weight}
                onChange={formik.handleChange}
              />
            </div>

            <div className="child2">
              <label htmlFor="unit">Weight unit</label>
              <select
                name="weightUnit"
                id="weightUnit"
                value={formik.values.weightUnit}
                onChange={formik.handleChange}
              >
                <option value="">-- Select unit --</option>
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>
          <div className="heightContainer">
            <div className="child1">
              <label htmlFor="height">Child's Height</label>
              <input
                type="number"
                id="height"
                name="height"
                min="0"
                max="1000"
                value={formik.values.height}
                onChange={formik.handleChange}
              />
            </div>

            <div className="child2">
              <label htmlFor="unit">Height unit</label>
              <select
                name="heightUnit"
                id="heightUnit"
                value={formik.values.heightUnit}
                onChange={formik.handleChange}
              >
                <option value="">-- Select unit --</option>
                <option value="cm">cm</option>
                <option value="in">in</option>
              </select>
            </div>
          </div>

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            required
          />

          <button type="submit" id="btn">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
