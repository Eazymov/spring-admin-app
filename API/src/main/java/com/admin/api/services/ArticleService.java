package com.admin.api.services;

import java.util.List;
import java.util.UUID;
import java.util.Optional;
import java.sql.Timestamp;

import com.admin.api.models.user.User;
import com.admin.api.models.article.Article;
import com.admin.api.models.article.ArticleInput;
import com.admin.api.repositories.ArticleRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ArticleService {
  @Autowired
  private UserService userService;

  @Autowired
  private ArticleRepository repository;

  public List<Article> findAll() {
    return (List<Article>) repository.findAll();
  }

  public Optional<Article> findById(UUID id) {
    return repository.findById(id);
  }

  public Article update(ArticleInput articleInput) {
    UUID id = articleInput.getId();
    User currentUser = userService.findCurrent();
    Article article = findById(id).orElseThrow();
    Timestamp timeStamp = new Timestamp(System.currentTimeMillis());

    article.setTitle(articleInput.getTitle());
    article.setContent(articleInput.getContent());
    article.setDescription(articleInput.getDescription());
    article.setUpdatedOn(timeStamp);
    article.setUpdatedBy(currentUser);

    return repository.save(article);
  }

  public Article create(ArticleInput articleInput) {
    User currentUser = userService.findCurrent();
    Timestamp timeStamp = new Timestamp(System.currentTimeMillis());

    Article article = new Article(
      articleInput.getId(),
      articleInput.getTitle(),
      articleInput.getDescription(),
      articleInput.getContent(),
      timeStamp,
      timeStamp,
      currentUser,
      currentUser
    );
    
    return repository.save(article);
  }
}
