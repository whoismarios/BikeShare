package com.bikeShare.BikeShare.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Bike {

    @Id
    @GeneratedValue
    private Long bikeId;

    @NotNull(message = "Bike Name is required")
    @Size(min = 2, max = 30, message = "Bike name must be between 2 and 30 characters")
    private String bikeName;

    @ManyToOne
    private AppUser owner;

    @NotNull(message = "Brand is required")
    @Size(min = 2, max = 30, message = "Brand must be between 2 and 30 characters")
    private String brand;

    @NotNull(message = "Size is required")
    @Size(min = 1, max = 3, message = "Size must be between 1 and 3 characters")
    private String size;

    @NotNull(message = "Description is required")
    @Size(min = 5, max = 60, message = "Description must be between 5 and 60 characters")
    private String description;

    @NotNull(message = "Price per Day is required")
    @DecimalMin(value = "0.0", message = "Price per day must be at least 0.0")
    @DecimalMax(value = "100.0", message = "Price per day must be at most 100.0")
    private double pricePerDay;

    @NotNull(message = "Price per Month is required")
    @DecimalMin(value = "0.0", message = "Price per week must be at least 0.0")
    @DecimalMax(value = "500.0", message = "Price per week must be at most 500.0")
    private double pricePerWeek;

    private boolean isRented = false;

    @NotNull(message = "Image Path is required")
    @Size(min = 2, max = 50, message = "Image path must be between 2 and 50 characters")
    private String imagePath;

    public Long getBikeId() {
        return bikeId;
    }

    public void setBikeId(Long bikeId) {
        this.bikeId = bikeId;
    }

    public String getBikeName() {
        return bikeName;
    }

    public void setBikeName(String bikeName) {
        this.bikeName = bikeName;
    }

    public AppUser getOwner() {
        return owner;
    }

    public void setOwner(AppUser owner) {
        this.owner = owner;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(double pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public double getPricePerWeek() {
        return pricePerWeek;
    }

    public void setPricePerWeek(double pricePerWeek) {
        this.pricePerWeek = pricePerWeek;
    }

    public boolean isRented() {
        return isRented;
    }

    public void setRented(boolean isRented) {
        this.isRented = isRented;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    
}
