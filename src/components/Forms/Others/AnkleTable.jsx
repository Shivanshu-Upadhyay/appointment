import React from "react";
import { Table } from 'react-bootstrap';
import { Form, Field } from "react-final-form";

function AnkleTable() {
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
             
              <h4> <u>RANGE OF MOTION</u> </h4>
             
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className='text-center pb-4' rowSpan='2'> <h5>ROM</h5> </th>
                    <th colSpan='2' className='text-center'>LEFT</th>
                    <th colSpan='2' className='text-center' >RIGTH</th>

                    
                  </tr>

                  
                  <tr>
                    
                    <th>
                        ACTIVE
                    </th>
                    <th>
                        PASSIVE
                    </th>
                    <th>
                        ACTIVE
                    </th>
                    <th>
                         PASSIVE
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Dorsiflexion</th>

                    <th>
                    <Field name="o">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
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
                    <th>
                    <Field name="r">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>

                  

<tr>
                    <th scope="row">Plantorflexion</th>

                    <th>
                    <Field name="oa">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pa">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qa">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="ra">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>



                    <tr>
                    <th scope="row">Inversion</th>

                    <th>
                    <Field name="ob">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pb">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qb">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="rb">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>



                    <tr>
                    <th scope="row">Eversion</th>

                    <th>
                    <Field name="oc">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pc">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qc">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="rc">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>



                    <tr>
                    <th scope="row">Toe-Flexion</th>

                    <th>
                    <Field name="od">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pd">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qd">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="rd">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>




                    <tr>
                    <th scope="row">Toe Extension</th>

                    <th>
                    <Field name="oe">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pe">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qe">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="re">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>




                    <tr>
                    <th scope="row">Big Toe Flexion/Extension</th>

                    <th>
                    <Field name="of">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pf">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qf">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="rf">
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
export default AnkleTable;