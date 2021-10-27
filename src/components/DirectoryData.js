// import React from 'react';

import { getSchoolDocument } from "../firebase";
import firebase from "firebase";

const DirectoryData = () => {


  function snapshotToArray(snapshot) {
    var returnArr = [];
  
    snapshot.forEach(function (childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
  
      returnArr.push(item);
    });
  
    return returnArr;
  }
  
  const data = [
    { id: 0, name: "Tech Club", description: "this is tech club" },
  ];
  
  firebase
    .database()
    .ref("/Schools")
    .on("value", function (snapshot) {
      data.push(snapshotToArray(snapshot));
    });

}





// export const directoryData = [
//     { id: 0, name: "Tech Club", Description: "this is tech club" },
//     { id: 1, name: "Writer's Block", Description: "this is WB club" },
//     { id: 2, name: "MUSE", Description: "this is MUSE club" },
//     { id: 3, name: "Biology Olympiad", Description: "this is BIOLY club" },
//     { id: 4, name: "Tech Club", Description: "this is tech club" },
//     { id: 5, name: "Writer's Block", Description: "this is WB club" },
//     { id: 6, name: "MUSE", Description: "this is MUSE club" },
//     { id: 7, name: "Biology Olympiad", Description: "this is BIOLY club" },
//     { id: 8, name: "Tech Club", Description: "this is tech club" },

//   ];
