import React from "react";
import { Field } from "react-final-form";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import Validator from "validator";
import _ from "lodash";
import PointingError from "../LandingPage/ErrorComponent/PointingError";

export default function YesbirStepper() {
  const RadioComponent = ({ input }) => <Radio {...input} />;

  return (
    <div>
      <div class="ui segment">
        <div class="ui two column very relaxed grid">
          <div class="column">
            <Field name="firstName">
              {({ input, meta }) => (
                <div class="field">
                  <label>First Name </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    {...input}
                  />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>

            <div class="field">
              <label>Patient Type *</label>
              <RadioGroup row>
                <FormControlLabel
                  label="OP Patient"
                  control={
                    <Field
                      name="patientType"
                      component={RadioComponent}
                      type="radio"
                      value="op"
                    />
                  }
                />
                <FormControlLabel
                  label="Home Patient"
                  control={
                    <Field
                      name="patientType"
                      component={RadioComponent}
                      type="radio"
                      value="home"
                    />
                  }
                />
              </RadioGroup>
            </div>

            <div class="field">
              <label>Gender </label>
              <RadioGroup row>
                <FormControlLabel
                  label="Male"
                  control={
                    <Field
                      name="gender"
                      component={RadioComponent}
                      type="radio"
                      value="male"
                    />
                  }
                />
                <FormControlLabel
                  label="Female"
                  control={
                    <Field
                      name="gender"
                      component={RadioComponent}
                      type="radio"
                      value="female"
                    />
                  }
                />
              </RadioGroup>
            </div>
            <Field name="refNumber">
              {({ input, meta }) => (
                <div class="field">
                  <label>Clinical Reference number </label>
                  <input type="text" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            {/* <Field name="date">
              {({ input, meta }) => (
                <div class="field">
                  <label>Date </label>
                  <input type="text" placeholder="DD/MM/YYYY" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field> */}
          </div>
          <div class="column">
            <Field name="lastName">
              {({ input, meta }) => (
                <div class="field">
                  <label>Last Name </label>
                  <input type="text" placeholder="Enter Last Name" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <div class="field">
                  <label>Email</label>
                  <input type="text" placeholder="Enter Email" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="mobile">
              {({ input, meta }) => (
                <div class="field">
                  <label>Mobile Number </label>
                  <input
                    type="text"
                    placeholder="Enter Mobile no."
                    {...input}
                  />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="dob">
              {({ input, meta }) => (
                <div class="field">
                  <label>Date of Birth </label>
                  <input type="text" placeholder="DD/MM/YYYY" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            {/* <Field name="age">
              {({ input, meta }) => (
                <div class="field">
                  <label>Age </label>
                  <input type="text" placeholder="Age" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field> */}
          </div>
        </div>
        <div class="ui vertical divider">and</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button type="submit" className="ui primary button">
          Save
        </button>
        <button type="reset" className="ui button">
          Discard
        </button>
      </div>
    </div>
  );
}
