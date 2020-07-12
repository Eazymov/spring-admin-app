package com.admin.api.models.article;

import java.util.UUID;

import com.admin.api.models.base.BaseShort;

public class ArticleInput extends BaseShort {
  private String title;

  private String description;

  private String content;

  public ArticleInput() {}

  public ArticleInput(
    UUID id,
    String title,
    String description,
    String content
  ) {
    super(id);

    this.title = title;
    this.description = description;
    this.content = content;
  }

  public String getTitle() {
    return title;
  }

  public String getDescription() {
    return description;
  }

  public String getContent() {
    return content;
  }
}
