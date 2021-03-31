<div align="center">
  <img alt="Logo" src="https://artyst-app.vercel.app/assets/logo.svg" width="100" />
</div>
<br>
<p align="center">
  <a href="https://artyst-app.vercel.app/" target="_blank">artyst-app.vercel.app/</a> built with <a href="https://angular.io/" target="_blank">Angular</a> and hosted with <a href="https://www.vercel.com/" target="_blank">vercel</a>
</p>


## 🛠 Installation & Set Up

1. Install the Angular CLI

   ```sh
   npm install -g @angular/cli
   ```

3. Install dependencies

   ```sh
   npm i
   ```

4. Start the development server

   ```sh
   ng serve & Navigate to `http://localhost:4200/
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
   ```

1. Preview the site as it will appear once deployed

   ```sh
   Go to the /dist directory and run command `ng serve`
   ```

## Deployment Strategy

I setup a CI/CD pipeline using vercel which deploys every branch so you can test it live, after pushing the changes into remote repository.

## About the Application

I make a get request to the provided API and after that cache the artists in the local storage so when the next time it checks for the same artist, it display it directly from the local storage so it doesn't have to make a request to the server

## Frontend

I designed the front-end using tailwind CSS.
