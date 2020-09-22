import NameListItem from "./NameListItem";
import React, { useState, useEffect } from "react";

function NameList() {
  const [loadData, setLoadData] = useState(new Date());
  const [nameList, setNameList] = useState([
    {
      id: "1",
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      location: {
        street: "9278 new road",
        city: "kilcoole",
      },
      email: "brad.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
    {
      id: "2",
      name: {
        title: "Hello",
        first: "Andrew",
        last: "russel",
      },
      location: {
        street: "galle rd",
        city: "Kaluthara",
      },
      email: "AS@example.com",
      dob: {
        date: "1995-07-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/74.jpg",
      },
    },
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api ")
      .then((res) => {
        return res.json();
      })
      .then((responsedata) => {
        setNameList(nameList=>[...nameList,responsedata.results[0]]);
      });
  } ,[loadData]);



  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={aName.name.first}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    setLoadData(new Date());
  };

  return (
    <React.Fragment>
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={addUserHandler}>
          {" "}
          AddName
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}

export default NameList;
