import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(event);
    const newValue = value.trim();
    if (newValue.length <= 1) {
        return;
    }
    // setCategories((categories) => [...categories, value]);
    onNewCategory(newValue);
    setValue('');
  }

  return (
    <>
      <form onSubmit={(event) => onSubmitForm(event)}>
        <input
          type="text"
          placeholder="Escribe la nueva categoria"
          value={value}
          onChange={onChangeInput}
        />
      </form>
    </>
  );
};
