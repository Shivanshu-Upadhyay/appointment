import React from "react";
import {Table} from "react-bootstrap";
import { Form, Field } from "react-final-form";

function Table3() {
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
              
          
              <h5 className="pl-2"> <u> TILT REACTIONS </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Reactions</th>
                    <th>Emerges</th>
                    <th>Achieved</th>
                    <th> Not Achieved</th>
                   
                  </tr>

                  <tr>
                    <th scope="row">Supine and Prone</th>

                    <td>
                       
                  6 months
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="c">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Four point Kneeling</th>
                    <td>
                        
                  7-12 months
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="j">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Sitting</th>

                    <td>
                    
                       9-12 months  
                    </td>
                    <th>
                    <Field name="p">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="q">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    
                  </tr>

                  <tr>
                    <th scope="row">Kneel Standing</th>
                    <td>
                       18 months
                    </td>
                    <th>
                         <Field name="w">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>


                     <th>
                         <Field name="wxy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Standing</th>
                    <td>
                       12-18 months
                    </td>
                    <th>
                         <Field name="dd">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="ee">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Staggering Reaction</th>
                    <td>
                       12-18 months
                    </td>
                    <th>
                        <Field name="kk">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="ll">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Saving from Fall</th>
                    <td>
                    5-10 months
                        
                    </td>
                    <th>
                    <Field name="rr">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                        
                    </th>
                    <th>
                    <Field name="ss">
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
export default Table3;