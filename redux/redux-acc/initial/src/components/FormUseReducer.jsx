import { useReducer } from 'react';
import { initialState, reducer } from '../state/formReducer';

export default function FormUseReducer() {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="flex flex-col gap-2 w-1/2 mx-auto mt-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Name"
        className="border p-1 focus:outline-none"
        onBlur={(e) => dispatch({ type: 'name', payload: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-1 focus:outline-none"
        onBlur={(e) => dispatch({ type: 'email', payload: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-1 focus:outline-none"
        onBlur={(e) => dispatch({ type: 'password', payload: e.target.value })}
      />
      <div className="flex items-center gap-2">
        <input type="checkbox" onClick={() => dispatch({ type: 'agree' })} />
        <span>I agree to all terms and conditions</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            id="male"
            onClick={() => dispatch({ type: 'gender', payload: 'male' })}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            id="female"
            onClick={() => dispatch({ type: 'gender', payload: 'female' })}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            id="other"
            onClick={(e) => dispatch({ type: e.target.name, payload: 'other' })}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="education">Education :</label>
        <select
          name="education"
          id="education"
          className="focus:outline-none"
          onChange={(e) =>
            dispatch({ type: e.target.name, payload: e.target.value })
          }
        >
          <option value="psc">PSC</option>
          <option value="jsc">JSC</option>
          <option value="ssc">SSC</option>
        </select>
      </div>
      <button type="submit" className="bg-violet-500 px-4 py-1 text-white">
        Submit
      </button>
    </form>
  );
}
