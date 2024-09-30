import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState("");
  const [newHours, setNewHours] = useState("");

  

  const addSubject = () => {
    if (newSubject && newHours) {
      const updatedSubjects = [
        ...subjects,
        { subject: newSubject, hours: parseInt(newHours) },
      ];
      setSubjects(updatedSubjects);
      setNewSubject("");
      setNewHours("");

      localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
    }
  };

  const increaseHours = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].hours += 1;
    setSubjects(updatedSubjects);

    localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
  };

  const decreaseHours = (index) => {
    const updatedSubjects = [...subjects];
    if (updatedSubjects[index].hours > 0) {
      updatedSubjects[index].hours -= 2;
      setSubjects(updatedSubjects);

      localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    }
  };

  return (
    <>
      <div className={styles.head}>
        <div className={styles.sub}>
          <h1>GeekStar Education Planner</h1>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Subject"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
            />
            <input
              type="number"
              placeholder="Hours"
              value={newHours}
              onChange={(e) => setNewHours(e.target.value)}
            />
            <button onClick={addSubject} className={styles.btn}>
              Add
            </button>
          </div>
          {subjects.map((subject, index) => (
            <div key={index} className={styles.addSub}>
              <div>
                Subject= {subject.subject} & Hours= {subject.hours}
              </div>
              <button onClick={() => increaseHours(index)} className={styles.btn1}>+</button>
              <button onClick={() => decreaseHours(index)} className={styles.btn2}>-</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
