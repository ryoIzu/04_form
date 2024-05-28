import { useState } from "react";
import { useImmer } from "use-immer";

export default function StateNestImmer2 () {
  const [form, setForm] = useState({
    name: '田中',
    address: {
      prefecture: 'ふースーヤ',
      city: '寝屋川'
    }
  });

  const handleNest = e => {
    const ns = e.target.name.split(',');
    setForm(form => {
      if(ns.length === 1) {
        form[ns[0]] = e.target.value;
      } else {
        form[ns[0]][ns[1]]=e.target.value;
      }
    })
  }

  const handleForm = e => {
    setForm(form => {
      form[e.target.name] = e.target.value;
    });
  }

  const handleFormNest = e => {
    setForm(form =>{
      form.address[e.target.name] = e.target.value;
    });
  }

  const show = () => {
    console.log(`${form.name}: ${form.address.prefecture}: ${form.address.city}`);
  }

  return(
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleNest}
          value={form.name} 
        />
      </div>
      <div>
        <label htmlFor="name">住所(都道府県)：</label>
        <input
          id="prefecture"
          name="prefecture"
          type="text"
          onChange={handleNest}
          value={form.address.prefecture} 
        />
      </div>
      <div>
        <label htmlFor="name">住所(市区町村))：</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={handleNest}
          value={form.address.city} 
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
    </form>
  );
}