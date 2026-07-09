import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import AnnouncementItem from "../components/announcement/AnnouncementItem";
import AnnouncementModal from "../components/announcement/AnnouncementModal";

import { useAuth } from "../context/AuthContext";

import toast from "react-hot-toast";
import "../styles/Announcement.css";

import {
    FaBullhorn,
    FaPlus
} from "react-icons/fa";

import {
    getAnnouncements,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement
} from "../services/announcementService";

import "../styles/Announcement.css";

function Announcements() {

    const { user } = useAuth();

    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    useEffect(() => {

        if (!user) return;

        loadAnnouncements();

    }, [user]);

    const loadAnnouncements = async () => {

        try {

            setLoading(true);

            const response = await getAnnouncements(
                user.collegeName,
                user.hostelName
            );

            const sorted = [...response.data].sort(
                (a, b) =>
                    new Date(b.createdDate) -
                    new Date(a.createdDate)
            );

            setAnnouncements(sorted);

        } catch (error) {

            console.error(error);
            setAnnouncements([]);

        } finally {

            setLoading(false);

        }

    };

    const handleCreateAnnouncement = async (formData) => {

        try {

            await createAnnouncement({

                ...formData,

                collegeName: user.collegeName,
                hostelName: user.hostelName

            });

            toast.success("Announcement published.");

            closeModal();

            await loadAnnouncements();

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Unable to publish announcement."
            );

        }

    };

    const handleUpdateAnnouncement = async (formData) => {

        try {

            await updateAnnouncement(
                selectedAnnouncement.id,
                {

                    ...formData,

                    collegeName: user.collegeName,
                    hostelName: user.hostelName

                }
            );

            toast.success("Announcement updated.");

            closeModal();

            await loadAnnouncements();

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Unable to update announcement."
            );

        }

    };

    const handleDeleteAnnouncement = async (announcement) => {

        try {

            await deleteAnnouncement(announcement.id);

            toast.success("Announcement deleted.");

            await loadAnnouncements();

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Unable to delete announcement."
            );

        }

    };

    const openCreateModal = () => {

        setSelectedAnnouncement(null);
        setShowModal(true);

    };

    const openEditModal = (announcement) => {

        setSelectedAnnouncement(announcement);
        setShowModal(true);

    };

    const closeModal = () => {

        setSelectedAnnouncement(null);
        setShowModal(false);

    };

    const isAdmin =
        user.role === "HOSTEL_ADMIN" ||
        user.role === "SUPER_ADMIN";

    return (

        <DashboardLayout>

            <div className="page-header">

                <div className="page-title">

                    <FaBullhorn className="page-icon" />

                    <h1>Announcements</h1>

                </div>

                {isAdmin && (

                    <button
                        className="add-menu-btn"
                        onClick={openCreateModal}
                    >

                        <FaPlus />

                        New Announcement

                    </button>

                )}

            </div>

            {loading ? (

                <div className="empty-state">

                    <h2>Loading...</h2>

                </div>

            ) : announcements.length === 0 ? (

                <div className="empty-state">

                    <h2>No Announcements</h2>

                    <p>

                        No announcements have been posted yet.

                    </p>

                </div>

            ) : (

                  <div className="announcement-list">

                    {announcements.map((announcement) => (

                        <AnnouncementItem
                            key={announcement.id}
                            announcement={announcement}
                            isAdmin={isAdmin}
                            onEdit={openEditModal}
                            onDelete={handleDeleteAnnouncement}
                        />

                    ))}

                </div>

            )}

            <AnnouncementModal
                isOpen={showModal}
                onClose={closeModal}
                initialData={selectedAnnouncement}
                title={
                    selectedAnnouncement
                        ? "Edit Announcement"
                        : "New Announcement"
                }
                onSubmit={
                    selectedAnnouncement
                        ? handleUpdateAnnouncement
                        : handleCreateAnnouncement
                }
            />

        </DashboardLayout>

    );

}

export default Announcements;