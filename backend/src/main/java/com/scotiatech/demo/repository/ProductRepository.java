package com.scotiatech.demo.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import com.scotiatech.demo.entity.Product;

public interface ProductRepository extends ReactiveCrudRepository<Product, String> {
}
