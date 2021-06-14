import React from "react";
import {Table} from "react-bootstrap";
import { Form, Field } from "react-final-form";

function Table8() {
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
              
          
              <h5 className="pl-2"> <u> MUSCLE GIRTH </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Right(in cm)</th>
                    <th>Left(in cm)</th>
                    
                   
                  </tr>

                  <tr>
                    <th scope="row">Mid Thigh</th>

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
                    <th scope="row">Mid Calf</th>
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


                   <tr>
                    <th scope="row">Mid Arm</th>

                    <td>
                     <Field name="cpyt">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                        <Field name="bz">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Mid Forearm</th>
                    <td>
                      <Field name="cxzz">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                         <Field name="izz">
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
export default Table8;