package com.aditya.messtrack.repository;

import com.aditya.messtrack.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepository extends JpaRepository<Vote, Long> {

    boolean existsByPollIdAndUserId(Long pollId, Long userId);
}
