import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return;
        }

        setCategories([...categories, newCategory]);
    }

  return (
    <>
    <h1>GiftExpertApp</h1>

    <AddCategory 
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
    />

    {categories.map(c => <GifGrid key={c} category={c} />)}
    </>
  )
}
