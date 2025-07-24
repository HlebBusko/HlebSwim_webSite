import { useRef, useState } from 'react';
import ButtonMain from '../ui/ButtonMain';

function EnrollTraining() {
  const [split, setSplit] = useState(null);
  const [select, setSelect] = useState(null);
  const successId = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    fields: {
      name: '',
      birth: '',
      goal: '',
      phone: '',
    },
    errors: {},
  });
  const [splitFormData, setSplitFormData] = useState({
    fields: {
      name2: '',
      birth2: '',
    },
    errors: {},
  });

  function handleSelectChange(e) {
    const value = e.target.value === 'true';
    setSplit(value);

    setSelect(false);
  }

  function handleInputs(e) {
    const { value, id } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      fields: {
        ...prevData.fields,
        [id]: value,
      },
    }));
  }

  function handleSplitInputs(e) {
    const { id, value } = e.target;

    setSplitFormData((prev) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [id]: value,
      },
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};
    const newSplitErrors = {};

    if (!formData.fields.name) {
      newErrors.name = true;
      isValid = false;
    }
    if (!formData.fields.birth) {
      newErrors.birth = true;
      isValid = false;
    }
    if (!formData.fields.goal) {
      newErrors.goal = true;
      isValid = false;
    }
    if (!formData.fields.phone) {
      newErrors.phone = true;
      isValid = false;
    }

    if (select === null) {
      isValid = false;
    }

    if (split) {
      if (!splitFormData.fields.name2) {
        newSplitErrors.name2 = true;
        isValid = false;
      }
      if (!splitFormData.fields.birth2) {
        newSplitErrors.birth2 = true;
        isValid = false;
      }
    }

    setFormData((prev) => ({
      ...prev,
      errors: newErrors,
    }));

    setSplitFormData((prev) => ({
      ...prev,
      errors: newSplitErrors,
    }));

    if (split === null) {
      setSelect(true);
    }

    if (!isValid) return;

    setShowConfirmation(true);
    setFormData({
      fields: {
        name: '',
        birth: '',
        goal: '',
        phone: '',
      },
      errors: {},
    });
    setSplitFormData({
      fields: {
        name2: '',
        birth2: '',
      },
      errors: {},
    });
    setSplit(null);

    if (successId.current) {
      clearTimeout(successId.current);
    }

    successId.current = setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  }

  const fields = [
    {
      name: 'Type of lesson',
      id: 'select',
      type: 'select',
      placeholder: 'Choose the type of lesson',
      options: [
        { option: 'Individual lesson', split: false },
        { option: 'Split lesson', split: true },
      ],
    },
    {
      name: 'First name',
      id: 'name',
      type: 'text',
      placeholder: `${split ? `First person's first name` : `Type your first name`}`,
    },
    {
      name: 'Day of birth',
      id: 'birth',
      type: 'date',
      placeholder: 'Type your birthday',
    },
    {
      name: 'Your goal',
      id: 'goal',
      type: 'text',
      placeholder: 'What you want to achieve during the lessons?',
    },
    {
      name: 'Your phone number',
      id: 'phone',
      type: 'text',
      placeholder: 'Type your phone number',
    },
  ];

  const splitFields = [
    {
      name: 'First name',
      id: 'name2',
      type: 'text',
      placeholder: `Second person's first name`,
    },
    {
      name: 'Day of birth',
      id: 'birth2',
      type: 'date',
      placeholder: `Second person's birthday`,
    },
  ];

  const steps = [
    '1.Choose the lesson you want to take',
    '2.Fill all the fields',
    '3.Wait for my call where i explain you all the details',
  ];

  return (
    <form
      id="enroll"
      onSubmit={handleSubmit}
      className="lg:px-16 sm:px-8 px-4 w-full py-8 flex flex-col gap-2"
    >
      <div className="border-2 border-main shadow px-6 py-4 rounded-lg">
        <div>
          <div className="text-lg mb-1">How to easy enroll on classes:</div>
          <ul className="pb-4">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div>
          {fields.map((field) => (
            <div key={field.id}>
              {field.type === 'select' ? (
                <div className="flex flex-col mb-2">
                  <label htmlFor={field.id}>{field.name}</label>
                  <select
                    className={`${select ? 'bg-red-100' : ''} w-full border p-2 rounded-lg `}
                    name=""
                    value={split === null ? '' : split}
                    id={field.id}
                    onChange={(e) => handleSelectChange(e)}
                  >
                    <option value="" disabled hidden>
                      {field.placeholder}
                    </option>
                    {field.options.map((option, i) => (
                      <option value={option.split} key={i}>
                        {option.option}
                      </option>
                    ))}
                  </select>
                  {select && (
                    <div className={`text-red-500`}>
                      {field.name} is required
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full flex flex-col mb-2">
                  <label htmlFor={field.id}>{field.name}</label>
                  <div className="w-full">
                    <input
                      onChange={(e) => handleInputs(e)}
                      className={` ${formData.errors[field.id] ? 'bg-red-100' : ''} ${formData.fields[field.id] ? 'bg-white' : ''} border p-2 rounded-lg w-full`}
                      type={field.type}
                      placeholder={field.placeholder}
                      id={field.id}
                      value={formData.fields[field.id]}
                    />
                    <div
                      className={`${formData.errors[field.id] ? 'block' : 'hidden'} ${formData.fields[field.id] ? 'hidden' : 'block'} text-red-500`}
                    >
                      {field.name} is required
                    </div>
                  </div>
                </div>
              )}
              {field.id === 'birth' && split
                ? splitFields.map((field) => (
                    <div className="flex flex-col mb-2" key={field.id}>
                      <label htmlFor={field.id}>{field.name}</label>
                      <div className="w-full">
                        <input
                          className={`${formData.errors[field.id] ? 'bg-red-100' : ''} ${formData.fields[field.id] ? 'bg-white' : ''} border p-2 rounded-lg w-full`}
                          type={field.type}
                          placeholder={field.placeholder}
                          id={field.id}
                          onChange={(e) => handleSplitInputs(e)}
                          value={splitFormData.fields[field.id]}
                        />
                        <div
                          className={`${splitFormData.errors[field.id] ? 'block' : 'hidden'} ${splitFormData.fields[field.id] ? 'hidden' : 'block'} text-red-500`}
                        >
                          {field.name} is required
                        </div>
                      </div>
                    </div>
                  ))
                : ''}
            </div>
          ))}
          <div className="w-full h-20 flex flex-col">
            <div
              className={`${showConfirmation ? 'block' : 'hidden'} text-green-500 flex gap-2`}
            >
              <img className="w-6" src="./src/assets/checkmark.png" alt="" />
              <div>Form succesfully submitted. Please wait for my call</div>
            </div>
            <ButtonMain
              type="submit"
              className="mt-auto bg-main text-white hover:bg-white border-main hover:text-main shadow-lg py-2 w-full h-[55%]"
            >
              Submit
            </ButtonMain>
          </div>
        </div>
      </div>
    </form>
  );
}
export default EnrollTraining;
