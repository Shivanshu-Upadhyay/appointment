import React from "react";
import {Table} from "react-bootstrap";
import { Form, Field } from "react-final-form";

function Table6() {
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
              
          
              <h5 className="pl-2"> <u> CORTICAL REACTIONS </u></h5>
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
                    <th scope="row">Neek Righting</th>

                    <td>
                       
                  5 months
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
                    <th scope="row">Associated Reactions</th>
                    <td>
                        
                  Pathological
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
                    <th scope="row">Rising</th>

                    <td>
                    
                       2-6 months  
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
                    <th scope="row">Body Righting</th>
                    <td>
                       4-6 months
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
                    <th scope="row">Amphibian</th>
                    <td>
                       4-6 months
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
                    <th scope="row">Rotation</th>
                    <td>
                       6-10 months
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
export default Table6;