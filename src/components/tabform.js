import Profile from "./profile";
import Interest from "./intrests";
import Settings from "./settings";
import { useState } from "react";

export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "Aditya",
    age: 27,
    email: "aditya@gmail.com",
    interests: ["coding", "gym"],
    theme: "Dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "email is not valid";
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select at least one interest";
        }
        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log(data);
  };

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
      <h1>Tabs Form</h1>
      <div className="headings-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tabs-container">
        <ActiveTabComponent data={data} setData={setData} errors={error} />
      </div>

      <div>
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {activeTab === tabs.length - 1 && (
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
