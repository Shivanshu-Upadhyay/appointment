import React from "react";
import {Table} from "react-bootstrap";
import { Form, Field } from "react-final-form";

function Table7() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <div>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> LIMB LENGTH DISCREPANCY </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Right(in cm)</th>
                    <th>Left(in cm)</th>
                    
                   
                  </tr>

                  <tr>
                    <th scope="row">True Length</th>

                    <td>
                     <Field name="cpy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Apparant Length</th>
                    <td>
                      <Field name="cx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                   
                  </tr>
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Table7;