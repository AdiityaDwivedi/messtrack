package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.PollDTO;
import com.aditya.messtrack.entity.Poll;
import com.aditya.messtrack.entity.User;
import com.aditya.messtrack.entity.Vote;
import com.aditya.messtrack.repository.PollRepository;
import com.aditya.messtrack.repository.UserRepository;
import com.aditya.messtrack.repository.VoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PollService {

    private final PollRepository pollRepository;
    private final VoteRepository voteRepository;
    private final UserRepository userRepository;

    public Poll createPoll(PollDTO pollDTO) {

        if (pollDTO.getExpiryDate().isBefore(LocalDate.now())) {
            throw new RuntimeException(
                    "Expiry date cannot be in the past"
            );
        }

        Poll poll = new Poll();

        poll.setQuestion(pollDTO.getQuestion());

        poll.setOption1(pollDTO.getOption1());
        poll.setOption1Votes(0);

        poll.setOption2(pollDTO.getOption2());
        poll.setOption2Votes(0);

        poll.setOption3(pollDTO.getOption3());
        poll.setOption3Votes(0);

        poll.setCollegeName(pollDTO.getCollegeName());
        poll.setHostelName(pollDTO.getHostelName());

        poll.setCreatedDate(LocalDate.now());
        poll.setExpiryDate(pollDTO.getExpiryDate());

        return pollRepository.save(poll);
    }

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Poll getPollById(Long id) {
        return pollRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Poll not found!"));
    }

    public String deletePollById(Long id) {
        Poll poll = getPollById(id);

        pollRepository.delete(poll);

        return "Poll deleted successfully";
    }

    public Poll updatePoll(Long id, PollDTO pollDTO) {
        if (pollDTO.getExpiryDate().isBefore(LocalDate.now())) {
            throw new RuntimeException(
                    "Expiry date cannot be in the past"
            );
        }
        Poll poll = getPollById(id);

        poll.setQuestion(pollDTO.getQuestion());

        poll.setOption1(pollDTO.getOption1());
        poll.setOption2(pollDTO.getOption2());
        poll.setOption3(pollDTO.getOption3());

        poll.setCollegeName(pollDTO.getCollegeName());
        poll.setHostelName(pollDTO.getHostelName());

        poll.setExpiryDate(pollDTO.getExpiryDate());

        return pollRepository.save(poll);
    }
    public List<Poll> getPollsByCollegeAndHostel(
            String collegeName,
            String hostelName) {

        return pollRepository.findByCollegeNameAndHostelName(
                collegeName,
                hostelName
        );
    }

    public Poll vote(Long pollId, int option, String email) {

        User user = userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        Poll poll = getPollById(pollId);

        if (voteRepository.existsByPollIdAndUserId(
                pollId,
                user.getId()
        )) {

            throw new RuntimeException(
                    "You have already voted"
            );
        }

        if (poll.getExpiryDate().isBefore(LocalDate.now())) {
            throw new RuntimeException("Poll has expired");
        }

        switch (option) {

            case 1:
                poll.setOption1Votes(
                        poll.getOption1Votes() + 1
                );
                break;

            case 2:
                poll.setOption2Votes(
                        poll.getOption2Votes() + 1
                );
                break;

            case 3:
                poll.setOption3Votes(
                        poll.getOption3Votes() + 1
                );
                break;

            default:
                throw new RuntimeException(
                        "Invalid option"
                );
        }

        Vote vote = new Vote();

        vote.setPollId(pollId);
        vote.setUserId(user.getId());

        voteRepository.save(vote);

        return pollRepository.save(poll);
    }

    public List<Poll> getActivePolls(
            String collegeName,
            String hostelName
    ) {

        return pollRepository
                .findByCollegeNameAndHostelNameAndExpiryDateGreaterThanEqual(
                        collegeName,
                        hostelName,
                        LocalDate.now()
                );
    }
}




















