import React from "react";
import {Table} from "react-bootstrap";
import { Form, Field } from "react-final-form";

function Table1() {
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
              
          
              <h5 className="pl-2"> <u> PRIMITIVE REFLEXES </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Reflex</th>
                    <th>Normal Until</th>
                    <th>Present</th>
                    <th>Integrated</th>
                   
                  </tr>

                  <tr>
                    <th scope="row">Sucking</th>

                    <td>
                       
                  3 months
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
                    <th scope="row">Rooting</th>
                    <td>
                        
                  3 months
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
                    <th scope="row">Grasp</th>

                    <td>
                    
                       3 months  
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
                    <th scope="row">Foot Grasp</th>
                    <td>
                       9 months
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
                    <th scope="row">Placing</th>
                    <td>
                        Remains
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
                    <th scope="row">Startle</th>
                    <td>
                       Remains
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
                    <th scope="row">Hand opening</th>
                    <td>
                    1 months
                        
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
export default Table1;