package com.scotiatech.demo;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webflux.test.autoconfigure.WebFluxTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.reactive.server.WebTestClient;

import com.scotiatech.demo.controller.ProductController;
import com.scotiatech.demo.dto.ProductDTO;
import com.scotiatech.demo.service.ProductService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@WebFluxTest(ProductController.class)
class ScotiaTechProjectApplicationTests {
	
    @Autowired
    private WebTestClient webTestClient;

    @MockitoBean
    private ProductService productService;

    @Test
    void shouldCreateProduct() {
        ProductDTO response = new ProductDTO(
                "id-123", "CODE1", "Product 1", "Desc",
                null, null, true
        );

        Mockito.when(productService.create(any()))
                .thenReturn(Mono.just(response));

        webTestClient.post()
                .uri("/api/products")
                .bodyValue(new ProductDTO(null, "CODE1", "Product 1", "Desc", null, null, true))
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .jsonPath("$.id").isEqualTo("id-123")
                .jsonPath("$.code").isEqualTo("CODE1");
    }

    @Test
    void shouldGetProductById() {
        ProductDTO response = new ProductDTO(
                "id-123", "CODE1", "Product 1", "Desc",
                null, null, true
        );

        Mockito.when(productService.readOneById("id-123"))
                .thenReturn(Mono.just(response));

        webTestClient.get()
                .uri("/api/products/id-123")
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .jsonPath("$.id").isEqualTo("id-123");
    }

    @Test
    void shouldGetAllProducts() {
        Mockito.when(productService.readAll())
                .thenReturn(Flux.just(
                        new ProductDTO("1", "C1", "P1", null, null, null, true),
                        new ProductDTO("2", "C2", "P2", null, null, null, true)
                ));

        webTestClient.get()
                .uri("/api/products")
                .exchange()
                .expectStatus().isOk()
                .expectBodyList(ProductDTO.class)
                .hasSize(2);
    }

    @Test
    void shouldUpdateProduct() {
        ProductDTO updated = new ProductDTO(
                "id-123", "CODE2", "Updated", "Desc",
                null, null, true
        );

        Mockito.when(productService.update(eq("id-123"), any()))
                .thenReturn(Mono.just(updated));

        webTestClient.put()
                .uri("/api/products/id-123")
                .bodyValue(updated)
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .jsonPath("$.code").isEqualTo("CODE2");
    }

    @Test
    void shouldDeleteProduct() {
        Mockito.when(productService.delete("id-123"))
                .thenReturn(Mono.empty());

        webTestClient.delete()
                .uri("/api/products/id-123")
                .exchange()
                .expectStatus().isOk();
    }
}
