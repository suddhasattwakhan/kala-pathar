import React, { useState } from 'react';

const countries = ['USA', 'Canada', 'UK', 'Australia', 'Other'];
const languages = ['English', 'Spanish', 'French', 'German', 'Other'];

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [language, setLanguage] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, like sending the data to a server
    console.log({
      fullName,
      email,
      country,
      state,
      city,
      language,
      income,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Select a language</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="income">Income</label>
        <input
          type="range"
          id="income"
          min="0"
          max="100000"
          step="1000"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <output>{income}</output>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
