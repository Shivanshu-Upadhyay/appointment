import React from "react";
import Grid from "@material-ui/core/Grid";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import { changeHeading } from "../../actions/tableAction";
import { connect } from "react-redux";
import SimplePaper from "../Paper/paper";
import { v4 as uuidv4 } from "uuid";

const JumboButton = (props) => {
  const handleClick = (value) => {
    props.changeHeading(props.data[value].heading);
    // props.renderTable();
    // props.handler(value);
  };

  const count = props.count;
  const width = props.width;

  const renderJumbo = () => {
    return (
      <div>
        <Grid container spacing={1}>
          {props.data.map((object, index) => {
            return (
              <Grid
                key={uuidv4()}
                item
                xs={width}
                onClick={() => {
                  handleClick(index);
                  // renderTable();
                }}
              >
                <div>
                  {props.showBox ? (
                    <SimplePaper data={object.data.count} />
                  ) : undefined}

                  <div
                    className="jumbotron"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "rgba(200,200,200,0.7)",
                    }}
                  >
                    <div className="d-flex justify-content-center">
                      <h2 className="display-5">{object.heading}</h2>
                    </div>
                    <br />

                    {props.showBox ? undefined : (
                      <div className="d-flex justify-content-center">
                        {" "}
                        <h2 className="display-4">{object.data.count}</h2>{" "}
                        <br /> <br />{" "}
                      </div>
                    )}
                    <br />
                    <div className="d-flex justify-content-center">
                      {props.arrowIcon ? (
                        <DoubleArrowRoundedIcon fontSize="large" />
                      ) : undefined}
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };

  return <div>{renderJumbo()}</div>;
};

export default connect(null, { changeHeading })(JumboButton);
