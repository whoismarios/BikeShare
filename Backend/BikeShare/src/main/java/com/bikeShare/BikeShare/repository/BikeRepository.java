package com.bikeShare.BikeShare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bikeShare.BikeShare.domain.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long>{
    
}
