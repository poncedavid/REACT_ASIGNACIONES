import { useState } from "react";

// Importamos el componente Input
import Input from "./components/Input";

import "./App.css";

function App() {
  //firstName
  const [firstName, setFirstName] = useState("");
  //lastName
  const [lastName, setLastName] = useState("");
  //email
  const [email, setEmail] = useState("");
  //password
  const [password, setPassword] = useState("");
  //confirmPassword
  const [confirmPassword, setConfirmPassword] = useState("");

  //Constantes para manejar errores.
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");


  const handleFirstNameChange = ({ target }) => {
    setFirstName(target.value);
    firstName.length < 2
      ? setFirstNameError("El campo debe tener al menos 2 caracteres")
      : setFirstNameError("");
  };

  const handleLastNameChange = ({ target }) => {
    setLastName(target.value);
    lastName.length < 10
      ? setLastNameError("El campo debe tener al menos 10 caracteres")
      : setLastNameError("");
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
    email.length < 5
      ? setEmailError("El campo debe tener al menos 5 caracteres")
      : setEmailError("");
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
    password.length < 8
      ? setPasswordError("El campo debe tener al menos 8 caracteres")
      : setPasswordError("");
  };

  const handleConfirmPasswordChange = ({ target }) => {
    setConfirmPassword(target.value);
    password !== target.value
      ? setConfirmPasswordError("Las contraseñas no coinciden")
      : setConfirmPasswordError("");
  };

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-4 offset-md-4">
        
          <form>
            <Input
              label="First Name"
              type="text"
              name="firstname"
              placeholder="Nombre"
              value={firstName}
              handleChange={handleFirstNameChange}
              err={firstNameError}
            />

            <Input
              label="Last Name"
              type="text"
              name="lastname"
              placeholder="Last name"
              value={lastName}
              handleChange={handleLastNameChange}
              err={lastNameError}
            />

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              handleChange={handleEmailChange}
              err={emailError}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              handleChange={handlePasswordChange}
              err={passwordError}
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              handleChange={handleConfirmPasswordChange}
              err={confirmPasswordError}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
