import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ButtonAccept from "../ButtonComponents/ButtonAccept";
import ButtonDisable from "../ButtonComponents/ButtonDisable";
const ChosenCourses = () => {
  const { added, chosenSubject } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <h2>My Courses:</h2>
        <div className="counter">
          <p>
            count :<span>{added.length}</span>
          </p>
        </div>
        <table>
          <tbody>
            <tr>
              <th>num</th>
              <th>Subjects</th>
              <th>ID</th>
              <th>Action</th>
            </tr>
            {added.length ? (
              added.map((subject, index) => (
                <tr
                  className={subject.added ? "green-table" : "blue-table"}
                  key={subject.id}
                >
                  <td>{index + 1}</td>
                  <td>{subject.subject}</td>
                  <td>{subject.code}</td>
                  <td>
                    {subject.added ? (
                      <button onClick={() => chosenSubject(subject.id)}>
                        Remove
                      </button>
                    ) : (
                      <button onClick={() => chosenSubject(subject.id)}>
                        Add
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="blue-table">
                <td></td>
                <td>You haven't chosne any courses</td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="submit-button">
          {added.length > 1 ? <ButtonAccept /> : <ButtonDisable />}
        </div>
      </div>
    </>
  );
};
export default ChosenCourses;
