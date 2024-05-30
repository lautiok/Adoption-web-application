
# Adoption web application😺🐶

This website is dedicated to pet adoption. Their goals are to increase online visibility so that animals can be adopted and find a family as soon as possible. To achieve this, we have followed good SEO (Search Engine Positioning) development and optimization practices, ensuring that the search is quick and easy.

The website is intuitive and easy to use. The home page is focused squarely on adoption, so users will see our pets up for adoption as soon as they enter the site.

Clicking the Adopt button next to a pet will open a view with detailed information about it. If the user decides to adopt, they will be directed to a contact form, where they will be asked to enter their contact details and a brief description of why they wish to adopt the selected pet.


## Development

We handle the complete development of the website, both the backend and the frontend. For the frontend, we use React.js, and for the backend, we use Node.js. Below are the technologies employed:

- Express: Framework for building web applications and APIs.
- Mongoose: ODM (Object Data Modeling) for MongoDB, facilitating interaction with the database.
- bcrypt: Library for password hashing.
- Cloudinary: Image management and storage service.
- cookie-parser: Middleware for handling cookies.
- cors: Middleware to enable CORS (Cross-Origin Resource Sharing).
- express-fileupload: Middleware for uploading files.
- fs: Module for working with the file system.
- jsonwebtoken: Library for generating and verifying JWT (JSON Web Tokens) tokens.
- zod: Library for validation and definition of data schemas.

Frontend:

- axios: HTTP client for making requests to the API.
- cookie: Tool for handling cookies in the browser.
- formik: Library for managing forms in React.
- yup: Schema validation library, used together with Formik.
- react-hook-form: Library for forms, optimized for state management and validation.
- react-router-dom: Tool for handling routing in React applications.
- react-select: Component for creating customizable selectors in forms.

## Install project

Clone repository
```bash
  git repo clone lautiok/adoption
```

Install dependencies

```bash
  npm install
```

Run project

```bash
  npm run dev
```


## Website development

Create Adoption (createAdopt):

When a POST request is made to the /api/pets route, the createAdopt function is executed. This function receives the data of the pet to be adopted from the request body (req.body), including name, age, gender, type, description, and status. If an image of the pet is provided, it is uploaded through the uploadImage function, stored in the cloud, and the URL is saved in the database. A new adoption record is created in the database using the provided data. An HTTP 201 response is returned with the details of the created adoption.

Get All Adoptions (getAdopts):

When a GET request is made to the /api/pets route, the getAdopts function is executed. This function searches for all pet adoptions in the database using the Adopt model. It returns an HTTP 200 response with the list of all adoptions found.

Get Specific Adoption (getAdopt):

When a GET request is made to the /api/pets/
route, the getAdopt function is executed. This function searches for a specific adoption by its ID in the database using the Adopt model. It returns an HTTP 200 response with the details of the found adoption.

Update Adoption (updateAdopt):

When a PUT request is made to the /api/pets/
route, the updateAdopt function is executed. This function updates the details of a specific adoption based on the data provided in the request body (req.body). It returns an HTTP 200 response with the updated details of the adoption.

Delete Adoption (deleteAdopt):

When a DELETE request is made to the /api/pets/
route, the deleteAdopt function is executed. This function deletes a specific adoption by its ID from the database using the Adopt model. If the adoption has an associated image, it is also deleted from the cloud using the deleteImage function. It returns an HTTP 200 response with the details of the deleted adoption.

User Registration (register):

When a POST request is made to the /api/session/register route, the register function is executed. This function receives the data of name, email, and password of the new user from the request body (req.body). It checks if the email is already registered in the database. If it already exists, it returns an error. It encrypts the user's password using bcrypt and saves the new user in the database. It generates an access token using the createAccessToken function and saves it in a cookie. It returns a JSON response with the details of the registered user.

Login (login):

When a POST request is made to the /api/session/login route, the login function is executed. This function receives the user's email and password from the request body (req.body). It searches for the user in the database by their email. If not found, it returns an error. It compares the provided password with the password stored in the database using bcrypt. If they do not match, it returns an error. It generates an access token and saves it in a cookie. It returns a JSON response with the details of the user who has logged in.

Logout (logout):

When a POST request is made to the /api/session/logout route, the logout function is executed. It deletes the cookie containing the access token, effectively logging out the user. It returns an HTTP 200 status code.

User Profile (profile):

When a GET request is made to the /api/session/profile route, the profile function is executed. This function verifies if the user is authenticated using a middleware called authRequired. It searches for the user in the database using the ID stored in the req.user.id property. It returns a JSON response with the details of the found user.

Token Verification (verifyToken):

When a GET request is made to the /api/session/verify route, the verifyToken function is executed. This function verifies if there is an access token present in the request cookies. If the token is present, it verifies its validity using the jsonwebtoken module and the secret key defined in process.env.JWT_SECRET. If the token is valid, it searches for and returns the details of the user in the database. If no valid token or associated user is found, it returns an HTTP 401 status code.

Create Confirmed Adoption (createAdopted):

When a POST request is made to the /api/adopted route, the createAdopted function is executed. This function receives the data of the pet's name from the request body (req.body). If an image of the pet is provided, it is uploaded through the uploadImage function, stored in the cloud, and the URL is saved in the database. A new record of confirmed adoption is created in the database using the provided data. It returns an HTTP 201 response with the details of the created confirmed adoption.

Get All Confirmed Adoptions (getAdopted):

When a GET request is made to the /api/adopted route, the getAdopted function is executed. This function searches for all confirmed pet adoptions in the database using the Adopted model. It returns an HTTP 200 response with the list of all confirmed adoptions found.

Delete Confirmed Adoption (deleteAdopted):

When a DELETE request is made to the /api/adopted/
route, the deleteAdopted function is executed. This function deletes a specific confirmed adoption by its ID from the database using the Adopted model. If the confirmed adoption has an associated image, it is also deleted from the cloud using the deleteImage function. It returns an HTTP 200 response with the details of the deleted confirmed adoption.

Create New Adoption (createNewAdopted):

When a POST request is made to the /api/newadopted route, the createNewAdopted function is executed. This function receives the data of name, email, phone, message, and pet ID from the request body (req.body). It creates a new record of adoption request in the database using the provided data. It returns an HTTP 201 response with the details of the newly created adoption request.

Get All New Adoptions (getNewAdopted):

When a GET request is made to the /api/newadopted route, the getNewAdopted function is executed. This function searches for all new pet adoption requests in the database using the NewAdopted model. It returns an HTTP 200 response with the list of all new adoption requests found.

Delete New Adoption (deleteNewAdopted):

When a DELETE request is made to the /api/newadopted/
route, the deleteNewAdopted function is executed. This function deletes a specific new adoption request by its ID from the database using the NewAdopted model. It returns an HTTP 200 response with the details of the deleted new adoption request.



## Authors

- [Nahuel Guerra](https://www.nahuelguerra.com.ar)

