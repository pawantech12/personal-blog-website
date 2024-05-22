
# Blog Website - Frontend with ReactJS, Vite & Tailwind CSS

 This is a modern and responsive blog website built with ReactJS, Vite, and Tailwind CSS. It boasts a user-friendly interface and features dynamic content loading from local JSON files.


## Demo

https://github.com/pawantech12/personal-blog-website/assets/118673866/3c3a0d35-38c0-4a7f-9c68-e2fd15d32505

## Project Pages and Components:

### Multiple Pages:
- Home: Displays featured posts and latest posts.
- Tags: Filters posts by tags.
- Authors: Displays posts by authors.
- Archive: Lists posts chronologically.
- Contact: Provides contact information.
- Single Blog Post: Displays detailed content for each post.

### Modular Components:
- archiveDropdown: Simplifies archive navigation.
- featuredpost: Highlights prominent posts on the homepage.
- featuredpostcard: Creates visually appealing cards for featured posts.
- footer: Presents essential site information at the bottom.
- navbar: Enables navigation between major pages.
- latestpost: Showcases recent posts on the homepage.
- latestpostcard: Designs attractive cards for latest posts.
- subscribe: Offers a subscription form for users.


## Frontend Stack

**ReactJS:** JavaScript library for building user interfaces.

**Vite:** Build tool for optimizing development and production builds.

**Tailwind CSS:** Utility-first CSS framework for rapid styling.


## Data Source:
JSON file located in the data directory store post and author information.




## Installation

#### 1. Clone the Repository:

```bash
  git clone https://github.com/pawantech12/personal-blog-website.git
```

#### 2. Navigate to  Directory:

```bash
  cd personal-blog-website-master
```

#### 3. Install Dependencies:

```bash
  npm install or npm i
  (or `yarn install` if you prefer Yarn)
```

#### 4. Start the development server:

```bash
  npm run dev
``` (or `yarn dev`)
This will usually start the server on http://localhost:5173 by default.
```
## Customization:

- The website uses Tailwind CSS for styling. You can customize the styles by modifying the tailwind.config.js file or adding custom CSS in the src/styles directory.
- You can extend the components or create new ones to enhance the website's functionality as needed.
- Update the JSON data in the data directory with your actual blog post and author information.


## Deployment

#### 1. Build the production-ready website:

```bash
  npm run build (or `yarn build`)
``` 

#### 2. Deploy website:

Deploy the generated static files to a hosting platform that supports frontend applications (e.g., Netlify, Vercel, GitHub Pages).
