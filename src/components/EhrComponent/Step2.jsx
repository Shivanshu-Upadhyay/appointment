import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PointingError from "../LandingPage/ErrorComponent/PointingError";

export default function AshuStepper() {
  const [married, setMarried] = React.useState(false);
  const RadioComponent = ({ input }) => {
    if (input.value === "married" && input.checked) {
      setMarried(true);
    }
    if (input.value === "single" && input.checked) {
      setMarried(false);
    }
    console.log(married);
    return <Radio {...input} />;
  };





  return (
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <Field name="dominance">
            {({ input, meta }) => (
              <div className="field">
                <label>Dominance (R/L)</label>
                <input type="text" {...input} />
                <PointingError input = {input } meta = {meta} />
              </div>
            )}
          </Field>
          <div class="field">
            <label>Referral Source</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Please Select Referral Source</option>
              <option value="1">Doctors</option>
              <option value="2">Website</option>
              <option value="3">Advertisement</option>
              <option value="4">Patients</option>
              <option value="5">Insurance</option>
              <option value="6">Others</option>
            </select>
          </div>
          <Field name="height">
            {({ input, meta }) => (
              <div className="field">
                <label>Height (in cm)</label>
                <input type="text" {...input} />
                <PointingError input = {input } meta = {meta} />
              </div>
            )}
          </Field>
          <Field name="bmi">
            {({ input, meta }) => (
              <div className="field">
                <label>BMI</label>
                <input type="text" {...input} />
                <PointingError input = {input } meta = {meta} />
              </div>
            )}
          </Field>
        </div>
     
        <div class="column">
          <div class="field">
            <label>Marital Status</label>
            <RadioGroup row>
              <FormControlLabel
                label="Single"
                control={
                  <Field
                    name="status"
                    component={RadioComponent}
                    type="radio"
                    value="single"
                  />
                }
              />
              <FormControlLabel
                label="Married"
                control={
                  <Field
                    name="status"
                    component={RadioComponent}
                    type="radio"
                    value="married"
                  />
                }
              />
            </RadioGroup>
       
          </div>
        
         
          <Field name="weight">
            {({ input, meta }) => (
              <div className="field">
                <label>Weight (in kg)</label>
                <input type="text" {...input} />
                <PointingError input = {input } meta = {meta} />
              </div>
            )}
          </Field>
          {married && (
            <div class="field">
              <label>Consanguineous Marriage</label>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
                label="Consanguineous Marriage"
              >
                <Button>Yes</Button>
                <Button>No</Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      </div>
      <div class="ui vertical divider">And</div>
    </div>
  );
}
