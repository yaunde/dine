package com.dine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

//@EntityScan("com.dine.entity")
public class DineApplication {

	public static void main(String[] args) {
		SpringApplication.run(DineApplication.class, args);
	}
}
