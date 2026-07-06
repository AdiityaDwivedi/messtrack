import { useEffect, useState } from "react";

function MenuModal({
    isOpen,
    onClose,
    onSubmit,
    initialData = null,
    title
}) {

    const [formData, setFormData] = useState({
        day: "",
        breakfast: "",
        lunch: "",
        snacks: "",
        dinner: ""
    });

    useEffect(() => {

        if (initialData) {

            setFormData({
                day: initialData.day,
                breakfast: initialData.breakfast,
                lunch: initialData.lunch,
                snacks: initialData.snacks || "",
                dinner: initialData.dinner
            });

        } else {

            setFormData({
                day: "",
                breakfast: "",
                lunch: "",
                snacks: "",
                dinner: ""
            });

        }

    }, [initialData, isOpen]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(formData);

    };

    if (!isOpen) return null;

    return (

        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="menu-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <h2>{title}</h2>

                <form onSubmit={handleSubmit}>

                    <label>Day</label>

                    <select
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        required
                        disabled={initialData !== null}
                    >
                        <option value="">Select Day</option>
                        <option value="MONDAY">Monday</option>
                        <option value="TUESDAY">Tuesday</option>
                        <option value="WEDNESDAY">Wednesday</option>
                        <option value="THURSDAY">Thursday</option>
                        <option value="FRIDAY">Friday</option>
                        <option value="SATURDAY">Saturday</option>
                        <option value="SUNDAY">Sunday</option>
                    </select>

                    <label>Breakfast</label>

                    <input
                        type="text"
                        name="breakfast"
                        value={formData.breakfast}
                        onChange={handleChange}
                        required
                    />

                    <label>Lunch</label>

                    <input
                        type="text"
                        name="lunch"
                        value={formData.lunch}
                        onChange={handleChange}
                        required
                    />

                    <label>Snacks</label>

                    <input
                        type="text"
                        name="snacks"
                        value={formData.snacks}
                        onChange={handleChange}
                    />

                    <label>Dinner</label>

                    <input
                        type="text"
                        name="dinner"
                        value={formData.dinner}
                        onChange={handleChange}
                        required
                    />

                    <div className="modal-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            {initialData ? "Update Menu" : "Save Menu"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default MenuModal;