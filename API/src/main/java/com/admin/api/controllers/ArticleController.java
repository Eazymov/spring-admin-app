package com.admin.api.controllers;

import java.util.List;
import java.util.UUID;
import java.util.Optional;

import com.admin.api.models.article.Article;
import com.admin.api.services.ArticleService;
import com.admin.api.models.article.ArticleInput;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
public class ArticleController {
  @Autowired
  private ArticleService service;

  @Autowired
  private BCryptPasswordEncoder cryptEncoder;

  @GetMapping("/articles")
  public ResponseEntity<List<Article>> getArticles() {
    return ResponseEntity.ok(service.findAll());
  }

  @GetMapping("/articles/{id}")
  public ResponseEntity<Optional<Article>> getArticleById(@PathVariable("id") UUID id) {
    return ResponseEntity.ok(service.findById(id));
  }

  @PutMapping("/articles")
  public ResponseEntity<Article> updateArticle(@RequestBody ArticleInput articleInput) {
    return ResponseEntity.ok(service.update(articleInput));
  }

  @PostMapping("/articles")
  public ResponseEntity<Article> createArticle(@RequestBody ArticleInput articleInput) {
    return ResponseEntity.ok(service.create(articleInput));
  }
}
