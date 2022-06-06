import React, { Component, Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import { withRouter } from "react-router";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

function QueryLaunch() {
  let { flight_number } = useParams();
  console.log(flight_number);
  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: {
      flight_number: flight_number,
    },
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error</h4>;

  const {
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    rocket: { rocket_id, rocket_name, rocket_type },
  } = data.launch;

  return (
    <Fragment>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission: </span>
        {mission_name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Flight Number: {flight_number}</li>
        <li className="list-group-item">Launch Year: {launch_year}</li>
        <li className="list-group-item">
          Launch Successful:{" "}
          <span
            className={classNames({
              "text-success": launch_success,
              "text-danger": !launch_success,
            })}
          >
            {launch_success ? "Yes" : "No"}
          </span>
        </li>
      </ul>
      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <h6>Learning Project by wenzhi</h6>
      <Link to="/" className="btn btn-secondary">Back</Link>
    </Fragment>
  );
}

export class Launch extends Component {
  render() {
    return (
      <Fragment>
        <QueryLaunch></QueryLaunch>
      </Fragment>
    );
  }
}

export default Launch;
