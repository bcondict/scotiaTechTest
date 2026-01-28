package com.scotiatech.demo.service;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.scotiatech.demo.dto.CreateProductDTO;
import com.scotiatech.demo.dto.ProductDTO;
import com.scotiatech.demo.entity.Product;
import com.scotiatech.demo.repository.ProductRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ProductService implements IProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    /* create */
    @Override
    public Mono<ProductDTO> create(CreateProductDTO dto) {
        String id = UUID.randomUUID().toString();
        LocalDateTime regDate = LocalDateTime.now();
        LocalDateTime modDate = LocalDateTime.now();
        Product product = new Product(id, dto.getCode(), dto.getName(), dto.getDescription(), regDate, modDate,
                dto.getState());
        return repository.save(product)
                .map(p -> new ProductDTO(p.getId(), p.getCode(), p.getName(), p.getDescription(), p.getModDate(),
                        p.getRegDate(), p.getState()));
    }

    /* read */
    @Override
    public Flux<ProductDTO> readAll() {
        return repository.findAll()
                .map(p -> new ProductDTO(p.getId(), p.getCode(), p.getName(), p.getDescription(), p.getModDate(),
                        p.getRegDate(), p.getState()));
    }

    /* read */
    @Override
    public Mono<ProductDTO> readOneById(String id) {
        return repository.findById(id)
                .map(p -> new ProductDTO(p.getId(), p.getCode(), p.getName(), p.getDescription(), p.getModDate(),
                        p.getRegDate(), p.getState()));
    }

    /* update */
    @Override
    public Mono<ProductDTO> update(String id, CreateProductDTO dto) {
        return repository.findById(id)
                .flatMap(existing -> {
                    if (dto.getCode() != null) {
                        existing.setCode(dto.getCode());
                    }
                    if (dto.getName() != null) {
                        existing.setName(dto.getName());
                    }
                    if (dto.getDescription() != null) {
                        existing.setDescription(dto.getDescription());
                    }
                    if (dto.getState() != null) {
                        existing.setState(dto.getState());
                    }
                    existing.setModDate(LocalDateTime.now());

                    existing.markNotNew();

                    return repository.save(existing);
                })
                .map(p -> new ProductDTO(p.getId(), p.getCode(), p.getName(), p.getDescription(), p.getModDate(),
                        p.getRegDate(), p.getState()));
    }

    /* delete */
    @Override
    public Mono<Void> delete(String id) {
        return repository.deleteById(id);
    }
}
