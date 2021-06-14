import React from "react";
import { Table } from 'react-bootstrap';
import { Form, Field } from "react-final-form";

function KneeTable() {
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
             
              <h4> <u >RANGE OF MOTION</u> </h4>
             
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className='text-center pb-4' rowSpan='2'> <h5>MOVEMENTS</h5> </th>
                    <th colSpan='3' className='text-center'>LEFT</th>
                    <th colSpan='3' className='text-center' >RIGTH</th>

                    
                  </tr>

                  
                  <tr>
                    
                    <th>
                        MMT(STRENGTH)
                    </th>
                    
                    <th>
                        ACTIVE(ROM)
                    </th>
                    <th>
                         PASSIVE(ROM)
                    </th>

                    <th>
                        MMT(STRENGTH)
                    </th>

                    <th>
                        ACTIVE(ROM)
                    </th>
                    <th>
                        PASSIVE(ROM)
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Flexion</th>

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

                    <th>
                    <Field name="rxx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                    <th>
                    <Field name="rxy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>

                  

<tr>
                    <th scope="row">Extension</th>

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

                    <th>
                    <Field name="ray">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                    <th>
                    <Field name="rax">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>



                    <tr>
                    <th scope="row">Hip</th>

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

                     <th>
                    <Field name="rbx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                     <th>
                    <Field name="rby">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>



                    <tr>
                    <th scope="row">Ankle</th>

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
                    
                      <th>
                    <Field name="rcx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

       
                      <th>
                    <Field name="rcy">
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
export default KneeTable;