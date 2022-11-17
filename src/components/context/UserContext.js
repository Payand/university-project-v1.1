import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  //To get all subjects.
  const [subjects, setSubjects] = useState();
  // To Search subjects base on name and code .
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  //To add Subjects chosen subjects to our list.
  const [added, setAdded] = useState([]);
  //To add login

  //get My subjects from chosenSubject.
  const mysub = (mySubjects) => {
    const finalCourses = mySubjects.filter(
      (mySubject) => mySubject.added === true
    );
    setAdded(finalCourses);
  };
  // To add chosen subject from our suggestion table.
  const chosenSubject = (id) => {
    const updatedSubject = subjects.map((subject) => {
      if (subject.id === id) {
        return { ...subject, added: !subject.added };
      }
      return subject;
    });

    setSubjects(updatedSubject);
    mysub(updatedSubject);
  };
  //Search Logic.
  const searchBar = () => {
    const searchResult = subjects.filter(
      (subject) =>
        subject.subject.toLowerCase() === search.toLowerCase() ||
        subject.code === search ||
        subject.code.includes(search) ||
        subject.subject.toLowerCase().startsWith(search.toLowerCase())
    );
    setResult(searchResult);
  };

  // reset button
  const resetBtn = () => {
    setResult([]);
  };

  // To get data from Api
  const getData = () => {
    const { curriculum } = api;

    setSubjects(curriculum);
  };

  // To call our Api
  useEffect(() => {
    if (!subjects) {
      getData();
    }
    if (search) {
      searchBar();
    }
  }, [subjects, search]);

  return (
    <UserContext.Provider
      value={{
        subjects,
        setSubjects,
        chosenSubject,
        added,
        setSearch,
        searchBar,
        result,
        resetBtn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
