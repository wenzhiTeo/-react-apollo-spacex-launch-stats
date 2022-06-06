import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import React, { Component, Fragment } from "react";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";


const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey></MissionKey>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return <h4>Error</h4>;

            return (
              <Fragment>
                {data.launches.map((launch) => (
                  <LaunchItem
                    key={launch.flight_number}
                    launch={launch}
                  ></LaunchItem>
                ))}
              </Fragment>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Launches;
