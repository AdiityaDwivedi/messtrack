import { useEffect, useState } from "react";

function PollModal({
    isOpen,
    onClose,
    onSubmit
}) {

    const [formData, setFormData] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        expiryDate: ""
    });

    useEffect(() => {

        if (isOpen) {

            setFormData({
                question: "",
                option1: "",
                option2: "",
                option3: "",
                expiryDate: ""
            });

        }

    }, [isOpen]);

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

                <h2>Create Poll</h2>

                <form onSubmit={handleSubmit}>

                    <label>Question</label>

                    <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        required
                    />

                    <label>Option 1</label>

                    <input
                        type="text"
                        name="option1"
                        value={formData.option1}
                        onChange={handleChange}
                        required
                    />

                    <label>Option 2</label>

                    <input
                        type="text"
                        name="option2"
                        value={formData.option2}
                        onChange={handleChange}
                        required
                    />

                    <label>Option 3</label>

                    <input
                        type="text"
                        name="option3"
                        value={formData.option3}
                        onChange={handleChange}
                        required
                    />

                    <label>Expiry Date</label>

                    <input
                        type="date"
                        name="expiryDate"
                        value={formData.expiryDate}
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
                            Create Poll
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default PollModal;