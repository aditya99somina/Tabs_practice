export default Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleThemeChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };

  return (
    <>
      <div>Settings</div>
      <div>
        <input
          type="radio"
          name="Dark"
          checked={theme === "Dark"}
          onChange={handleThemeChange}
        ></input>
        <label>Dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="Light"
          checked={theme === "Light"}
          onChange={handleThemeChange}
        ></input>
        <label>Light</label>
      </div>
    </>
  );
};
