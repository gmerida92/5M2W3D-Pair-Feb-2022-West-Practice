import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

function Match() {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  console.log(sign);
  return (
    <>
      <button
        onClick={() => {
          setMatch(!match);
        }}
      >
        Match
      </button>
      {match ? <div>{sign.match}</div> : null}
    </>
  );
}

export default Match;
