import { useState } from "react";
import TextAreaForm from "./TextAreaForm";
import SelectForm from "./SelectForm";
function NameForm(props)
{
  const [value, setValue] = useState('');
  const handleChange = (event) =>
  {
    setValue(event.target.value.toUpperCase());
    props.func(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) =>
  {
    alert(`입력한 이름: ${value}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
function App()
{
  const [name, setName] = useState('');
  function inputName(value)
  {
    setName(value);
  }
  return (
    <div className="App">
      <NameForm func={inputName} />
      <TextAreaForm />
      <SelectForm />
      <hr />
      이름: {name}, 요청사항: ???, 과일: ???
      <hr />
      <Signup />
    </div>
  );
}

const Signup = () =>
{
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');
  return (
    <div>
      <lable htmlfor='name'>이름: </lable>
      <input type='text' id='name' onChange={(e) =>
      {
        setName(e.target.value);
      }} value={name} />

      <label htmlFor='gender'>성별: </label>
      <select id='gender' value={gender} onChange={(e) =>
      {
        const idx = e.target.selectedIndex;
        console.log(e);
        const value = e.target[idx].value;
        setGender(value);
      }}>
        <option value='male'>남자</option>
        <option value='female'>여자</option>
      </select>

      <button onClick={() =>
      {
        alert(`${name}, ${gender}`);
      }}>제출</button>
    </div>
  );
};

export default App;
