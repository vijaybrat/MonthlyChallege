package com.example.Monthly.Challenges;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/challenges")
@CrossOrigin(origins = "http://localhost:5173/")
public class ChallengeController {

    private ChallengeService challengeService;

    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }

    @GetMapping

    public ResponseEntity<List<Challenge>> getAllChallenges() {
        return new ResponseEntity<>(challengeService.getAllChallenges(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addChallenge(@RequestBody Challenge e) {
        boolean isAdded = challengeService.addChallenge(e);
        if (isAdded) {
            return new ResponseEntity<>("Added Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Not Added", HttpStatus.NOT_IMPLEMENTED);
        }
    }

    @GetMapping("/{month}")
    public ResponseEntity<List<Challenge>> getChallenges(@PathVariable String month) {
        List<Challenge> monthlyChallenges = challengeService.getChallenges(month);
        if (!monthlyChallenges.isEmpty()) {
            return new ResponseEntity<>(monthlyChallenges, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<String> updateChallenge(@PathVariable Long id, @RequestBody Challenge newChallenge) {
        boolean isUpdated = challengeService.updateChallenge(id, newChallenge);
        if (isUpdated) {
            return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Update fail", HttpStatus.NOT_IMPLEMENTED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteChallenge(@PathVariable Long id) {
        boolean isDeleted = challengeService.deleteChallenge(id);
        if (isDeleted) {
            return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed", HttpStatus.NOT_IMPLEMENTED);
        }
    }
}

