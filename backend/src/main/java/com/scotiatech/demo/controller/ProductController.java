package com.scotiatech.demo.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.scotiatech.demo.dto.CreateProductDTO;
import com.scotiatech.demo.dto.ProductDTO;
import com.scotiatech.demo.service.ProductService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public Mono<ProductDTO> createProduct(@RequestBody CreateProductDTO dto) {
        return productService.create(dto);
    }

    @GetMapping
    public Flux<ProductDTO> readProducts() {
        return productService.readAll();
    }

    @GetMapping("/{id}")
    public Mono<ProductDTO> readProduct(@PathVariable String id) {
        return productService.readOneById(id);

    }

    @PutMapping("/{id}")
    public Mono<ProductDTO> updateProduct(@PathVariable String id, @RequestBody CreateProductDTO dto) {
        return productService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> deleteProduct(@PathVariable String id) {
        return productService.delete(id);
    }
}
