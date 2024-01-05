import { useState } from 'react';
 function NewTodosForm(props) {
    const [item, setItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        props.onSubmit(item);
        setItem("");
    }


    return (
        <>

            <form onSubmit={handleSubmit} className="new-item-form" action="">
                <div className="form-row">
                    <label htmlFor='item'>New item </label>
                    <input value={item} onChange={e => setItem(e.target.value)} type="text" id="item" />
                </div>
                <button className="btn">add</button>
            </form>
        </>
    );
}
export default NewTodosForm;
