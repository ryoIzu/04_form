import { useState } from "react";

export default function FormRadio() {
  const [form, setForm] = useState({
    os: 'windows'
  });

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const show = () => {
    console.log(`使用OS: ${form.os}`);
  };

  return(
    <form>
      <fieldset>
        <legend>使用OS: </legend>
        <label htmlFor="os_win">windows</label>
        <input 
          id="os_win"
          name="os"
          type="radio"
          value="Windows"
          checked={form.os === 'windows'}
          onChange={handleForm} /><br />

        <label htmlFor="os_mac">mac</label>
        <input 
          id="os_mac"
          name="os"
          type="radio"
          value="mac"
          checked={form.os === 'mac'}
          onChange={handleForm} /><br />

        <label htmlFor="os_lin">linax</label>
        <input 
          id="os_lin"
          name="os"
          type="radio"
          value="linax"
          checked={form.os === 'linax'}
          onChange={handleForm} /><br />
      </fieldset>
      <button type="button" onClick={show}>送信</button>
    </form>
  );
}