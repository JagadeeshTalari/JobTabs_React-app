import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <h3 className="section loading">Loading....</h3>;
  }
  const { id, title, company, dates, duties } = data[value];
  return (
    <main>
      <section className="section ">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
      </section>
      <div className="jobs-center">
        <section className="btn-container">
          {data.map((item, i) => {
            return (
              <button
                className={`job-btn ${i === value && "active-btn"}`}
                onClick={() => setValue(i)}
              >
                {item.company}
              </button>
            );
          })}
        </section>
        <section key={id} className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          <div>
            {duties.map((duty) => {
              return (
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
          <button className="btn">More Info</button>
        </section>
      </div>
    </main>
  );
}

export default App;
