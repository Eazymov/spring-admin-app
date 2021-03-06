package com.admin.api.repositories;

import java.util.UUID;

import com.admin.api.models.article.Article;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface ArticleRepository extends CrudRepository<Article, UUID> {}
