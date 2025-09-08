export default Interests = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleInterestChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  //   console.log(interests);
  return (
    <>
      <div>Interests</div>
      <div>
        <input
          type="checkbox"
          name="coding"
          onChange={handleInterestChange}
          checked={interests.includes("coding")}
        ></input>
        <label>Coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="music"
          onChange={handleInterestChange}
          checked={interests.includes("music")}
        ></input>
        <label>Music</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="gym"
          onChange={handleInterestChange}
          checked={interests.includes("gym")}
        ></input>
        <label>Gym</label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </>
  );
};
