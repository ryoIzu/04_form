import { useState } from "react";

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    animal: ['犬', '猫', '猿', '雉']
  });

  const handleFormMulti = e => {
    const fa = form.animal;
    console.log(fa);
    if(e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value),1);
    }
    setForm({
      ...form,
      [e.target.name]: fa
    });
  };

  const show =()=> {
    console.log(`好きな動物は${form.animal}`);
  };

  return(
    <form>
      <fieldset>
        <legend>好きな動物：</legend>
        <label htmlFor="animal_dog">犬</label>
        <input id="animal_dog" name="animal" type="checkbox" value="犬"
        checked={form.animal.includes('犬')}
        onChange={handleFormMulti} /><br />

        <label htmlFor="animal_cat">猫</label>
        <input id="animal_cat" name="animal" type="checkbox" value="猫"
        checked={form.animal.includes('猫')}
        onChange={handleFormMulti} /><br />

        <label htmlFor="animal_saru">猿</label>
        <input id="animal_saru" name="animal" type="checkbox" value="猿"
        checked={form.animal.includes('猿')}
        onChange={handleFormMulti} /><br />

        <label htmlFor="animal_kiji">雉</label>
        <input id="animal_kiji" name="animal" type="checkbox" value="雉"
        checked={form.animal.includes('雉')}
        onChange={handleFormMulti} /><br />
      </fieldset>
      <button type="button" onClick={show}>送信</button>
    </form>
  );
}