import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SuggestedCourses = () => {
  const { subjects, chosenSubject } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <h2>Suggested:</h2>

        <table>
          <tbody>
            <tr>
              <th>num</th>
              <th>Subjects</th>
              <th>ID</th>
              <th>Action</th>
            </tr>
            {subjects ? (
              subjects
                .map((subject, index) => (
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
                .splice(5, 5)
            ) : (
              <tr>
                <td>loading...</td>
                <td>loading...</td>
                <td>loading...</td>
                <td>loading...</td>
              </tr>
            )}
          </tbody>
        </table>
        <hr />
      </div>
    </>
  );
};

export default SuggestedCourses;
