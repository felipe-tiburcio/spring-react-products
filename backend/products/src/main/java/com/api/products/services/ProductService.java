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
import java.util.Optional;

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

    public ResponseEntity<?> updateProduct(Long id, ProductModel updatedProduct) {
        if (
            updatedProduct.getName().isEmpty() || updatedProduct.getBrand().isEmpty()
        ) {
            responseModel.setMessage("Product's name and category are mandatory.");

            return new ResponseEntity<ResponseModel>(responseModel, HttpStatus.BAD_REQUEST);
        }

        Optional<ProductModel> existingProduct = productRepository.findById(id);

        if (existingProduct.isPresent()) {
            existingProduct.get().setName(updatedProduct.getName());
            existingProduct.get().setBrand(updatedProduct.getBrand());

            productRepository.save(existingProduct.get());

            return new ResponseEntity<ResponseModel>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<ResponseModel>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public ResponseEntity<?> deleteProduct(Long id) {
        Optional<ProductModel> product = productRepository.findById(id);

        if (product.isPresent()) {
            productRepository.delete(product.get());

            return new ResponseEntity<ProductModel>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<ProductModel>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
