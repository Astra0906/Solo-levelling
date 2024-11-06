import React from 'react'
import "./styles.css";
import CheckBox from "react-animated-checkbox";
import { useState } from "react";

const Checkbx = () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="App">
        <h1>Hello world</h1>
        <CheckBox
          checked={checked}
          checkBoxStyle={{
            checkedColor: "#34b93d",
            size: 100,
            unCheckedColor: "#b8b8b8"
          }}
          duration={400}
          onClick={() => setChecked(true)}
        />
      </div>)
}

export default Checkbx