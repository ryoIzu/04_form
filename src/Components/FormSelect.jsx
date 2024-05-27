import { useState } from "react";

export default function FormSelect() {
  const [form, setForm] = useState({
    animal: 'dog'
  });
  const handleForm = e => {
    setForm( {
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const show = () => {
    console.log(`好きな動物は${form.animal}`);
  };

  return(
    <form>
      <label htmlFor="animal">好きな動物：</label>
      <select 
        id="animal" 
        name="animal"
        value={form.animal}
        onChange={handleForm}>
          <option value="犬">犬</option>
          <option value="猫">猫</option>
          <option value="ハムスター">ハムスター</option>
          <option value="うさぎ">うさぎ</option>
        </select>
        <button type="button" onClick={show}>送信</button>
    </form> 
  );
}