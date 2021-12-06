import { login } from '../utilities/index'

const signInURL = "http://localhost:3001/signin";

const signIn = (obj) => {
  fetch(signInURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      login(data)
      // < Redirect to='/dashboard' />
    })
    .catch((error) => {
        console.error('error:', error)
    });
};

export default signIn;
