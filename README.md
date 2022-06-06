# react-apollo-spacex-launch-stats

## "public" folder in root important for deploy in Heroku
- execute `npm run build` in `client` folder to generate the resources for `public` folder
- npm run build will run this related command `"build": "react-scripts build && mv build ../public",`
- but in windows need to manually move the `build` to root and reaname it to `public`
 
 A correct folder structure 
 ![image](https://user-images.githubusercontent.com/99173738/172128856-bbf0e79c-fb0e-4771-873d-c2f4451ae69a.png)
