import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCards.css";
import database from "./fireBase";

function TinderCards() {
  // useEffect piece of code which runs based on condition.
  // parms-> function to run, condition ([]-> means that it will run one time only)
  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      // cleanup for the listners
      unsubscribe();
    };
  }, []);

  /*
BAD
const people = [];
people.push('shubh', 'samar');

GOOD(Push to an array in REACT)
setPeople([...people, 'shubh', 'samar']);

*/
  const [people, setPeople] = useState([]);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name}>
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
