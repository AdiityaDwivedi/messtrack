import { useEffect, useState } from "react";

function AnnouncementModal({
    isOpen,
    onClose,
    onSubmit,
    initialData = null,
    title
}) {

    const [formData, setFormData] = useState({
        title: "",
        message: ""
    });

    useEffect(() => {

        if (initialData) {

            setFormData({
                title: initialData.title,
                message: initialData.message
            });

        } else {

            setFormData({
                title: "",
                message: ""
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

                    <label>Title</label>

                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Announcement title"
                        required
                    />

                    <label>Message</label>

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write the announcement..."
                        rows={6}
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
                            {initialData
                                ? "Update Announcement"
                                : "Publish Announcement"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AnnouncementModal;