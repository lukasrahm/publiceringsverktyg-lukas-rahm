## Setup Notes
1. Open the project folder in visual code
2. Run 'npm install' in the terminal
3. Run 'gatsby develop' or if gatsby is not recognized you can run 'npm run develop'
4. Open a new visual code in the 'backend' folder
5. Run 'npm install' in the terminal
6. Run 'npm run develop' to start Strapi
7. Open chrome

Gatsby website is on localhost:8000 
Strapi is on localhost:1337







_________________________________________________________________________________
## Old readme from starter-pack

1. All components ready to go (including imports)
2. Use main.css - less imports
3. Limit amount of components - better overview
4. React Icons

[react icons] :https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

5. Use constants to avoid repetition.
6. In order to follow along with the video use my backend (url below)

   [strapi backend]:https://github.com/john-smilga/strapi-gatsby-porfolio-2020-api

7. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
