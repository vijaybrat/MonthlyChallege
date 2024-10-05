package com.example.Monthly.Challenges;

import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ChallengeService {

    ChallengeRepository challengeRepository;

    public ChallengeService(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    public List<Challenge> getAllChallenges() {
        return challengeRepository.findAll();
    }

    public boolean addChallenge(Challenge challenge) {
        if (challenge != null) {
            challengeRepository.save(challenge);
            return true;
        } else {
            return false;
        }
    }

    public List<Challenge> getChallenges(String month) {
        List<Challenge> challenges = challengeRepository.findByMonthIgnoreCase(month);
        return challenges != null ? challenges : Collections.emptyList();
    }

    public boolean updateChallenge(Long id, Challenge newChallenge) {
        Optional<Challenge> challengeOptional = challengeRepository.findById(id);
        if (challengeOptional.isPresent()) {
            Challenge existingChallenge = challengeOptional.get();
            existingChallenge.setDescription(newChallenge.getDescription());
            existingChallenge.setMonth(newChallenge.getMonth());
            challengeRepository.save(existingChallenge);
            return true;
        }
        return false;
    }

    public boolean deleteChallenge(Long id) {
        if (challengeRepository.existsById(id)) {
            challengeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
