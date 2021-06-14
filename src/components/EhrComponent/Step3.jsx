import React from "react";
import { Field } from "react-final-form";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import PointingError from "../LandingPage/ErrorComponent/PointingError";



export default function JoyStepper() {
  const RadioComponent = ({ input }) => <Radio {...input} />;
  return (
    <div>
      <div class="ui segment">
        <div class="ui two column very relaxed grid">
          <div class="column">
            <div class="field">
              <label> Food Habits </label>
              <RadioGroup row>
                <FormControlLabel
                  label="Veg"
                  control={
                    <Field
                      name="food"
                      component={RadioComponent}
                      type="radio"
                      value="veg"
                    />
                  }
                />
                <FormControlLabel
                  label="Non-Veg"
                  control={
                    <Field
                      name="food"
                      component={RadioComponent}
                      type="radio"
                      value="nonveg"
                    />
                  }
                />
                <FormControlLabel
                  label="Eggetarian"
                  control={
                    <Field
                      name="food"
                      component={RadioComponent}
                      type="radio"
                      value="eggetarian"
                    />
                  }
                />
              </RadioGroup>
            </div>
            <Field name="occupationdescription">
              {({ input, meta }) => (
                <div class="field">
                  <label> Occupation and Description </label>
                  <textarea rows="3" {...input}></textarea>
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
            <Field name="city">
              {({ input, meta }) => (
                <div class="field">
                  <label> City </label>
                  <input type="text" {...input} />
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
            <Field name="pincode">
              {({ input, meta }) => (
                <div class="field">
                  <label> Pincode </label>
                  <input type="text" {...input} />
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
            <Field name="contact">
              {({ input, meta }) => (
                <div class="field">
                  <label> Contact Person </label>
                  <input type="text" {...input} />
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
          </div>
          <div className="column">
            <Field name="id">
              {({ input, meta }) => (
                <div class="field">
                  <label> Id Number </label>
                  <input type="text" {...input} />
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
            <Field name="address1">
              {({ input, meta }) => (
                <div class="field">
                  <label> Address 1 </label>
                  <textarea rows="3" {...input}></textarea>
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
            <Field name="address2">
              {({ input, meta }) => (
                <div class="field">
                  <label> Address 2 </label>
                  <textarea rows="3" {...input}></textarea>
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
            <Field name="phone">
              {({ input, meta }) => (
                <div class="field">
                  <label> Phone </label>
                  <input type="text" {...input} />
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
            <Field name="contactpersonnumber">
              {({ input, meta }) => (
                <div class="field">
                  <label> Contact Person Number </label>
                  <input type="text" {...input} />
                  <PointingError input = {input } meta = {meta} />
                </div>
              )}
            </Field>
          </div>
        </div>
        <div class="ui vertical divider"> and </div>
      </div>
    </div>
  );
}
