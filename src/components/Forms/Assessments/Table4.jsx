import React from "react";
import {Table} from "react-bootstrap";
import { Form, Field } from "react-final-form";

function Table4() {
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
              
          
              <h5 className="pl-2"> <u> BRAINSTEM REFLEXES </u></h5>
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
                    <th scope="row">ATNR</th>

                    <td>
                       
                  6 months Usually Pathological
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
                    <th scope="row">STNR</th>
                    <td>
                        
                  Raise & Pathological
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
                    <th scope="row">Tonic Labrynthine Supine</th>

                    <td>
                    
                       Pathological  
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
                    <th scope="row">Tonic Labrynthine Prone</th>
                    <td>
                       3 months
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
                    <th scope="row">Positive Supporting</th>
                    <td>
                       3 months
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
                    <th scope="row">Negative Supposting</th>
                    <td>
                      3-5 months
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
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Table4;