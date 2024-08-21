package com.api.products.controllers;

import com.api.products.models.ProductModel;
import com.api.products.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping
    public List<ProductModel> getAll() {
        return productService.getAllProducts();
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody ProductModel product) {
        return productService.saveProduct(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody ProductModel productModel) {
        return productService.updateProduct(id, productModel);
    }

}
