import React from "react";
import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';

import ShoulderTable from './ShoulderTable';



import {
  Typography,
  Paper,
  Checkbox,
  Link,
  Grid,
  Button,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { TextField, Checked, Radio, Select } from "final-form-material-ui";
import NewSlider from "./NewSlider";


function Shoulder() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };


  

  return (
    <div >
      <h3 className="text-center"> SHOULDER EVALUATION</h3>

      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 25}}>
              <Grid  container  spacing={2}>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="dateofassessment">
                      {({ input }) => (
                        <div className="mb-3">
                          <label className=" ">Date Of Assessment-</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                  <Grid item md={4} xs={12}>
                  <div>
                    <Field name="patientid">
                      {({ input }) => (
                        <div className="cardio">
                          <label>Patient ID-</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>


               <Grid container  spacing={2} className='mb-2'>
                <Grid item md={3} xs={12}>
                  <div>
                    <Field name="name">
                      {({ input }) => (
                        <div className="upname ">
                          <label className="name">Name-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={2} xs={12}>
                  <div>
                    <Field name="age">
                      {({ input }) => (
                        <div className="">
                          <label className="age">Age-</label>
                           
                          <input type="text" {...input} placeholder="" className='w50'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={3} xs={12}>
                  <div className="">
                    <label>Gender-</label>

                     <label className='p-1 bold1'>
      M:<Field name="Gender" type="radio" value="M" component="input" />
          </label>
                    
                      <label className='p-1 bold1'>
      F:<Field name="Gender" type="radio" value="F" component="input" />
          </label>
                   
                     <label className='p-1 bold1'>
      O:<Field name="Gender" type="radio" value="O" component="input" />
          </label>
                  </div>
                </Grid>

                  <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Occupation">
                      {({ input }) => (
                        <div className="upname ">
                          <label className="name">Occupation-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>

            


           <Grid container className='mb-3'>

          <Grid item xs={12}>

              <div>
                    <Field name="address">
                      {({ input }) => (
                        <div className="fullw100 ">
                          <label className="name">Address:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
          </Grid>
           </Grid>





  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="dateofadmission">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Date Of Admission:</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Date of Surgery">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Date of Surgery:</label>
                           
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ward">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">WARD:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>






            <Grid container  className='mb-3'>

             <Grid item md={6} xs={12}>

              <div>
                    <Field name="chief complaints">
                      {({ input }) => (
                        <div className="fullw10  ">
                          <label className="">Chief Complaints:</label>
                         <textarea
                            className="wnew"
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

           </Grid>



              <Grid item md={6} xs={12}>

              <div>
                    <Field name="sur/pro
                    ">
                      {({ input }) => (
                        <div className="fullw10  ">
                          <label className="name">Surgery/Procedure:</label>
                         <textarea
                            className="wnew"
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

           </Grid>

           </Grid>



<div className='mb-3'> <h4><u>MECHANISM OF PAIN</u></h4>  </div>

  <Grid container  spacing={2} className='mb-3'>

 
                <Grid item md={4} xs={12}>
                  <div>
                    <label>Pain Onset-</label>
                 <Field name="painonset" component="select">
              <option />
              <option value="graduol">Gradual</option>
              <option value="sudden"> Sudden</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <label>Injury-</label>
            <Field name="injury" component="select">
              <option />
              <option value="Traumatic">Traumatic</option>
              <option value="Atraumatic"> Atraumatic</option>
             
            </Field>
                  </div>
                </Grid>
               



<Grid item md={4} xs={12}>
                  <div>
                    <Field name="Limitations of ADLs">
                      {({ input }) => (
                        <div className="">
                          <label className="">Limitations of ADLs-</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

            </Grid>




                    <div className='mb-3'> <h4><u>BODY CHART</u></h4>  </div>
            <Grid container  className='mb-3'>

             <Grid item md={12} xs={12}>

              <div>
                    <Field name="body chart">
                      {({ input }) => (
                        <div className=" ">
                          
                         <textarea
                            className="bodychart"
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

           </Grid>
          
           </Grid>







<div className='mb-3'> <h4><u>EXAMINATION</u></h4>  </div>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <label>Warmth-</label>
                 <Field name="warmth" component="select">
              <option />
              <option value="wleft">L</option>
              <option value="wright"> R</option>
              <option value="wbilateral"> B/L</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <label>Swelling-</label>
            <Field name="swelling" component="select">
              <option />
              <option value="sleft">L</option>
              <option value="sright"> R</option>
              <option value="sbilateral"> B/L</option>
             
            </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                   <div>
                    <label>Stiffness-</label>
            <Field name="Stiffness" component="select">
              <option />
              <option value="bruleft">Left</option>
              <option value="bruright"> Right</option>
              <option value="brubilateral"> B/L</option>
             
            </Field>
                  </div>
                </Grid>
               </Grid>



<Grid container  spacing={2} className='mb-3'>



  <Grid item md={4} xs={12}>
                  <div>
                    <label>Clicking Sound-</label>
            <Field name="Clicking Sound" component="select">
              <option />
              <option value="propleft">Left</option>
              <option value="propright"> Right</option>
              <option value="propbilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>




                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Alignment">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Alignment-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              
               
  <Grid item md={4} xs={12}>
                  <div>
                    <label>Winging-</label>
            <Field name="Winging" component="select">
              <option />
              <option value="propleft">Left</option>
              <option value="propright"> Right</option>
              <option value="propbilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Muscle Atophy-">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Muscle Atrophy:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Muscle Tightness">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Muscle Tightness:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Contracture/Deformities">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Contracture/Deformities:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


               </Grid>








<div className='mb-3'> <h4><u> PAIN EVALUATION </u></h4>  </div>


{/* +++++++++++++++ SLIDER+++++++++++++++++= */}






<Grid container  spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div className=''>
                  <label >Intensity Of Pain</label>
                  
                     <NewSlider />
                      <h6 className='text-center'>VAS Score</h6>
                  </div>
                </Grid>
                 </Grid>


{/* ++++++++++++++++++++++++++++++++= */}





  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="duration of pain">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Duration Of Pain-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Site Of Pain">
                      {({ input }) => (
                        <div className="">
                          <label className="">Site Of Pain-</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                
               </Grid>





<Grid container  spacing={2} className='mb-3'>
              

              


  <Grid item md={6} xs={12}>
                  <div>
                    <label>Pain Type-</label>
                 <Field name="Pain Type" component="select">
              <option />
              <option value="Constant">Constant</option>
              <option value="Internittent"> Intermittent</option>
             
             
                  </Field>
                  </div>
                </Grid>


  <Grid item md={6} xs={12}>
                  <div>
                    <label>Nature Of Pain-</label>
            <Field name="Nature Of Pain" component="select">
              <option />
              <option value="Dull">Dull Ache</option>
              <option value="Sharp"> Sharp Shooting</option>
              <option value="Throbbing"> Throbbing</option>
               <option value="Radiating">Radiating</option>
              <option value="Moving"> Moving</option>
              <option value="Static"> Static</option>
              <option value="Other"> Other</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>



<div className='mb-3'> <h4><u>NECK</u></h4>  </div>


<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="STiffness3-">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Stiffness:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Pain12">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Pain:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Radiation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Radiation:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


               </Grid>






<Grid container  spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="Aggravating Factors">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Aggravating Factors-</label>
                          <input type="text" {...input} placeholder="" className='w50' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              
               </Grid>


<Grid container  spacing={2} className='mb-2'>
 <Grid item md={12} xs={12}>
                  <div>
                    <Field name="Relieving Factor">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Relieving Factor-</label>
                          <input type="text" {...input} placeholder="" className='w50'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>






{/* +++++++++++++++++++Table1+++++++++++++++++++++++++++ */}
     
  <div className='mb-5'></div>



           <Grid container className='mb-3'>
          <Grid item xs={12}>
             <div className='mb-4'> <h4><u> STRENGTH & ROM</u></h4></div> 
              <div>
               <ShoulderTable />
                  </div>
          </Grid>
           </Grid>




              
             

{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}










             
<div className='mb-3'> <h4><u>SPECIAL TESTS</u></h4>  </div>

<Grid container  spacing={2} className=''>
                <Grid item md={4} xs={4}>
                  <div>
                  <h6 className=''> <u> TEST NAME </u> </h6>
                 
                  </div>

                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <h6 className=''>LEFT</h6>
                  </div>
                </Grid>
                 <Grid item md={4} xs={4}>
                  <div>
                  <h6 className='text-center'>RIGHT</h6>
                  </div>
                </Grid>
               </Grid>



<div><h5 className='mb-4 mt-3'> ROTATOR CUFF TESTING</h5></div>


  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Supraspinatus Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Supraspinatus Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Supraspinatus Test">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Infraspinatus Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Infraspinatus Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Infraspinatus Test ">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Drop Arm Test ">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Drop Arm Test -</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Drop Arm Test 2">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Subscapularis Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Subscapularis Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Subscapularis Test1">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>


<div><h5 className='mb-4 mt-3'> IMPINGEMENT </h5></div>

  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Hawkins-Kennedy Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Hawkins-Kennedy Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Hawkins-Kennedy Test">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Painful Arc">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Painful Arc-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Painful Arc ">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




<div><h5 className='mb-4 mt-3'> STABILITY TESTS </h5></div>

  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Sulcus Sign">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Sulcus Sign-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Sulcus Sign">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Apprehension Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Apprehension Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Apprehension Test ">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>



















               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="inverstigation">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">INVESTIGATION-</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={12} xs={12}>
                    <div>
                    <Field name="diagnosis">
                      {({ input }) => (
                        <div className=" ">
                          <label className="widthsame bold">DIAGNOSIS-</label>
                          <input type="text" {...input} placeholder="" className='lastw' />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="TREATMENT GOAL">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold"> TREATMENT GOAL-</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


               <Grid item md={12} xs={12}>
                    <div>
                    <Field name="Treatment PLAN">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">TREATMENT PLAN-</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


            
                    
                
         </Grid>

                         


                       <div className='text-center'>  <Button
                            variant="contained"
                             color="primary"
                              size="small"
                               type='submit'
                                startIcon={<SaveIcon />} >
                                   Save
                                </Button></div>








                            
            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Shoulder;