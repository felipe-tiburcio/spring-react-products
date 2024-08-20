package com.api.products.services;

import com.api.products.models.ProductModel;
import com.api.products.models.ResponseModel;
import com.api.products.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ResponseModel responseModel;

    public List<ProductModel> getAllProducts() {
        return productRepository.findAll();
    }

    public ResponseEntity<?> saveProduct(@RequestBody ProductModel productModel) {
        if (
            productModel.getName().isEmpty() || productModel.getBrand().isEmpty()
        ) {
            responseModel.setMessage("Product's name and category are mandatory.");

            return new ResponseEntity<ResponseModel>(responseModel, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<ProductModel>(productRepository.save(productModel), HttpStatus.CREATED);
    }
}
