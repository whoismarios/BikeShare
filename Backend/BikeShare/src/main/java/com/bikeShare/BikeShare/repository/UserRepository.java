package com.bikeShare.BikeShare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bikeShare.BikeShare.domain.AppUser;

public interface UserRepository extends JpaRepository<AppUser, Long>{
    
}
