import React from "react";
import { Link } from "react-router-dom";

import { store } from "../..";

function Config() {
  const { value } = store.getState().Auth;
  const { userId } = store.getState().userId;

  return (
    <div>
      <ul>
        <li>
          <Link to="conta">Conta</Link>
        </li>
      </ul>
    </div>
  );
}

export default Config;
