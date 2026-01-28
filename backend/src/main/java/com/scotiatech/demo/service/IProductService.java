package com.scotiatech.demo.service;

import com.scotiatech.demo.dto.CreateProductDTO;
import com.scotiatech.demo.dto.ProductDTO;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IProductService {
    Mono<ProductDTO> create(CreateProductDTO product);
    Flux<ProductDTO> readAll();
    Mono<ProductDTO> readOneById(String id);
    Mono<ProductDTO> update(String id, CreateProductDTO product);
    Mono<Void> delete(String id);
}


