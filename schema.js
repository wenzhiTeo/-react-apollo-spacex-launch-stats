const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    lauch_data_local: { type: GraphQLString },
    launh_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
});

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLInt },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
});
