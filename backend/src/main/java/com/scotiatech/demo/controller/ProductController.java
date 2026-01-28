package com.scotiatech.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/products")
public class ProductController {

    @GetMapping("/")
    public String holaMundo() {
        return "Hola mundo!";
    }
}
