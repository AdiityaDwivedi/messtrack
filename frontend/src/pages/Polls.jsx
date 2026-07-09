import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PollItem from "../components/poll/PollItem";
import PollModal from "../components/poll/PollModal";

import { useAuth } from "../context/AuthContext";

import {
    getPolls,
    createPoll,
    deletePoll,
    vote
} from "../services/pollService";

import toast from "react-hot-toast";

import {
    FaPoll,
    FaPlus
} from "react-icons/fa";

import "../styles/Poll.css";

function Polls() {

    const { user } = useAuth();

    const [polls, setPolls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        if (!user) return;

        loadPolls();

    }, [user]);

    const loadPolls = async () => {

        try {

            setLoading(true);

            const response = await getPolls(
                user.collegeName,
                user.hostelName
            );

            setPolls(response.data);

        } catch (error) {

            console.error(error);
            setPolls([]);

        } finally {

            setLoading(false);

        }

    };

    const handleCreatePoll = async (formData) => {

        try {

            await createPoll({

                ...formData,

                collegeName: user.collegeName,
                hostelName: user.hostelName

            });

            toast.success("Poll created.");

            setShowModal(false);

            await loadPolls();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to create poll."
            );

        }

    };

    const handleVote = async (pollId, option) => {

        try {

            await vote(pollId, option);

            toast.success("Vote submitted.");

            await loadPolls();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to vote."
            );

        }

    };

    const handleDelete = async (poll) => {

        try {

            await deletePoll(poll.id);

            toast.success("Poll deleted.");

            await loadPolls();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to delete poll."
            );

        }

    };

    const isAdmin =
        user.role === "HOSTEL_ADMIN" ||
        user.role === "SUPER_ADMIN";

    return (

        <DashboardLayout>

            <div className="page-header">

                <div className="page-title">

                    <FaPoll className="page-icon" />

                    <h1>Polls</h1>

                </div>

                {isAdmin && (

                    <button
                        className="add-btn"
                        onClick={() => setShowModal(true)}
                    >
                        <FaPlus />
                        Create Poll
                    </button>

                )}

            </div>

            {loading ? (

                <div className="empty-state">

                    <h2>Loading...</h2>

                </div>

            ) : polls.length === 0 ? (

                <div className="empty-state">

                    <h2>No Polls</h2>

                    <p>No polls available.</p>

                </div>

            ) : (

                <div className="poll-list">

                    {polls.map(poll => (

                        <PollItem
                            key={poll.id}
                            poll={poll}
                            isAdmin={isAdmin}
                            onVote={handleVote}
                            onDelete={handleDelete}
                        />

                    ))}

                </div>

            )}

            <PollModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleCreatePoll}
            />

        </DashboardLayout>

    );

}

export default Polls;